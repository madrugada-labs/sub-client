export const Influencer = {
  ID: "abril_zucchi",
  NAME: "Abril Zucchi",
  INFO: "Solidity Blockchain Developer made in Buenos Aires, web3 builder and crypto enthusiast",
  TWITTER: "https://twitter.com/abruzuc",
  GITHUB: "https://github.com/abrilzucchi",
  LINKEDIN: "https://www.linkedin.com/in/abrilzucchi/",
  DOMAIN: "abril.dorse.io",
};

// const BASEURL = "https://dorse.io"
const BASEURL = "https://develop.dorse-front-end.pages.dev";
export const WEBSITE = {
  HOME: BASEURL,
  SIGNUP: `${BASEURL}/signup`,
  SIGNIN: `${BASEURL}/signin`,
  FINDJOBS: `${BASEURL}/find-jobs`,
  JOB: (id: string) => `${BASEURL}/job/${id}`,
};
