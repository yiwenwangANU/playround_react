import type { FC } from "react";
import Modal from "../../../../../../components/Modal";
import type { Schema } from "../../../../FlightBookerPage";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  flight: Schema;
}

const Dialog: FC<Props> = ({ isOpen, onClose, flight }) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      {flight.flightType === "oneWay" && (
        <span>You have booked a one-way flight on {flight.departureDate}</span>
      )}
      {flight.flightType === "roundTrip" && flight.returnDate && (
        <span>
          You have booked a round-trip flight, departing on{" "}
          {flight.departureDate} and returning on {flight.returnDate}
        </span>
      )}
    </Modal>
  );
};

export default Dialog;
