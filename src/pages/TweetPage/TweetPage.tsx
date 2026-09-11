import type { FC } from "react";
import Tweet from "./components/Tweet";

const DATA = [
  {
    user: {
      name: "John Doe",
      thumbNail: "https://xsgames.co/randomusers/assets/avatars/male/8.jpg",
    },
    content:
      "I got my wife a fridge for Christmas. I can't wait to see her face light up when she opens it.",
    message: 1094,
    repeat: 512,
    like: 512,
    metaData: "@johndoe · Dec 25",
  },
  {
    user: {
      name: "Jane Doe",
      thumbNail: "https://xsgames.co/randomusers/assets/avatars/female/67.jpg",
    },
    content:
      "I got my wife a fridge for Christmas. I can't wait to see her face light up when she opens it.",
    message: 193,
    repeat: 3960,
    like: 40500,
    metaData: "@johndoe · Dec 25",
  },
  {
    user: {
      name: "WALL-E",
      thumbNail: "https://xsgames.co/randomusers/assets/avatars/pixel/14.jpg",
    },
    content: "The best way to predict the future is to invent it.",
    message: 1094,
    repeat: 512,
    like: 512,
    metaData: "@johndoe · Dec 25",
  },
];

const TweetPage: FC = () =>
  DATA.map((tweet, i) => (
    <Tweet
      key={i}
      metaData={tweet.metaData}
      user={tweet.user}
      content={tweet.content}
      message={tweet.message}
      like={tweet.like}
      repeat={tweet.repeat}
    />
  ));

export default TweetPage;
