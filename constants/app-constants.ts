import { customData } from "@/constants/custom";
import { InfluencerType } from "@/constants/types";

export const Influencer: InfluencerType = Object.assign(customData, {
  NAME: "Abril Zucchi",
  INFO: "Solidity Blockchain Developer made in Buenos Aires, web3 builder and crypto enthusiast",
  TWITTER: "https://twitter.com/abruzuc",
  GITHUB: "https://github.com/abrilzucchi",
  LINKEDIN: "https://www.linkedin.com/in/abrilzucchi/",
  DOMAIN: "abril.dorse.io",
  POSTS: ["1460390066816180227", "1458455617459339264", "1513591400343953420"],
});

const BASEURL = `https://${process.env.NEXT_PUBLIC_PROD_FRONTEND}`;
export const WEBSITE = {
  HOME: BASEURL,
  SIGNUP: `${BASEURL}/signup`,
  SIGNIN: `${BASEURL}/signin`,
  FINDJOBS: `${BASEURL}/find-jobs`,
  JOB: (id: string) => `${BASEURL}/job/${id}`,
};
