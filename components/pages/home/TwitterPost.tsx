import { FunctionComponent } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

const posts = [
  "1513591400343953420",
  "1458455617459339264",
  "1460390066816180227",
];
export const TwitterPosts: FunctionComponent<{ id: number }> = ({ id }) => {
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
      <TwitterTweetEmbed options={tweetOptions} tweetId={id} />
    </div>
  );
};
const tweetOptions = { theme: "dark", width: "auto" };
