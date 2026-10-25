"use client";

import { useResumes } from "../hooks/useResumes";
import HomeHeader from "./HomeHeader";
import ResumeList from "./ResumeList";

export default function HomePageClient() {
  const { resumes, loadingResumes } = useResumes();

  return (
    <section className="main-section">
      <HomeHeader
        hasResumes={resumes.length > 0}
        loadingResumes={loadingResumes}
      />

      <ResumeList loadingResumes={loadingResumes} resumes={resumes} />
    </section>
  );
}
