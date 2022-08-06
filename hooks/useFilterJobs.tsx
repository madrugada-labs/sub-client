import { useMemo } from "react";

import Fuse from "fuse.js";

import {
  JobAdCandidate,
  JobAdCompany,
  JobAdInternalRecruiter,
} from "../types/data";

const useFilterJobs = <
  T extends JobAdCompany | JobAdInternalRecruiter | JobAdCandidate
>(
  jobs: T[],
  searchText: string
): T[] => {
  const fuse = useMemo(() => {
    const options: Fuse.IFuseOptions<T> = {
      includeScore: true,
      minMatchCharLength: 2,
      threshold: 0.3,
      keys: [
        { name: "title", weight: 4 },
        { name: "status", weight: 2 },
        { name: "company.name", weight: 2 },
        { name: "location", weight: 2 },
        { name: "requirements", weight: 2 },
        { name: "preferred", weight: 2 },
        { name: "jobSkills", weight: 2 },
      ],
    };

    return new Fuse(jobs, options);
  }, [jobs]);

  const filteredJobs = useMemo(() => {
    if (searchText?.length < 2) return jobs;

    return fuse.search(searchText).map(({ item }) => item);
  }, [searchText, jobs, fuse]);

  return filteredJobs;
};

export default useFilterJobs;
