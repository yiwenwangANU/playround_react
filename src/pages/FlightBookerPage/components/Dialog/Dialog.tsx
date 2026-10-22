import Modal from "@/components/Modal";
import { type FC } from "react";
import type { Schema } from "../../FlightBookerSchema";

interface Props {
  open?: boolean;
  onClose: () => void;
  flightInfo: Schema | null;
}
const Dialog: FC<Props> = ({ open = false, onClose, flightInfo }) => {
  if (flightInfo === null) return;
  const { flightType, departureDate, returnDate } = flightInfo;
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <h2 id="dialog-title" className="font-bold">
        Your flight summary
      </h2>
      <p id="dialog-description">
        You have booked a {flightType === "oneWay" ? "one-way" : "round-trip"}{" "}
        flight on {departureDate}
        {returnDate && ` and return on ${returnDate}`}
      </p>
    </Modal>
  );
};

export default Dialog;
