import { FunctionComponent } from "react";

import type { NextPage } from "next";
import Image from "next/image";

import { Img } from "@/components/common/Img";
import { Header } from "@/components/layout/Header";
import { JobSearch } from "@/components/pages/home/JobSearch";
import { TwitterPosts } from "@/components/pages/home/TwitterPost";

const Home: NextPage = () => {
  return (
    <div className="bg-bg pt-[144px]">
      <Header />
      <section className="mx-auto w-full w-full px-10 pt-[55px] lg:w-lg lg:px-0">
        <InfluencerInfoSection />
      </section>
      <section className="mx-auto w-full px-10 pt-[112px] lg:w-lg lg:px-0">
        <AboutWithTwitterPosts />
      </section>
      <section className="w-full pt-[96px]">
        <MoneyEarnInfo />
      </section>
      <section className="mx-auto w-full px-10 pt-[116px] lg:w-lg lg:px-0">
        <JobSearch />
      </section>
    </div>
  );
};

const MoneyEarnInfo = () => {
  return (
    <div className="w-full">
      <div className="flex w-full flex-col gap-3">
        <h5 className="text-center font-sora text-[18px] leading-[22px] tracking-[-0.03em] text-primary">
          ENDORSING PEOPLE
        </h5>
        <h2 className="text-center font-sora text-[42px] font-[600] leading-[53px] tracking-[-0.03em]">
          How Dorse works
        </h2>
      </div>
      <div className="flex items-center justify-center">
        <h2 className="mt-16 w-fit font-mono text-[39px] leading-[51px] tracking-[-0.03em]">
          <span className="text-[#A4EB99]">if</span>(
          <span className="text-[#AA9CFF]">recommendedPerson.isYou</span>()){" "}
          {"{"}
          <br />
          &nbsp;&nbsp;&nbsp;yourMoney.add(
          <span className="text-[#D880EA]">getReferralFees</span>
          ())
          <br />
          {"}"}
        </h2>
      </div>
    </div>
  );
};

const AboutWithTwitterPosts = () => {
  return (
    <div className="grid grid-cols-[351px,min-content] overflow-auto gap-[34px] hide-scrollbar">
      <div className="flex h-[300px] min-w-[351px] flex-col justify-between rounded-2xl border border-[#D9D9D9] px-6 pt-9 pb-6">
        <div>
          <h4 className="font-sora text-[28px] leading-[35px] tracking-[-0.03em]">
            About Abril Zucchi
          </h4>
          <p className="mt-3 pr-[7px] font-mono leading-[24px] tracking-[-0.03em] text-[#C4C4C4]">
            Solidity Blockchain Developer made in Buenos Aires, web3 builder and
            crypto enthusiast
          </p>
        </div>
        <ul className="flex items-center gap-[14px]">
          <InfluencerIcon
            icon={"twitter.png"}
            link={"https://twitter.com/abruzuc"}
          />
          <InfluencerIcon
            icon={"github.png"}
            link={"https://github.com/abrilzucchi"}
          />
          <InfluencerIcon
            icon={"linkedin.png"}
            link={"https://www.linkedin.com/in/abrilzucchi/"}
          />
        </ul>
      </div>
      <TwitterPosts id={1} />
    </div>
  );
};

const InfluencerIcon: FunctionComponent<{ icon: string; link: string }> = ({
  icon,
  link,
}) => {
  return (
    <li className="h-[42px] w-[42px]">
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={link}
        className="h-full w-full flex items-center justify-center rounded-full bg-white p-[7px] transition-opacity duration-200 hover:opacity-80"
      >
        <Image width={28} height={28} src={`/icons/${icon}`} />
      </a>
    </li>
  );
};

const InfluencerInfoSection = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <div>
        <h2 className="font-sora text-[100px] leading-[100px] tracking-[-0.03em]">
          <span className="font-[600]">Great jobs</span> by
          <br />
          Abril Zucchi
        </h2>
        <p className="pt-[31px] font-mono text-[20px] leading-[26px] tracking-[-0.02em] text-[#DADADA]">
          We flip the script on recruiting...
          <br />
          no more small finder&apos;s fees, we&apos;re paying you
          <br />
          serious amounts of cash for your endorsement!
        </p>
        <div className="mt-8">
          <button className="bg-dorse flex h-[52px] w-[304px] items-center justify-center rounded-full">
            <p className="font-mono text-base font-[700] leading-[21px]">
              FIND JOBS AND ENDORSE
            </p>
          </button>
        </div>
      </div>
      <Img src="/image/influencer.png" className="h-[423px] w-[356px]" />
    </div>
  );
};

export default Home;
