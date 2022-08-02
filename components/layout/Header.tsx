import Image from "next/image";
// TODO : get the top header name from process env or somewhere configurable
export const Header = () => {
  return (
    <>
      <div className="absolute top-0 flex h-[41px] w-full items-center justify-center bg-[#7E48D9]">
        <p className="leading font-sora font-[600] leading-[23px] tracking-[-0.03em]">
          Abril Zucchi x dorse
        </p>
      </div>
      <div className="absolute top-[41px] flex h-[104px] w-full items-center justify-between border-b border-[#928CA6] border-opacity-20 pl-[96px] pr-[53px] pt-[33px] pb-[25px]">
        <Image width={175} height={47} alt="logo" src="/icons/dorse_logo.svg" />
        <div className="gap- flex items-center gap-3">
          <button className="flex h-[46px] w-[168px] items-center justify-center gap-1 rounded-full border">
            <Image width={18} height={18} src="/icons/sign-out.svg" />
            <p className="font-mono text-[14px] leading-[18px]">LOGIN</p>
          </button>
          <button className="bg-dorse flex h-[46px] w-[150px] items-center justify-center gap-1 rounded-full">
            <p className="font-mono text-[14px] font-[700]">FIND JOBS</p>
          </button>
        </div>
      </div>
    </>
  );
};
