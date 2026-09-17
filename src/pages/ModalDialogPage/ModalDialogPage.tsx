import Modal from "@/components/Modal";
import { useState, type FC } from "react";

const DATA = {
  title: "Modal Title",
  content:
    "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.",
};

const ModalDialogPage: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>open</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div>{DATA.title}</div>
        <div>{DATA.content}</div>
      </Modal>
    </>
  );
};

export default ModalDialogPage;
