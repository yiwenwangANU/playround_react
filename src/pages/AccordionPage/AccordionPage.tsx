import type { FC } from "react";
import Accordion from "./components";

const DATA = [
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

const AccordionPage: FC = () =>
  DATA.map((item, i) => (
    <>
      <Accordion key={i} title={item.title} content={item.content} />
      {i < DATA.length - 1 && <hr className="mx-2 text-gray-200" />}
    </>
  ));

export default AccordionPage;
