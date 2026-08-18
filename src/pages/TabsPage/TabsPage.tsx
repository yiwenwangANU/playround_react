import { useState, type FC } from "react";
import Button from "../../components/Button";

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
    <div className="mx-auto w-100">
      <div className="flex items-center justify-center gap-2" role="tablist">
        {DATA.map(({ title }, i) => (
          <Button
            key={i}
            onClick={() => setActiveTab(i)}
            variant={i === activeTab ? "secondary" : "primary"}
            aria-selected={i === activeTab}
            role="tab"
          >
            {title}
          </Button>
        ))}
      </div>
      <div aria-label="tab-content">{DATA[activeTab].content}</div>
    </div>
  );
};

export default TabsPage;
