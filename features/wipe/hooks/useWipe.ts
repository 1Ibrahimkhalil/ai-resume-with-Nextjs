"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePuterStore } from "@/lib/puter";

export function useWipe() {
  const { auth, isLoading, error, fs, kv } = usePuterStore();
  const router = useRouter();

  const [files, setFiles] = useState<FSItem[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [actionError, setActionError] = useState<string | null>(null);

  const loadFiles = useCallback(async () => {
    const storedFiles = (await fs.readDir("./")) as FSItem[];
    setFiles(storedFiles);
  }, [fs]);

  useEffect(() => {
    if (isLoading) return;

    if (!auth.isAuthenticated) {
      router.replace("/auth?next=/wipe");
      return;
    }

    let cancelled = false;

    async function fetchFiles() {
      try {
        const storedFiles = (await fs.readDir("./")) as FSItem[];

        if (!cancelled) {
          setFiles(storedFiles);
          setActionError(null);
        }
      } catch (err: unknown) {
        if (!cancelled) {
          setActionError(
            err instanceof Error ? err.message : "Failed to load files.",
          );
        }
      }
    }

    void fetchFiles();

    return () => {
      cancelled = true;
    };
  }, [isLoading, auth.isAuthenticated, router, fs]);

  const handleDelete = async () => {
    if (isDeleting) return;

    const confirmed = window.confirm(
      "Are you sure? This will delete your stored files and app data.",
    );

    if (!confirmed) return;

    setIsDeleting(true);
    setActionError(null);

    try {
      await Promise.all(files.map((file) => fs.delete(file.path)));
      await kv.flush();
      await loadFiles();
    } catch (err: unknown) {
      setActionError(
        err instanceof Error ? err.message : "Failed to wipe app data.",
      );
    } finally {
      setIsDeleting(false);
    }
  };

  return {
    auth,
    isLoading,
    error,
    files,
    isDeleting,
    actionError,
    handleDelete,
  };
}
