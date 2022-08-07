// TODO : get the top header name from process env or somewhere configurable
export const Header = () => {
  return (
    <>
      <div className="absolute top-0 flex h-[35px] md:h-[41px] w-full items-center justify-center bg-[#7E48D9]">
        <p className="leading text-[12px] md:text-[18px] font-sora font-[600] leading-[23px] tracking-[-0.03em]">
          Abril Zucchi x dorse
        </p>
      </div>
      <div className="absolute top-[41px] flex h-[77px] md:h-[104px] w-full items-center justify-between border-b border-[#928CA6] border-opacity-20 pl-6 pr-3 md:pl-[96px] md:pr-[53px] pt-[33px] pb-[25px]">
        <img
          alt="logo"
          src="/icons/dorse_logo.svg"
          className="h-[28px] md:h-[37px]"
        />
        <div className="gap-2 flex items-center gap-3">
          <button className="flex h-[38px] md:h-[46px] w-[85px] md:w-[168px] items-center justify-center gap-1.5 rounded-full border hover-opacity-80">
            <img
              className="hidden md:block w-[18px] h-[18px]"
              src="/icons/sign-out.svg"
            />
            <p className="font-mono text-[11px] md:text-[14px] leading-[18px]">
              LOGIN
            </p>
          </button>
          <button className="bg-dorse flex h-[38px] md:h-[46px] w-[90px] md:w-[150px] items-center justify-center gap-1 rounded-full hover-opacity-80">
            <p className="font-mono text-[11px] md:text-[14px] font-[700]">
              FIND JOBS
            </p>
          </button>
        </div>
      </div>
    </>
  );
};
