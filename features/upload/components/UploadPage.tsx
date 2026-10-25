
"use client";

import { useState, type FormEvent } from "react";
import UploadForm from "@/features/upload/components/UploadForm";
import { useResumeUpload } from "@/features/upload/hooks/useResumeUpload";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);

  const { handleAnalyzed, isProcessing, statusText } = useResumeUpload();

  const handleFileSelect = (file: File | null) => {
    setFile(file);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const companyName = formData.get("company-name") as string;
    const jobTitle = formData.get("job-title") as string;
    const jobDescription = formData.get("job-description") as string;

    if (!file) return;

    handleAnalyzed({ companyName, jobTitle, jobDescription, file });
  };

  return (
    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Smart feedback for your dream job</h1>

        {isProcessing ? (
          <>
            <h2>{statusText}</h2>
            <img src="/images/resume-scan.gif" alt="" />
          </>
        ) : (
          <h2>Drop your resume for an ATS score and improvement tips</h2>
        )}

        {!isProcessing && (
          <UploadForm
            onFileSelect={handleFileSelect}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </section>
  );
}
