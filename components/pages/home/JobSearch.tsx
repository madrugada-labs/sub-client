import { FunctionComponent, useCallback, useState } from "react";
import { useForm } from "react-hook-form";

import clsx from "clsx";
import { useSearchParams } from "next/dist/client/components/hooks-client";
import Image from "next/image";
import { useRouter } from "next/router";

import { Img } from "@/components/common/Img";
import { JobGrid } from "@/components/pages/home/JobGrid";
import {
  OrderEnum,
  SortJobsByKeyEnum,
  useGetJobsPublicQuery,
} from "@/gql/graphql";
import useFilterJobs from "@/hooks/useFilterJobs";

export const JobSearch = () => {
  return (
    <div>
      <h2 className="font-sora text-[24px] md:text-[42px] font-[600] leading-[30px] md:leading-[53px] tracking-[-0.03em]">
        Start endorsing colleagues
        <br />
        <span className="text-[#9D9D9D] md:block hidden">
          Or start looking for jobs
        </span>
        <span className="text-[#9D9D9D] md:hidden block">Find jobs</span>
      </h2>
      <div className="pt-[18px] md:pt-[32px]">
        <JobSearchArea />
      </div>
    </div>
  );
};

const JobSearchArea = () => {
  //  TODO : query jobs and get the list of skills, display loading sign and only render after loaded
  const skills = [
    "Rust",
    "Javascript",
    "Typescript",
    "C++",
    "React",
    "Vue",
    "Cosmwasm",
    "Go",
    "Kubernetes",
    "docker",
    "linux",
    "html",
    "css",
    "Svelte",
  ];
  return <JobSearchAreaDisplay skills={skills} />;
};

const JobSearchAreaDisplay: FunctionComponent<{ skills: string[] }> = ({
  skills,
}) => {
  const { getValues: getFormValues, register } = useForm<{
    searchText: string;
  }>({
    mode: "all",
  });

  const sortBy = {
    key: SortJobsByKeyEnum.Created,
    order: OrderEnum.Desc,
  };

  const { data, loading, error } = useGetJobsPublicQuery({
    variables: {
      sortBy,
      filters: { isRemote: true },
    },
    fetchPolicy: "cache-and-network",
  });
  const jobs = data?.jobsPublic ?? [];
  const filteredJobs = useFilterJobs(jobs, getFormValues("searchText") ?? "");

  return (
    <div className="w-full">
      <div
        id="job-search-area"
        className="flex h-[52px] md:h-[94px] w-full items-center px-[16px] md:px-[30px] border border-[#4A465B] rounded-[12px] md:rounded-[21px] hover:border-[#6d6786]"
      >
        <Img className="w-5 h-5 md:w-9 md:h-9" src="/icons/search.svg" />
        <input
          {...register("searchText")}
          placeholder="Job title, keywords, skills"
          className="h-[18px] md:h-[32px] w-full pl-[10px] md:pl-[17px] bg-transparent font-mono text-[14px] md:text-[24px] leading-[18px] mdleading-[32px] tracking-[-0.39px] md:tracking-[-0.71px] placeholder-gray-300"
        />
      </div>
      <div className="pt-[33px]">
        <h3 className="font-mono text-[18px] md:text-[24px] font-mono font-[500] leading-[24px] md:leading-[32px] tracking-[-0.57px]">
          Find Jobs by Skills
        </h3>
        <section className="mt-[17px]">
          <SkillSelectArea skills={skills} />
        </section>
      </div>
      <section className="pt-[29px] md:pt-[76px]">
        <JobGrid jobs={filteredJobs} />
      </section>
    </div>
  );
};

const SkillSelectArea: FunctionComponent<{ skills: string[] }> = ({
  skills,
}) => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const handleSkillClick = useCallback(
    (skill: string) => {
      setSelectedSkills((currentSkills) => {
        if (currentSkills.includes(skill)) {
          return currentSkills.filter((s) => s !== skill);
        } else {
          return [...currentSkills, skill];
        }
      });
    },
    [selectedSkills]
  );
  return (
    <ul className="flex items-center overflow-auto md:overflow-visible md:flex-wrap gap-[10px]">
      {skills.map((skill, i) => (
        <SkillSelect
          skill={skill}
          key={skill}
          selected={selectedSkills.includes(skill)}
          handleSkillClick={() => handleSkillClick(skill)}
        />
      ))}
    </ul>
  );
};

const SkillSelect: FunctionComponent<{
  skill: string;
  selected: boolean;
  handleSkillClick: () => void;
}> = ({ skill, selected, handleSkillClick }) => {
  return (
    <li>
      <button
        onClick={handleSkillClick}
        className={clsx(
          "p-3 md:p-[14px] border",
          selected
            ? "bg-primary border-transparent"
            : "border-[#928CA6] text-grey"
        )}
      >
        <p className="font-mono text-[13px] md:text-[16px] leading-[17px] md:leading-[21px] tracking-[-0.39px] md:tracking-[-0.48px] text-center">
          {skill}
        </p>
      </button>
    </li>
  );
};
