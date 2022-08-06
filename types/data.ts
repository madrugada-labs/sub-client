import {
  GetJobsForCandidateQuery,
  GetJobsForCompanyQuery,
  GetJobsForInternalRecruiterQuery,
} from "generated/graphql";

import { DeepExtractTypeSkipArrays } from "./type-utils";

export interface ConnectOpts {
  onlyIfTrusted: boolean;
}

export type JobAdCandidate = DeepExtractTypeSkipArrays<
  GetJobsForCandidateQuery,
  ["jobsForCandidate", "jobAd"]
>;

export type JobAdInternalRecruiter = DeepExtractTypeSkipArrays<
  GetJobsForInternalRecruiterQuery,
  ["jobsForInternalRecruiter", "jobAd"]
>;

export type JobAdCompany = DeepExtractTypeSkipArrays<
  GetJobsForCompanyQuery,
  ["jobsForCompany"]
>;
