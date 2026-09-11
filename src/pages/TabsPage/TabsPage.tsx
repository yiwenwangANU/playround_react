import Button from "@/components/Button";
import { useState, type FC } from "react";
import clsx from "clsx";

const DATA = [
  {
    title: "HTML",
    content:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    title: "CSS",
    content: "CSS is used to style HTML documents.",
  },
  {
    title: "JavaScript",
    content: "JavaScript adds behavior to web pages.",
  },
];

const TabsPage: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="mx-auto w-120 space-y-2">
      <div className="flex gap-2">
        {DATA.map((tab, i) => (
          <Button
            onClick={() => setActiveTab(i)}
            className={clsx({
              "bg-violet-500 text-white hover:text-white": i == activeTab,
            })}
          >
            {tab.title}
          </Button>
        ))}
      </div>
      <div>{DATA[activeTab].content}</div>
    </div>
  );
};

export default TabsPage;
