import { FunctionComponent, useCallback, useState } from "react";
import { useForm } from "react-hook-form";

import clsx from "clsx";
import { useSearchParams } from "next/dist/client/components/hooks-client";
import Image from "next/image";
import { useRouter } from "next/router";

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
      <h2 className="font-sora text-[42px] font-[600] leading-[53px] tracking-[-0.03em]">
        Start endorsing colleagues
        <br />
        <span className="text-[#9D9D9D]">Or start looking for jobs</span>
      </h2>
      <div className="pt-[32px]">
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
    },
    fetchPolicy: "cache-and-network",
  });

  const jobs = data?.jobsPublic ?? [];
  const filteredJobs = useFilterJobs(jobs, getFormValues("searchText") ?? "");

  return (
    <div className="w-full">
      <div className="flex h-[94px] w-full items-center px-[30px] border border-[#4A465B] rounded-[21px]">
        <Image width={36} height={36} src="/icons/search.svg" />
        <input
          {...register("searchText")}
          placeholder="Job title, keywords, skills"
          className="h-[32px] w-full pl-[17px] bg-transparent font-mono text-[24px] leading-[32px] tracking-[-0.71px] placeholder-gray-300"
        />
      </div>
      <div className="pt-[33px]">
        <h3 className="font-mono text-[24px] font-mono font-[500] leading-[32px] tracking-[-0.57px]">
          Find Jobs by Skills
        </h3>
        <section className="mt-[17px]">
          <SkillSelectArea skills={skills} />
        </section>
      </div>
      <section className="pt-[76px]">
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
    <ul className="flex items-center flex-wrap gap-[10px]">
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
          "p-[14px] border",
          selected
            ? "bg-primary border-transparent"
            : "border-[#928CA6] text-grey"
        )}
      >
        <p className="font-mono text-[16px] leading-[21px] tracking-[-0.48px] text-center">
          {skill}
        </p>
      </button>
    </li>
  );
};
