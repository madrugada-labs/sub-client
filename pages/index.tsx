import type { NextPage } from "next";
import { Header } from "@/components/layout/Header";
import { Img } from "@/components/common/Img";

const Home: NextPage = () => {
  return (
    <div className="bg-bg pt-[144px]">
      <Header />
      <section className="mx-auto w-full pt-[55px] lg:w-lg">
        <InfluencerInfoSection />
      </section>
      <section className="mt-[112px]"></section>
    </div>
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
