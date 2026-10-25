import type { Metadata } from "next";
import WipePage from "@/features/wipe/components/WipePage";

export const metadata: Metadata = {
  title: "Wipe App Data | ResuAI",
  description:
    "Review your stored files and manage your ResuAI application data.",
};

export default function Page() {
  return <WipePage />;
}
