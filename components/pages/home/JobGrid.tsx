import { FunctionComponent } from "react";

import upperCase from "lodash/upperCase";

import { Img } from "@/components/common/Img";
import { JobAdCandidate } from "@/types/data";

export const JobGrid: FunctionComponent<{ jobs: JobAdCandidate[] }> = ({
  jobs,
}) => {
  return (
    <ul className="w-full grid auto-rows-max grid-cols-[291px,291px,291px,291px] gap-8">
      {jobs.map((job) => (
        <JobCard key={job.id} data={job} />
      ))}
    </ul>
  );
};

const JobCard: FunctionComponent<{ data: JobAdCandidate }> = ({ data }) => {
  return (
    <li
      onClick={(v) => console.log(data)}
      className="w-full h-[368px] bg-[#343141] rounded-[20px] pt-[25px] px-4 pb-[18px] group"
    >
      <div className="flex items-start justify-between h-[88px]">
        <figure className="flex items-center justify-center h-[88px]">
          <Img
            className="max-w-[100px] max-h-[88px] rounded-[7px]"
            src={data.company?.photoUrl as string}
          />
        </figure>
        <div>
          <div className="py-2 px-2.5 group-even:bg-secondary bg-[#A4EB99] rounded-[17px]">
            <p className="font-sora text-[#121121] text-[14px] font-[600] leading-[18px] tracking-[-0.39px] text-center">
              💰 Earn up to {data.minSalary * 0.0001}K
            </p>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <h4 className="line-clamp-2 font-sora text-[16px] leading-[20px] min-h-[40px]">
          {data.title}
        </h4>
      </div>
      <section className="pt-4">
        <div className="flex items-center gap-2">
          <div className="pl-3 pr-[11px] pb-[1px] rounded-[5px] bg-[#9A2ED1]">
            <p className="font-mono font-[500] text-[12px] leading-[16px] text-center">
              ${data.minSalary * 0.001}K - ${data.maxSalary * 0.001}K
            </p>
          </div>
          {data.isRemote && <Tag text="REMOTE" />}
        </div>
        <div className="flex items-center gap-2 flex-wrap mt-2">
          {data.location &&
            data.location
              .split(", ")
              .filter((word) => !!word)
              .map((word, index) => <Tag key={index} text={word} />)}
        </div>
      </section>
      <section className="mt-2.5">
        <p className="font-mono font-[400] text-[13px] leading-[17px] line-clamp-5">
          {data.description}
        </p>
      </section>
    </li>
  );
};

const Tag: FunctionComponent<{ text: string }> = ({ text }) => {
  return (
    <div className="bg-[#6F6C99] rounded-[5px] h-[17px] flex items-center justify-center">
      <p className="text-[12px] leading-[16px] text-center px-[7px]">
        {upperCase(text)}
      </p>
    </div>
  );
};
