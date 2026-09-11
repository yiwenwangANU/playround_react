import type { FC } from "react";
import { MessageSquare, Heart, Repeat2, Share } from "lucide-react";
import formatNum from "./utils/formatNum";
type User = {
  name: string;
  thumbNail: string;
};

interface Props {
  user: User;
  metaData: string;
  content: string;
  message: number;
  like: number;
  repeat: number;
}

const Tweet: FC<Props> = ({
  user,
  metaData,
  content,
  message,
  like,
  repeat,
}) => (
  <div className="my-2 flex gap-3 rounded-2xl border border-[#cfd9de] p-3 font-sans">
    <img
      src={user.thumbNail}
      alt="user-thumbNail"
      className="h-12 w-12 shrink-0 rounded-full"
    />
    <div>
      <div className="flex gap-1 text-[15px]">
        <div className="font-bold">{user.name}</div>
        <div className="text-[#71767b]">{metaData}</div>
      </div>
      <div className="mt-0.5 mb-3 text-[#0f1419]">{content}</div>
      <div className="flex max-w-106.25 justify-between">
        <div className="flex items-center gap-3 text-[#536471]">
          <MessageSquare className="h-4 w-4" />
          <div className="text-[13px]">{formatNum(message)}</div>
        </div>
        <div className="flex items-center gap-3 text-[#536471]">
          <Repeat2 className="h-4 w-4" />
          <div className="text-[13px]">{formatNum(repeat)}</div>
        </div>
        <div className="flex items-center gap-3 text-[#536471]">
          <Heart className="h-4 w-4" />
          <div className="text-[13px]">{formatNum(like)}</div>
        </div>
        <Share className="h-4 w-4 text-[#536471]" />
      </div>
    </div>
  </div>
);

export default Tweet;
