import { customData } from "@/constants/custom";
import { InfluencerType } from "@/constants/types";

export const Influencer: InfluencerType = Object.assign(customData, {
  NAME: "Vanshika Srivastava",
  INFO: `Vanshika Srivastava is a tech and community evangelist. Her expertise happens in building and scaling communities across Web2,Web3 and SaaS.`,
  TWITTER: "https://twitter.com/ThisisVanshika",
  GITHUB: "https://github.com/abrilzucchi",
  LINKEDIN: "https://www.linkedin.com/in/vanshika-srivastava/",
  DOMAIN: "vanshika.dorse.io",
  POSTS: ["1555897872511795205", "1565256945094705152", "1556916400039821313"],
});

const BASEURL = `https://${process.env.NEXT_PUBLIC_PROD_FRONTEND}`;
export const WEBSITE = {
  HOME: BASEURL,
  SIGNUP: `${BASEURL}/signup`,
  SIGNIN: `${BASEURL}/signin`,
  FINDJOBS: `${BASEURL}/find-jobs`,
  JOB: (id: string) => `${BASEURL}/job/${id}`,
};
