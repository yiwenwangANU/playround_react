import type { FC } from "react";
import Accordion from "./components/Accordion";
const DATA = {
  HTML: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  CSS: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
  JavaScript:
    "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
};

const Test: FC = () =>
  Object.entries(DATA).map(([key, value]) => (
    <Accordion title={key} content={value} />
  ));

export default Test;
