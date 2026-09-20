import Button from "@/components/Button";
import { useState, type FC } from "react";

const LANGUAGES: FrontEndLanguage[] = [
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

type FrontEndLanguage = {
  title: string;
  content: string;
};

const TabsPage: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <>
      <div className="flex gap-2">
        {LANGUAGES.map((language, i) => (
          <Button
            variant={activeTab === i ? "secondary" : "primary"}
            onClick={() => setActiveTab(i)}
            role="tab"
            aria-selected={i === activeTab}
            aria-controls={`tabpanel-${i}`}
            id={`tab-${i}`}
          >
            {language.title}
          </Button>
        ))}
      </div>
      <div role="tabpanel" aria-labelledby={`tab-${activeTab}`}>{LANGUAGES[activeTab].content}</div>
    </>
  );
};

export default TabsPage;
