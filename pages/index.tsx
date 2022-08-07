import { FunctionComponent } from "react";

import type { NextPage } from "next";
import Image from "next/image";

import { Img } from "@/components/common/Img";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JobSearch } from "@/components/pages/home/JobSearch";
import { TwitterPosts } from "@/components/pages/home/TwitterPost";
import { Influencer, WEBSITE } from "@/constants/app-constants";
import { appendReferralToLink } from "@/utils/scripts";

const Home: NextPage = () => {
  return (
    <div className="bg-bg pt-[112px] sm:pt-[144px]">
      <Header />
      <section className="mx-auto flex flex-col items-center md:block w-full px-4 pt-[55px] sm:px-5 md:px-10 xl:w-lg xl:px-0">
        <InfluencerInfoSection />
      </section>
      <section className="w-full pt-[59px] sm:pt-[112px]">
        <AboutWithTwitterPosts />
      </section>
      <section className="w-full pt-[120px] sm:pt-[96px]">
        <MoneyEarnInfo />
      </section>
      <section className="mx-auto w-full px-3 sm:pl-[32px] sm:pr-[28px] md:px-10 pt-[121px] md:pt-[116px] xl:w-lg xl:px-0">
        <JobSearch />
      </section>
      <section className="mx-auto w-full pt-[120px] md:pt-[176px] mb-[120px] md:mb-[176px]">
        <MakeYouEndorse />
      </section>
      <Footer />
    </div>
  );
};

const MakeYouEndorse = () => {
  return (
    <div className="flex flex-col items-center gap-[34px]">
      <h3 className="font-sora font-[600] text-[16px] sm:text-[28px] leading-[20px] sm:leading-[35px] tracking-[-0.03em]">
        If you don&apos;t endorse, someone else will...
      </h3>
      <a
        href={appendReferralToLink(WEBSITE.SIGNIN)}
        target="_self"
        rel="noopener noreferrer"
        className="bg-dorse px-[55px] py-4 rounded-full hover-opacity-80"
      >
        <p className="font-mono text-[14px] sm:text-[16px] leading-[21px]">
          START ENDORSING
        </p>
      </a>
    </div>
  );
};

const MoneyEarnInfo = () => {
  return (
    <div className="w-full">
      <div className="flex w-full flex-col gap-3">
        <h5 className="text-center font-sora text-[12px] sm:text-[18px] leading-[15px] sm:leading-[22px] tracking-[-0.03em] text-primary">
          ENDORSING PEOPLE
        </h5>
        <h2 className="text-center font-sora text-[26px] sm:text-[30px] leading-[32px] sm:leading-[40px] sm:text-[42px] sm:leading-[53px] font-[600] tracking-[-0.03em]">
          How Dorse works
        </h2>
      </div>
      <div className="mt-[28px] md:mt-16 flex items-center justify-center">
        <h2 className="w-fit font-mono text-[16px] leading-[22px] tracking-[-0.05em] sm:text-[30px] sm:leading-[40px] lg:text-[39px] lg:leading-[51px] tracking-[-0.03em]">
          <span className="text-[#A4EB99]">if</span>(
          <span className="text-[#AA9CFF]">recommendedPerson.isYou</span>()){" "}
          {"{"}
          <br />
          &nbsp;&nbsp;&nbsp;wallet.getPaid(
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
    <div className="flex flex-col items-center sm:grid sm:grid-cols-[351px,min-content] sm:overflow-auto gap-16 sm:gap-[34px] hide-scrollbar w-[100vw] sm:pl-[2vw]">
      <div className="flex h-[236px] sm:h-[300px] max-w-[351px] md:w-full flex-col justify-between rounded-2xl border border-[#D9D9D9] px-3 sm:px-6 pt-9 pb-[31px] sm:pb-6">
        <div className="flex justify-between items-start gap-[18px]">
          <Img
            className="sm:hidden block max-h-[100px]"
            src="/image/influencer_small.png"
          />
          <div>
            <h4 className="font-sora text-[24px] sm:text-[28px] leading-[30px] sm:leading-[35px] tracking-[-0.03em]">
              About {Influencer.NAME}
            </h4>
            <p className="mt-3 pr-[7px] text-[14px] sm:text-base font-mono leading-[18px] sm:leading-[24px] tracking-[-0.03em] text-[#C4C4C4]">
              {Influencer.INFO}
            </p>
          </div>
        </div>
        <ul className="flex items-center gap-[14px] justify-center">
          <InfluencerIcon icon={"twitter.png"} link={Influencer.TWITTER} />
          <InfluencerIcon icon={"github.png"} link={Influencer.GITHUB} />
          <InfluencerIcon icon={"linkedin.png"} link={Influencer.LINKEDIN} />
        </ul>
      </div>
      <div className="pr-4 w-full overflow-auto">
        <TwitterPosts />
      </div>
    </div>
  );
};

const InfluencerIcon: FunctionComponent<{ icon: string; link: string }> = ({
  icon,
  link,
}) => {
  return (
    <li className="h-[38px] w-[38px] sm:h-[42px] sm:w-[42px]">
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={link}
        className="h-full w-full flex items-center justify-center rounded-full bg-white p-[7px] hover-opacity-80"
      >
        <Image width={28} height={28} src={`/icons/${icon}`} />
      </a>
    </li>
  );
};

const InfluencerInfoSection = () => {
  const scrollToJobSearch = () => {
    const id = document.getElementById("job-search-area");
    if (!id) return;
    id.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex flex-col md:flex-row items-start justify-between">
      <div>
        <h2 className="font-sora text-[48px] leading-[60px] lg:text-[100px] lg:leading-[100px] tracking-[-0.03em] text-center md:text-left">
          <span className="font-[600]">Web3 jobs</span>{" "}
          <br className="lg:hidden block" /> by{" "}
          <br className="hidden lg:block" />
          {Influencer.NAME}
        </h2>
        <p className="pt-[31px] font-mono text-[12px] md:text-[16px] lg:text-[20px] leading-[16px] md:leading-[20px] lg:leading-[26px] tracking-[-0.02em] text-[#DADADA] md:text-left text-center">
          We flip the script on recruiting...
          <br />
          no more small finder&apos;s fees, we&apos;re paying you
          <br />
          serious amounts of cash for your endorsement!
        </p>
        <div className="mt-8 md:block flex flex-col gap-3 items-center justify-center">
          <button
            onClick={scrollToJobSearch}
            className="bg-transparent border flex sm:hidden h-[38px] sm:h-[52px] w-[189px] sm:w-[304px] items-center justify-center rounded-full hover-opacity-80"
          >
            <p className="font-mono text-[11px] sm:text-base font-[700] leading-[21px]">
              BROWSE SKILLS
            </p>
          </button>
          <a
            href={appendReferralToLink(WEBSITE.SIGNIN)}
            target="_self"
            rel="noopener noreferrer"
            className="bg-dorse flex h-[38px] sm:h-[52px] w-[189px] sm:w-[304px] items-center justify-center rounded-full hover-opacity-80"
          >
            <p className="font-mono text-[11px] sm:text-base font-[700] leading-[21px]">
              FIND JOBS AND ENDORSE
            </p>
          </a>
        </div>
      </div>
      <Img
        src="/image/influencer.png"
        className="h-[320px] md:block lg:h-[423px] hidden"
      />
    </div>
  );
};

export default Home;

// export async function getServerSideProps() {
//   const {data} = await
// }
