import React, { useState } from "react";
import { Label, Transition } from "semantic-ui-react";
import StepOne from "../components/stepOne";
import StepThree from "../components/stepThree";
import StepTwo from "../components/stepTwo";

const Main = () => {
  const [primary, setPrimary] = useState(null);
  const [secondary, setSecondary] = useState(null);
  const [subCategory, setSubCategory] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [center, setCenter] = useState(null);
  const [locality, setLocality] = useState(null);

  const scanCenters = [
    {
      Locality: "Anna Nagar",
      Center: [
        "Pro Scans",
        "Bharath Scans",
        "Saravana Scans",
        "Hi Tech",
        "Westminster",
      ],
    },
    {
      Locality: "Vadapalani",
      Center: ["Andeson", "Lister Metropolis", "Hi Tech"],
    },
    {
      Locality: "Guindy",
      Center: ["Primex", "VRR", "Westminster"],
    },
    {
      Locality: "Pallavaram",
      Center: ["Pro Scans", "Bharath Scans", "Saravana Scans"],
    },
    {
      Locality: "Nandanam",
      Center: ["Andeson", "Lister Metropolis", "Hi Tech", "Westminster"],
    },
    {
      Locality: "Alwarpet",
      Center: ["Primex", "VRR", "Hi Tech", "Westminster"],
    },
    {
      Locality: "Nungambakkam",
      Center: [
        "Pro Scans",
        "Bharath Scans",
        "Saravana Scans",
        "Andeson",
        "Westminster",
      ],
    },
    {
      Locality: "Kodabakkam",
      Center: ["Saravana Scans", "Andeson", "Lister Metropolis", "Hi Tech"],
    },
    {
      Locality: "ECR",
      Center: ["Saravana Scans", "Andeson", "Lister Metropolis", "Hi Tech"],
    },
    {
      Locality: "OMR",
      Center: ["Pro Scans", "Bharath Scans", "Saravana Scans", "Andeson"],
    },
    {
      Locality: "Parrys",
      Center: ["Lister Metropolis", "Hi Tech", "Westminster", "Primex"],
    },
    {
      Locality: "Kilpauk",
      Center: [
        "Pro Scans",
        "Bharath Scans",
        "Saravana Scans",
        "Andeson",
        "Lister Metropolis",
      ],
    },
    {
      Locality: "Perambur",
      Center: [
        "Lister Metropolis",
        "Bharath Scans",
        "Saravana Scans",
        "Andeson",
      ],
    },
  ];
  const cities = ["CHENNAI"];
  const localities = ["ECR", "ANNA NAGAR", "CROMEPET", "GUINDY"];
  const scans = [
    "MRI",
    "CT",
    "ULTRASOUND",
    "X-RAY",
    "BREAST MRI",
    "BREAST ULTRASOUND",
    "DEXA",
    "MAMMOGRAPHY",
    "NUCLEAR",
    "PET/CT",
  ];
  const types = [
    {
      scan: "CT",
      category: "ABDOMEN",
      subCategory: [
        "ANGIOGRAM",
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITH INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "CT",
      category: "ABDOMEN AND PELVIS",
      subCategory: [
        "ANGIOGRAM",
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITH INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "CT",
      category: "ABDOMINAL AORTA / ILIOFEMORAL RUNOFF",
      subCategory: ["ANGIOGRAM"],
    },
    {
      scan: "CT",
      category: "CHEST",
      subCategory: [
        "ANGIOGRAM",
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITH INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "CT",
      category: "COLONOGRAPHY (VIRTUAL COLONOSCOPY)",
      subCategory: [
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITH INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "CT",
      category: "EARS / INTERNAL AUDITORY CANALS",
      subCategory: [
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITH INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "CT",
      category: "FACE (MAXILLOFACIAL)",
      subCategory: [
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITH INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "CT",
      category: "HEAD/BRAIN",
      subCategory: [
        "ANGIOGRAM",
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITH INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "CT",
      category: "HEART",
      subCategory: [
        "CORONARY ANGIOGRAM (INTRAVENOUS CONTRAST)",
        "CORONARY CALCIUM SCORE (WITHOUT CONTRAST)",
        "STRUCTURAL ASSESSMENT",
      ],
    },
    {
      scan: "CT",
      category: "LOWER EXTREMITY (LEG)",
      subCategory: [
        "ANGIOGRAM",
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITH INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "CT",
      category: "NECK",
      subCategory: [
        "ANGIOGRAM",
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITH INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "CT",
      category: "PELVIS",
      subCategory: [
        "ANGIOGRAM",
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITH INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "CT",
      category: "PITUITARY",
      subCategory: [
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITH INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "CT",
      category: "SINUSES",
      subCategory: [
        "ANGIOGRAM",
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITH INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "CT",
      category: "SPINE",
      subCategory: ["CERVICAL", "LUMBAR", "THORACIC"],
    },
    {
      scan: "CT",
      category: "TEMPORAL BONES",
      subCategory: [
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITH INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "CT",
      category: "UPPER EXTREMITY (ARM)",
      subCategory: [
        "ANGIOGRAM",
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITH INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "CT",
      category: "UROGRAM",
      subCategory: ["WITH AND WITHOUT INTRAVENOUS CONTRAST"],
    },
    {
      scan: "MRI",
      category: "ABDOMEN",
      subCategory: [
        "ANGIOGRAM",
        "MRCP (MAGNETIC RESONANCE CHOLANGIOPANCREATOGRAPHY)",
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "MRI",
      category: "ANKLE",
      subCategory: [
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "MRI",
      category: "BRACHIAL PLEXUS",
      subCategory: [
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "MRI",
      category: "CHEST",
      subCategory: [
        "ANGIOGRAM",
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "MRI",
      category: "ELBOW",
      subCategory: ["WITH AND WITHOUT INTRAVENOUS CONTRAST"],
    },
    {
      scan: "MRI",
      category: "EYES (ORBITS), FACE, AND NECK",
      subCategory: [
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "MRI",
      category: "FEMUR (THIGH)",
      subCategory: [
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "MRI",
      category: "FOOT",
      subCategory: [
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "MRI",
      category: "FOREARM",
      subCategory: [
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "MRI",
      category: "HAND",
      subCategory: [
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "MRI",
      category: "HEAD/BRAIN",
      subCategory: [
        "ANGIOGRAM",
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "MRI",
      category: "HEART",
      subCategory: ["WITH AND WITHOUT INTRAVENOUS CONTRAST"],
    },
    {
      scan: "MRI",
      category: "HIP",
      subCategory: [
        "ARTHROGRAM (CONTRAST INJECTED INTO JOINT)",
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "MRI",
      category: "HUMERUS",
      subCategory: [
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "MRI",
      category: "KNEE",
      subCategory: [
        "ARTHROGRAM (CONTRAST INJECTED INTO JOINT)",
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "MRI",
      category: "LOWER EXTREMITY (LEG)",
      subCategory: ["ANGIOGRAM"],
    },
    {
      scan: "MRI",
      category: "NECK",
      subCategory: [
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "MRI",
      category: "PELVIS",
      subCategory: [
        "ANGIOGRAM",
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "MRI",
      category: "PITUITARY",
      subCategory: [
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "MRI",
      category: "PROSTATE",
      subCategory: [
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "MRI",
      category: "SCAPULA",
      subCategory: [
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "MRI",
      category: "SHOULDER",
      subCategory: [
        "ARTHROGRAM (CONTRAST INJECTED INTO JOINT)",
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "MRI",
      category: "SINUSES",
      subCategory: [
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "MRI",
      category: "SPINE",
      subCategory: ["ANGIOGRAM", "CERVICAL", "LUMBAR", "THORACIC"],
    },
    {
      scan: "MRI",
      category: "TEMPOROMANDIBULAR JOINTS (JAW)",
      subCategory: ["WITHOUT CONTRAST"],
    },
    {
      scan: "MRI",
      category: "TIBULA/FIBULA (LOWER LEG)",
      subCategory: ["WITH AND WITHOUT INTRAVENOUS CONTRAST"],
    },
    {
      scan: "MRI",
      category: "UPPER EXTREMITY (ARM)",
      subCategory: ["ANGIOGRAM"],
    },
    {
      scan: "MRI",
      category: "WRIST",
      subCategory: [
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "ULTRASOUND",
      category: "ABDOMEN",
      subCategory: ["COMPLETE", "GALLBLADDER / RIGHT UPPER QUADRANT"],
    },
    {
      scan: "ULTRASOUND",
      category: "ABDOMINAL AORTA",
      subCategory: ["ANEUERYSM SCREENING"],
    },
    {
      scan: "ULTRASOUND",
      category: "CHEST",
      subCategory: [],
    },
    {
      scan: "ULTRASOUND",
      category: "EXTRACRANIAL (CAROTID/SUBCLAVIAN) ARTERIES",
      subCategory: ["ARTERIAL DUPLEX (DOPPLER) SCAN", "VENOUS DUPLEX SCAN"],
    },
    {
      scan: "ULTRASOUND",
      category: "JOINT",
      subCategory: [],
    },
    {
      scan: "ULTRASOUND",
      category: "KIDNEYS",
      subCategory: [],
    },
    {
      scan: "ULTRASOUND",
      category: "LOWER EXTREMITIES (LEGS)",
      subCategory: ["ARTERIAL DUPLEX (DOPPLER) SCAN", "VENOUS DUPLEX SCAN"],
    },
    {
      scan: "ULTRASOUND",
      category: "PAROTID GLANDS",
      subCategory: [],
    },
    {
      scan: "ULTRASOUND",
      category: "PELVIS",
      subCategory: ["SALINE SONOHYSTEROGRAM", "TRANSABDOMINAL", "TRANSVAGINAL"],
    },
    {
      scan: "ULTRASOUND",
      category: "PENIS",
      subCategory: [],
    },
    {
      scan: "ULTRASOUND",
      category: "PROSTATE (TRANSRECTAL)",
      subCategory: [],
    },
    {
      scan: "ULTRASOUND",
      category: "SCROTUM",
      subCategory: [],
    },
    {
      scan: "ULTRASOUND",
      category: "THYROID AND PARATHYROID GLANDS",
      subCategory: [],
    },
    {
      scan: "ULTRASOUND",
      category: "UPPER EXTREMITIES (ARMS)",
      subCategory: ["ARTERIAL DUPLEX SCAN", "VENOUS DUPLEX SCAN"],
    },
    {
      scan: "BREAST MRI",
      category: "BOTH BREASTS",
      subCategory: [
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "BREAST MRI",
      category: "ONE BREASTS",
      subCategory: [
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "BREAST ULTRASOUND",
      category: "BOTH BREASTS",
      subCategory: [
        "WITH AND WITHOUT INTRAVENOUS CONTRAST",
        "WITHOUT INTRAVENOUS CONTRAST",
      ],
    },
    {
      scan: "BREAST ULTRASOUND",
      category: "ONE BREASTS",
      subCategory: [],
    },
    {
      scan: "DEXA",
      category: "AXIAL SKELETON (HIPS, PELVIS, AND SPINE)",
      subCategory: [],
    },
    {
      scan: "DEXA",
      category: "PERIPHERAL SKELETON (RADIUS, WRIST, HEEL)",
      subCategory: [],
    },
    {
      scan: "MAMMOGRAPHY",
      category: "BOTH BREASTS",
      subCategory: ["DIAGNOSTIC", "DIGITAL BREAST TOMOSYNTHESIS", "SCREENING"],
    },
    {
      scan: "MAMMOGRAPHY",
      category: "ONE BREASTS",
      subCategory: ["DIAGNOSTIC"],
    },
    {
      scan: "NUCLEAR",
      category: "GALLBLADDER (HIDA SCAN)",
      subCategory: [],
    },
    {
      scan: "NUCLEAR",
      category: "HEART (MUGA SCAN)",
      subCategory: [],
    },
    {
      scan: "NUCLEAR",
      category: "SKELETON",
      subCategory: ["3-PHASE BONE SCAN", "WHOLE BODY BONE SCAN"],
    },
    {
      scan: "PET/CT",
      category: "BRAIN",
      subCategory: [],
    },
    {
      scan: "PET/CT",
      category: "SODIUM FLUORIDE BONE SCAN",
      subCategory: [],
    },
    {
      scan: "PET/CT",
      category: "SKULL BASE TO THIGHS",
      subCategory: [],
    },
    {
      scan: "PET/CT",
      category: "WHOLE BODY",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "ABDOMEN",
      subCategory: ["MULTIPLE VIEWS"],
    },
    {
      scan: "X-RAY",
      category: "ACROMIOCLAVICULAR JOINTS",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "ANKLE",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "ANKLE",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "CALCANEUS (HEEL)",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "CHEST",
      subCategory: ["MULTIPLE (3 OR MORE) VIEWS", "PA/LATERAL"],
    },
    {
      scan: "X-RAY",
      category: "ACOLON (BARIUM ENEMA)NKLE",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "ELBOW",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "ESOPHAGUS",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "FACE",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "FEMUR (UPPER LEG)",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "FINGERS",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "FOOT",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "FOREARM",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "HAND",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "HIP AND PELVIS",
      subCategory: ["ONE SIDE", "BOTH SIDE"],
    },
    {
      scan: "X-RAY",
      category: "HUMERUS (UPPER ARM)",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "HYSTEROSALPINGOGRAM",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "KNEE",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "MANDIBLE (JAW)",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "MASTOIDS",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "NASAL BONES",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "NECK (SOFT TISSUE)",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "ORBITS (EYES)",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "PELVIS",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "PYELOGRAM/UROGRAM",
      subCategory: ["INTRAVENOUS", "RETROGRADE"],
    },
    {
      scan: "X-RAY",
      category: "RIBS",
      subCategory: ["BILATERAL", "UNILATERAL"],
    },
    {
      scan: "X-RAY",
      category: "SACROILIAC JOINTS",
      subCategory: [],
    },

    {
      scan: "X-RAY",
      category: "SACRUM AND COCCYX",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "SALIVARY GLAND",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "SCAPULA",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "SELLA TURCICA",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "SHOULDER",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "SINUSES",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "SKULL",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "SMALL BOWEL",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "SPINE",
      subCategory: [
        "CERVICAL",
        "LUMBOSACRAL",
        "THORACIC",
        "THORACOLUMBAR JUNCTION",
      ],
    },
    {
      scan: "X-RAY",
      category: "STERNOCLAVICULAR JOINTS",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "STERNUM",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "TEETH",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "TEMPOROMANDIBULAR JOINT (TMJ)",
      subCategory: ["BOTH SIDE", "ONE SIDE"],
    },
    {
      scan: "X-RAY",
      category: "TIBIA AND FIBULA (LOWER LEG)",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "TOES",
      subCategory: ["CLAVICLE (COLLARBONE)"],
    },
    {
      scan: "X-RAY",
      category: "UPPER EXTREMITY (ARM)",
      subCategory: [],
    },
    {
      scan: "X-RAY",
      category: "WRIST",
      subCategory: [],
    },
  ];
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
    setCenter(null);
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
              subCategory={subCategory}
              setSubCategory={setSubCategory}
              scans={scans}
              types={types}
              setCurrentStep={setCurrentStep}
            />
          </div>
        ) : currentStep === 2 ? (
          <div>
            <Label style={{ margin: 20 }}>Select City and Locality</Label>
            <StepTwo
              scanCenters={scanCenters}
              center={center}
              locality={locality}
              setCenter={setCenter}
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
                scanData={{ primary, secondary, center, locality }}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Main;
