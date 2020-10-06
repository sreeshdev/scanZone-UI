import React, { useState } from "react";
import { Icon, Label, Button } from "semantic-ui-react";
import PaymentModal from "./modal";

const StepThree = ({ reset, scanData }) => {
  console.log(scanData);
  const [modal, setModal] = useState(false);
  return (
    <div>
      <div>
        <PaymentModal modal={modal} setModal={setModal} scanData={scanData} />
        <Button icon style={{ marginTop: 50 }} onClick={() => reset()}>
          Change Scan
        </Button>

        <Button
          icon
          labelPosition="right"
          color="orange"
          style={{ marginTop: 50 }}
          onClick={() => setModal(true)}
        >
          Book this Scan
          <Icon name="payment" />
        </Button>
      </div>
    </div>
  );
};

export default StepThree;
