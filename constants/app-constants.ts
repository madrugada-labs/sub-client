import {
  ApplicationStatusEnum,
  BlockchainEnum,
  Company,
  JobStatusEnum,
  ReferenceStatus,
} from "generated/graphql";
import btc from "images/btc.svg";
import eth from "images/eth.svg";
import solana from "images/solana.svg";

export const DEFAULT_USER_PHOTO_URL =
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E";

export const DEFAULT_COMPANY_PHOTO_URL =
  "https://app.thebonding.cl/Content/img/upload_empresa/default_logo.png?date=202201311817228785";

export const APPLICATION_STATUS_COLORS: Record<ApplicationStatusEnum, string> =
  {
    [ApplicationStatusEnum.Pending]: "#229EF0",
    [ApplicationStatusEnum.InReview]: "#00E0B8",
    [ApplicationStatusEnum.Interviewing]: "#F7931A",
    [ApplicationStatusEnum.TechnicalChallenge]: "#F7931A", // TODO: review color
    [ApplicationStatusEnum.OnSite]: "#F7931A", // TODO: review color
    [ApplicationStatusEnum.Offer]: "#951ED0",
    [ApplicationStatusEnum.Canceled]: "#E63D70",
    [ApplicationStatusEnum.Rejected]: "#E63D70",
    [ApplicationStatusEnum.Hired]: "#A4EB99",
    [ApplicationStatusEnum.Invalid]: "#E63D70",
  };

export const APPLICATION_STATUS_FONT_COLORS: Record<
  ApplicationStatusEnum,
  string
> = {
  [ApplicationStatusEnum.Pending]: "#fff",
  [ApplicationStatusEnum.InReview]: "#000",
  [ApplicationStatusEnum.Interviewing]: "#000",
  [ApplicationStatusEnum.TechnicalChallenge]: "#000", // TODO: review color
  [ApplicationStatusEnum.OnSite]: "#000", // TODO: review color
  [ApplicationStatusEnum.Offer]: "#fff",
  [ApplicationStatusEnum.Canceled]: "#fff",
  [ApplicationStatusEnum.Rejected]: "#fff",
  [ApplicationStatusEnum.Hired]: "#000",
  [ApplicationStatusEnum.Invalid]: "#fff",
};

export const JOB_STATUS_COLORS: Record<JobStatusEnum, string> = {
  [JobStatusEnum.Active]: "#00E0B8",
  [JobStatusEnum.Finished]: "#951ED0",
};

export const JOB_STATUS_FONT_COLORS: Record<JobStatusEnum, string> = {
  [JobStatusEnum.Active]: "#121121",
  [JobStatusEnum.Finished]: "#fff",
};

export const REFERENCE_STATUS_COLORS: Record<ReferenceStatus, string> = {
  [ReferenceStatus.Rejected]: "#951ED0",
  [ReferenceStatus.Pending]: "#F7931A",
  [ReferenceStatus.Accepted]: "#00E0B8",
};

export const BLOCKCHAIN_TOKENS: Record<BlockchainEnum, string> = {
  [BlockchainEnum.Solana]: "SOL",
  [BlockchainEnum.Bitcoin]: "BTC",
  [BlockchainEnum.Ethereum]: "ETH",
};

export const BLOCKCHAIN_ICONS: Record<BlockchainEnum, string> = {
  [BlockchainEnum.Solana]: solana,
  [BlockchainEnum.Bitcoin]: btc,
  [BlockchainEnum.Ethereum]: eth,
};

export const DORSE_COMPANY: Partial<Company> = {
  name: "Dorse",
  web: "http://www.dorse.io",
  photoUrl: "images/dorse_logo.svg",
  description: "Dorse is a great company!",
};

export const TOKEN_KEY = "dorse-token";
export const TOKEN_RENEW_KEY = `${TOKEN_KEY}-renew`;
