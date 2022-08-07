import dayjs from "dayjs";

import { Img } from "@/components/common/Img";

export const Footer = () => {
  return (
    <footer className="w-full h-[105px] md:h-[120px] bg-[#161844] px-[91px] flex items-center">
      <div className="w-full flex gap-[21px] flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-[15px] md:gap-[25px]">
          <a className="hover-opacity-80" href="mailto:lfg@dorse.io">
            <Img className="h-[20px] md:h-[26px]" src="/icons/email.svg" />
          </a>
          <a
            className="hover-opacity-80"
            href="https://www.linkedin.com/company/dorse/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img className="h-[18px] md:h-[25px]" src="/icons/LinkdIn.svg" />
          </a>
          <a
            className="hover-opacity-80"
            href="https://twitter.com/dorseit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img className="h-[16px] md:h-[20px]" src="/icons/twitter.svg" />
          </a>
          <a
            className="hover-opacity-80"
            href="https://github.com/madrugada-labs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img className="h-[20px] md:h-[24px]" src="/icons/github.svg" />
          </a>
        </div>
        <Img className="hidden md:block h-[27px]" src="/icons/dorse_logo.svg" />
        <p className="font-sora text-[10px] md:text-[14px] leading-[12px] md:leading-[24px] text-[#CCD2E9]">
          {dayjs().year()} All right reserved
        </p>
      </div>
    </footer>
  );
};
