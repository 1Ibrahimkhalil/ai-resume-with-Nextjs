import Image from "next/image";
import type { ResumeFeedbackProps } from "../types";

import Summary from "./Summary";
import ATS from "./ATS";
import Details from "./Details";


export default function ResumeFeedback({
  feedback,
}: ResumeFeedbackProps) {
  return (
    <section className="feedback-section">
      <h2 className="text-4xl text-black font-bold">Resume Review</h2>

      {feedback ? (
        <div className="flex flex-col gap-8 animate-in fade-in duration-1000">
          <Summary feedback={feedback} />
          <ATS
            score={feedback.ATS.score || 0}
            suggestions={feedback.ATS.tips || []}
          />
          <Details feedback={feedback} />
        </div>
      ) : (
        <Image
          src="/images/resume-scan-2.gif"
          alt="Analyzing resume"
          width={800}
          height={600}
          unoptimized
          className="w-full h-auto"
        />
      )}
    </section>
  );
}