import { FunctionComponent } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

import { Img } from "@/components/common/Img";

// TODO : refactor into consts file
const posts = [
  "1460390066816180227",
  "1458455617459339264",
  "1513591400343953420",
];
export const TwitterPosts: FunctionComponent = () => {
  return (
    <ul className="flex items-start gap-[34px]">
      {posts.map((id) => (
        <TwitterPost key={id} id={id} />
      ))}
    </ul>
  );
};

export const TwitterPost: FunctionComponent<{ id: string }> = ({ id }) => {
  return (
    <div className="flex h-[calc(100%-20px)] max-h-[calc(100%-20px)] min-w-[361px]">
      <TwitterTweetEmbed
        placeholder={<TweetLoader />}
        options={tweetOptions}
        tweetId={id}
      />
    </div>
  );
};
const tweetOptions = { theme: "dark", width: "auto" };

const TweetLoader: FunctionComponent = () => (
  <div className="flex items-center justify-center w-[361px] h-[529px]">
    <img className="w-20 h-20" src="/icons/loading-spin.svg" />
  </div>
);
