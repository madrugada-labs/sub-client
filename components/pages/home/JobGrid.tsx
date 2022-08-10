import { FunctionComponent } from "react";

import upperCase from "lodash/upperCase";

import { Img } from "@/components/common/Img";
import { WEBSITE } from "@/constants/app-constants";
import { JobPublicFragment } from "@/gql/graphql";
import { appendReferralToLink, formatRelativeDate } from "@/utils/scripts";

export const JobGrid: FunctionComponent<{ jobs: JobPublicFragment[] }> = ({
  jobs,
}) => {
  return (
    <>
      <div className="w-full grid grid-cols-[minmax(180px,450px),minmax(180px,450px)] overflow-x-auto sm:overflow-visible sm:grid-rows-1 sm:auto-rows-max sm:grid-cols-[minmax(291px,450px),minmax(291px,450px)] lg:grid-cols-[minmax(291px,400px),minmax(291px,400px),minmax(291px,400px)] xl:grid-cols-[291px,291px,291px,291px] gap-5 md:gap-8">
        {jobs.map((job) => (
          <JobCard key={job.id} data={job} />
        ))}
      </div>
      {!jobs?.length && (
        <div className="w-full h-[200px] flex items-center justify-center">
          <Img className="w-20 h-20" src="/icons/loading-spin.svg" />
        </div>
      )}
    </>
  );
};

const JobCard: FunctionComponent<{ data: JobPublicFragment }> = ({ data }) => {
  return (
    <a
      href={appendReferralToLink(WEBSITE.JOB(data.id))}
      target="_self"
      rel="noopener noreferrer"
      className="relative w-full bg-[#343141] group hover:bg-[#4A465B] h-[227px] sm:h-[368px] rounded-[20px] pt-[15px] sm:pt-[25px] px-[10px] sm:px-4 pb-[11px] sm:pb-[18px]"
    >
      <div className="min-h-[290px] w-full flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between h-[54px] sm:h-[88px]">
            <figure className="flex items-center justify-center min-w-[110px] h-[54px] min-w-[10z0px] sm:h-[88px]">
              <Img
                className="min-w-[20px] max-w-[70px] sm:max-w-[100px] max-h-[54px] sm:max-h-[88px] rounded-[7px]"
                src={data.company?.photoUrl as string}
              />
            </figure>
            <div>
              <div className="py-[3px] sm:py-2 px-1.5 sm:px-2.5 group-even:bg-secondary bg-[#A4EB99] rounded-[17px]">
                <p className="font-sora leading-[11px] sm:leading-[18px] text-[#121121] text-[8px] sm:text-[14px] font-[600] tracking-[-0.39px] text-center">
                  💰 Earn up to {data.minSalary * 0.0001}K
                </p>
              </div>
            </div>
          </div>
          <div className="pt-[9px] sm:pt-4">
            <h4 className="line-clamp-2 font-sora text-[11px] sm:text-[16px] leading-[14px] sm:leading-[20px]">
              {data.title}
            </h4>
          </div>
          <section className="pt-1 sm:pt-2">
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="px-2 sm:pl-3 sm:pr-[11px] sm:pb-[1px] rounded-[3px] sm:rounded-[5px] bg-[#9A2ED1]">
                <p className="font-mono font-[500] text-[7px] sm:text-[12px] leading-[10px] sm:leading-[16px] text-center">
                  ${data.minSalary * 0.001}K - ${data.maxSalary * 0.001}K
                </p>
              </div>
              {data.isRemote && <Tag text="REMOTE" />}
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap mt-2">
              {data.location &&
                data.location
                  .split(", ")
                  .filter((word) => !!word)
                  .map((word, index) => <Tag key={index} text={word} />)}
            </div>
          </section>
        </div>
        <section>
          <p className="font-mono font-[400] text-[8px] leading-[8px] sm:text-[13px] sm:leading-[17px] line-clamp-5">
            {data.description}
          </p>
        </section>
      </div>
      <p className="absolute bottom-[18px] font-mono text-[14px] leading-[18px] tracking-[-0.45px] text-[#F4F4F5]">
        {formatRelativeDate(data.date)}
      </p>
    </a>
  );
};

const Tag: FunctionComponent<{ text: string }> = ({ text }) => {
  return (
    <div className="bg-[#6F6C99] rounded-[3px] sm:rounded-[5px] h-[10px] sm:h-[17px] flex items-center justify-center">
      <p className="text-[7px] sm:text-[12px] leading-[10px] sm:leading-[16px] text-center px-2 sm:px-[7px]">
        {upperCase(text)}
      </p>
    </div>
  );
};
