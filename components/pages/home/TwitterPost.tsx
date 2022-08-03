import { FunctionComponent } from "react";

export const TwitterPosts: FunctionComponent<{ url: string }> = ({ url }) => {
  return (
    <ul className="flex items-start gap-[34px]">
      {Array.from({ length: 3 }).map((_, i) => (
        <TwitterPost key={i} />
      ))}
    </ul>
  );
};

export const TwitterPost = () => {
  return (
    <div className="flex h-[456px] min-w-[361px] items-center justify-center rounded-xl border">
      <p>TWEET</p>
    </div>
  );
};
