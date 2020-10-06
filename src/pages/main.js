import React, { useState } from "react";
import { Label, Transition } from "semantic-ui-react";
import StepOne from "../components/stepOne";
import StepThree from "../components/stepThree";
import StepTwo from "../components/stepTwo";

const Main = () => {
  const [primary, setPrimary] = useState(null);
  const [secondary, setSecondary] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [city, setCity] = useState(null);
  const [locality, setLocality] = useState(null);

  const cities = ["CHENNAI"];
  const localities = ["ECR", "ANNA NAGAR", "CROMEPET", "GUINDY"];
  const scans = ["MRI", "CT", "ULTRA SOUND", "X-RAY", "NOT SURE"];
  const bodyParts = [
    "ABDOMEN",
    "ANKLE",
    "BRACHAL PLEXUS",
    "CHEST",
    "ELBOWEYES (ORBITS),FACE, AND NECK",
    "FEMUR (THIGH)",
    "FOOT",
    "FOREARM",
    "HAND",
    "HEAD/BRAIN",
    "HEART",
    "HIP",
    "HUMERUS",
    "KNEE",
    "LOWER EXTREMITY (LEG)",
    "NECK",
    "PELVIS",
    "PITUITARY",
    "PROSTATE",
    "SCAPULA",
    "SHOULDER",
    "SINUSES",
    "SPINE",
    "TEMPOROMANDIBULAR JOINTS (JAW)",
    "TIBULA/FIBULA (LOWER LEG)",
    "UPPER EXTREMITY (ARM)",
    "WRIST",
    "NOT SURE",
  ];
  const reset = () => {
    setPrimary(null);
    setSecondary(null);
    setCity(null);
    setLocality(null);
    setCurrentStep(1);
  };
  return (
    <div
      style={{
        margin: 0,
        height: "100vh",
        textAlign: "center",
        backgroundImage: `url(
          "http://scanzone.org/wp-content/uploads/2020/10/CTScanner-scaled.jpg"
        )`,
        backgroundPosition: "left top",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#21cdec",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          height: "100vh",
          background: "linear-gradient(135deg,#21cdec 0%,#2939a0 100%)",
          opacity: "0.95",
          color: "white",
          padding: 100,
        }}
      >
        <Transition.Group
          animation={"fade down"}
          duration={500}
          transitionOnMount={true}
        >
          <h1>NEED A MEDICAL SCAN?</h1>
          <h2>Get amazing deals at top centers in your area.</h2>
          <h3>
            Select a scan to see exclusive pricing options.<br></br>
            Choose the Area, Centre and Type you prefer in just 3 steps.
          </h3>
        </Transition.Group>
        {currentStep === 1 ? (
          <div>
            <Label style={{ margin: 20 }}>Select Scan Type and Body Part</Label>
            <StepOne
              primary={primary}
              secondary={secondary}
              setPrimary={setPrimary}
              setSecondary={setSecondary}
              scans={scans}
              bodyParts={bodyParts}
              setCurrentStep={setCurrentStep}
            />
          </div>
        ) : currentStep === 2 ? (
          <div>
            <Label style={{ margin: 20 }}>Select City and Locality</Label>
            <StepTwo
              city={city}
              locality={locality}
              setCity={setCity}
              setLocality={setLocality}
              cities={cities}
              localities={localities}
              setCurrentStep={setCurrentStep}
            />
          </div>
        ) : (
          currentStep === 3 && (
            <div>
              <Label style={{ margin: 20 }}>Final Step!</Label>
              <StepThree
                reset={reset}
                scanData={{ primary, secondary, city, locality }}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Main;
