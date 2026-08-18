import type { FC } from "react";
import { MessageCircle, Repeat2, Heart, Share } from "lucide-react";
import formatNumber from "./utils/formatNumber";

interface Props {
  user: User;
  metadata: string;
  content: string;
  message: number;
  repeat: number;
  like: number;
}

type User = {
  name: string;
  thumbNail: string;
};

const Tweet: FC<Props> = ({
  user,
  metadata,
  content,
  message,
  repeat,
  like,
}) => (
  <div className="my-2 flex w-full gap-3 rounded-2xl border border-[#cfd9de] p-4 font-sans">
    <img
      src={user.thumbNail}
      className="h-12 w-12 rounded-full"
      alt="user-thumbNail"
    />
    <div className="flex grow flex-col">
      <div className="mb-0.5 flex gap-1">
        <div className="text-[15px] font-bold">{user.name}</div>
        <div className="text-[15px] text-[#71767b]">{metadata}</div>
      </div>
      <div className="mb-4 font-[15px] text-[#0f1419]">{content}</div>
      <div className="grid max-w-106.25 grid-cols-4 gap-2 text-[#536471]">
        <div className="flex items-center gap-3">
          <MessageCircle color="#536471" size={16} />
          <span>{formatNumber(message)}</span>
        </div>
        <div className="flex items-center gap-3">
          <Repeat2 color="#536471" size={16} />
          <span>{formatNumber(repeat)}</span>
        </div>
        <div className="flex items-center gap-3">
          <Heart color="#536471" size={16} /> <span>{formatNumber(like)}</span>
        </div>
        <div className="flex items-center">
          <Share color="#536471" size={16} />
        </div>
      </div>
    </div>
  </div>
);

export default Tweet;
