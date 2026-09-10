import type { FC } from "react";
import type { Schema } from "../../FlightBookerSchema";
import Modal from "@/components/Modal";
import Button from "@/components/Button";

interface Props {
  data: Schema | null;
  isOpen?: boolean;
  onClose: () => void;
}

const Dialog: FC<Props> = ({ data, isOpen = false, onClose }) => {
  if (!data) return null;
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      {data.flightType === "oneWay" && (
        <div>You have booked a one-way flight on {data.departureDate}</div>
      )}
      {data.flightType === "roundTrip" && (
        <div>
          You have booked a round-trip flight, departing on {data.departureDate}{" "}
          and returning on {data.returnDate}
        </div>
      )}
      <Button onClick={onClose} className="ml-auto flex w-fit">
        OK
      </Button>
    </Modal>
  );
};

export default Dialog;
