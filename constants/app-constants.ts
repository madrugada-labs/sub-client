export const Influencer = {
  ID: "abril_zucchi",
  NAME: "Abril Zucchi",
  INFO: "Solidity Blockchain Developer made in Buenos Aires, web3 builder and crypto enthusiast",
  TWITTER: "https://twitter.com/abruzuc",
  GITHUB: "https://github.com/abrilzucchi",
  LINKEDIN: "https://www.linkedin.com/in/abrilzucchi/",
};

const BASEURL =
  process.env.NODE_ENV === "production"
    ? "https://dorse.io"
    : "https://develop.dorse-front-end.pages.dev";
export const WEBSITE = {
  HOME: BASEURL,
  SIGNUP: `${BASEURL}/signup`,
  SIGNIN: `${BASEURL}/signin`,
  FINDJOBS: `${BASEURL}/find-jobs`,
  JOB: (id: string) => `${BASEURL}/job/${id}`,
};
