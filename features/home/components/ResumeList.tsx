
"use client";

import Link from "next/link";

import { Resume } from "../types/resume";
import ResumeCard from "./ResumeCard";

type ResumeListProps = {
  resumes: Resume[];
  loadingResumes: boolean;
};

export default function ResumeList({
  resumes,
  loadingResumes,
}: ResumeListProps) {
  return (
    <>
      {loadingResumes && (
        <div className="flex flex-col items-center justify-center">
          <img
            src="/images/resume-scan-2.gif"
            className="w-[200px]"
            alt="Loading resumes"
          />
        </div>
      )}

      {!loadingResumes && resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      )}

      {!loadingResumes && resumes.length === 0 && (
        <Link
          href="/upload"
          className="primary-button w-fit text-xl font-semibold"
        >
          Upload Resume
        </Link>
      )}
    </>
  );
}
