import { useState, type FC } from "react";
import Modal from "../../components/Modal";

const DATA = {
  title: "Modal Title",
  content:
    "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.",
};
const ModalDialogPage: FC = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setActive(true)} disabled={active}>
        Show Modal
      </button>
      {active && (
        <Modal className="w-200 bg-white">
          <div className="text-4xl font-bold">{DATA.title}</div>
          <div>{DATA.content}</div>
          <button onClick={() => setActive(false)}>Close</button>
        </Modal>
      )}
    </>
  );
};

export default ModalDialogPage;
