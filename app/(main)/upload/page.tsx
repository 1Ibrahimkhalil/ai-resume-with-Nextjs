
import type { Metadata } from "next";
import UploadPage from "@/features/upload/components/UploadPage";



export const metadata: Metadata = {
  title: "Upload Resume | ResuAI",
  description:
    "Upload your resume to get AI-powered ATS feedback and tips to improve it.",
};

export default function Page() {
  return <UploadPage />;
}
