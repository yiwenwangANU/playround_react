import Modal2 from "@/components/Model2";
import { useState, type FC } from "react";

const TITLE = "Modal Dialog";
const CONTENT =
  "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.";

const ModalDialogPage: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <Modal2 open={open} onClose={() => setOpen(false)}>
        <h1>{TITLE}</h1>
        <div>{CONTENT}</div>
        <button onClick={() => setOpen(false)}>Close</button>
      </Modal2>
    </>
  );
};

export default ModalDialogPage;
