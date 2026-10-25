"use client";

import { useResumeData } from "@/features/resume/hooks/useResumeData";
import { usePuterStore } from "@/lib/puter";
import ResumePreview from "./ResumePreview";
import ResumeFeedback from "./ResumeFeedback";

type ResumePageProps = {
  id: string;
};

export default function ResumePage({ id }: ResumePageProps) {
  const { fs, kv } = usePuterStore();

  const { feedback, imageUrl, resumeUrl } = useResumeData({
    id,
    fs,
    kv,
  });

  return (
    <main className="!pt-0 bg-white my-8">
      <div className="flex flex-row w-full max-lg:flex-col-reverse">
        <ResumePreview imageUrl={imageUrl} resumeUrl={resumeUrl} />
        <ResumeFeedback feedback={feedback} />
      </div>
    </main>
  );
}
