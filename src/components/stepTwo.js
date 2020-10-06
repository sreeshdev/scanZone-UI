import React from "react";
import { Icon, Label, Button, Transition } from "semantic-ui-react";

const StepTwo = ({
  center,
  setCenter,
  scanCenters,
  locality,
  setLocality,
  cities,
  localities,
  setCurrentStep,
}) => {
  var sub;
  if (locality !== null) {
    scanCenters.map((center) => {
      if (center.Locality === locality) {
        sub = center.Center;
      }
    });
  }
  return (
    <div>
      <div>
        {locality === null ? (
          scanCenters.map((city) => {
            return (
              <Label
                image
                color="orange"
                size="large"
                onClick={() => setLocality(city.Locality)}
                style={{ cursor: "pointer", margin: 5 }}
              >
                {city.Locality}
              </Label>
            );
          })
        ) : (
          <Label image style={{ margin: 5 }}>
            {locality}
            <Icon name="delete" onClick={() => setLocality(null)} />
          </Label>
        )}
      </div>
      <div>
        {locality !== null && center === null
          ? sub.map((locality) => {
              return (
                <Label
                  image
                  color="orange"
                  size="large"
                  onClick={() => setCenter(locality)}
                  style={{ cursor: "pointer", margin: 5 }}
                >
                  {locality}
                </Label>
              );
            })
          : center !== null && (
              <Label image style={{ margin: 5 }}>
                {center}
                <Icon name="delete" onClick={() => setCenter(null)} />
              </Label>
            )}
      </div>
      <div>
        <Button
          icon
          labelPosition="left"
          style={{ marginTop: 50 }}
          onClick={() => setCurrentStep(1)}
        >
          Back
          <Icon name="left arrow" />
        </Button>
        {center !== null && locality !== null && (
          <Button
            icon
            labelPosition="right"
            color="orange"
            style={{ marginTop: 50 }}
            onClick={() => setCurrentStep(3)}
          >
            Next
            <Icon name="right arrow" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default StepTwo;
