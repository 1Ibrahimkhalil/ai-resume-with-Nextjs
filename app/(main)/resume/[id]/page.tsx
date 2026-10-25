import { Suspense } from "react";
import type { Metadata } from "next";
import ResumePage from "@/features/resume/components/ResumePage";

export const metadata: Metadata = {
  title: "ResuAI | Review",
  description: "Detailed overview of your resume",
};

type PageProps = {
  params: Promise<{ id: string }>;
};

async function ResumePageContent({ params }: PageProps) {
  const { id } = await params;

  return <ResumePage id={id} />;
}

export default function Page({ params }: PageProps) {
  return (
    <Suspense fallback={<p>Loading resume...</p>}>
      <ResumePageContent params={params} />
    </Suspense>
  );
}