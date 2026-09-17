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
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="mx-auto w-200">
      <div className="flex gap-2">
        {LANGUAGES.map((language, i) => (
          <Button
            variant={activeIndex === i ? "secondary" : "primary"}
            onClick={() => setActiveIndex(i)}
          >
            {language.title}
          </Button>
        ))}
      </div>
      <div>{LANGUAGES[activeIndex].content}</div>
    </div>
  );
};

export default TabsPage;
