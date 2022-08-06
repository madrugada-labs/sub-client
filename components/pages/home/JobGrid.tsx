import { FunctionComponent } from "react";

import { JobAdCandidate } from "@/types/data";

export const JobGrid: FunctionComponent<{ jobs: JobAdCandidate[] }> = ({
  jobs,
}) => {
  console.log(jobs);
  return (
    <div className="flex items-center justify-center">
      <p>JOBS</p>
    </div>
  );
};
