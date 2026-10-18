import { useState, type FC } from "react";
import Accordion from "./components/Accordion";

type Tab = "HTML" | "CSS" | "JavaScript";

type AccordionItem = {
  title: Tab;
  content: string;
};

const DATA: AccordionItem[] = [
  {
    title: "HTML",
    content:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    title: "CSS",
    content:
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
  },
  {
    title: "JavaScript",
    content:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
];

const AccordionPage: FC = () => {
  const [activeTab, setActiveTab] = useState<Tab | null>(null);
  return (
    <div>
      {DATA.map((item) => (
        <Accordion
          key={item.title}
          title={item.title}
          content={item.content}
          open={activeTab === item.title}
          onToggle={() =>
            setActiveTab((prev) => (prev === item.title ? null : item.title))
          }
        />
      ))}
    </div>
  );
};

export default AccordionPage;
