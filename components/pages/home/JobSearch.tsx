import Image from "next/image";

export const JobSearch = () => {
  return (
    <div>
      <h2 className="font-sora text-[42px] font-[600] leading-[53px] tracking-[-0.03em]">
        Start endorsing colleagues
        <br />
        <span className="text-[#9D9D9D]">Or start looking for jobs</span>
      </h2>
    </div>
  );
};

const JobSearchArea = () => {
  return (
    <div className="flex h-[94px] w-full items-center px-[30px]">
      <Image width={36} height={36} src="/icons/search.svg" />
      <input className="h-[32px] pl-[17px]" />
    </div>
  );
};
