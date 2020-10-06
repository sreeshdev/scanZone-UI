import React, { useState } from "react";
import {
  Button,
  Modal,
  Step,
  Icon,
  Form,
  Input,
  Select,
  List,
} from "semantic-ui-react";

const PaymentModal = ({ modal, setModal, scanData }) => {
  const [currentStep, setCurrentStep] = useState("Details");
  const options = [
    { key: "m", text: "Male", value: "male" },
    { key: "f", text: "Female", value: "female" },
    { key: "o", text: "Other", value: "other" },
  ];
  const [formInput, setFormInput] = useState({
    firstName: "",
    lastName: "",
    gender: "male",
  });
  const handleChange = (e, { value }) =>
    setFormInput({ ...formInput, gender: value });

  return (
    <Modal
      dimmer="blurring"
      open={modal}
      onClose={() => setModal(false)}
      style={{ width: "50%", height: "70%" }}
    >
      <Modal.Header>
        <Step.Group style={{ width: "100%" }}>
          <Step
            onClick={() => setCurrentStep("Details")}
            active={currentStep === "Details" ? true : false}
            completed={
              currentStep === "Confirm" || currentStep === "Payment"
                ? true
                : false
            }
          >
            <Icon name="wheelchair" />
            <Step.Content>
              <Step.Title>Patient Details</Step.Title>
            </Step.Content>
          </Step>

          <Step
            onClick={() => setCurrentStep("Confirm")}
            active={currentStep === "Confirm" ? true : false}
            completed={currentStep === "Payment" ? true : false}
          >
            <Icon name="info" />
            <Step.Content>
              <Step.Title>Confirm Scan</Step.Title>
            </Step.Content>
          </Step>
          <Step
            onClick={() => setCurrentStep("Payment")}
            active={currentStep === "Payment" ? true : false}
          >
            <Icon name="payment" />
            <Step.Content>
              <Step.Title>Payment</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>
      </Modal.Header>
      <Modal.Content>
        {currentStep === "Details" ? (
          <Form>
            <Form.Group widths="equal">
              <Form.Field
                control={Input}
                label="First name"
                placeholder="First name"
                value={formInput.firstName}
                onChange={(e, { value }) => {
                  setFormInput({ ...formInput, firstName: value });
                }}
              />
              <Form.Field
                control={Input}
                label="Last name"
                placeholder="Last name"
                value={formInput.lastName}
                onChange={(e, { value }) => {
                  setFormInput({ ...formInput, lastName: value });
                }}
              />
              <Form.Field
                control={Select}
                label="Gender"
                value={formInput.gender}
                options={options}
                placeholder="Gender"
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        ) : currentStep === "Confirm" ? (
          <List>
            <List.Item>
              <List.Icon name="user" />
              <List.Content>
                Patient: {formInput.firstName} {formInput.lastName} -{" "}
                {formInput.gender}
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="marker" />
              <List.Content>
                Scan Type: {scanData.primary}-{scanData.secondary}
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="marker" />
              <List.Content>City: {scanData.city}</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="linkify" />
              <List.Content>Locality: {scanData.locality}</List.Content>
            </List.Item>
          </List>
        ) : (
          <Form></Form>
        )}
      </Modal.Content>
      <Modal.Actions>
        <Button
          negative
          onClick={() => {
            setModal(false);
            setCurrentStep("Details");
          }}
        >
          Cancel Booking
        </Button>
        {currentStep === "Details" ? (
          <Button positive onClick={() => setCurrentStep("Confirm")}>
            Proceed To Confirm
          </Button>
        ) : currentStep === "Confirm" ? (
          <Button positive onClick={() => setCurrentStep("Payment")}>
            Proceed To Payment
          </Button>
        ) : (
          <Button
            positive
            onClick={() => console.log("Redirecting to payemnt")}
          >
            Pay Now
          </Button>
        )}
      </Modal.Actions>
    </Modal>
  );
};
export default PaymentModal;
