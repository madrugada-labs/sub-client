import dayjs from "dayjs";

import { Influencer } from "@/constants/app-constants";

export const appendReferralToLink = (link: string) => {
  return `${link}?referralID=${Influencer.DOMAIN}`;
};

export const formatRelativeDate = (date: string): string => {
  return dayjs(date).fromNow();
};
