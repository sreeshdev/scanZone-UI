import React from "react";
import { Icon, Label, Button, Transition } from "semantic-ui-react";

const StepTwo = ({
  city,
  setCity,
  locality,
  setLocality,
  cities,
  localities,
  setCurrentStep,
}) => {
  return (
    <div>
      <div>
        {city === null ? (
          cities.map((city) => {
            return (
              <Label
                image
                color="orange"
                size="large"
                onClick={() => setCity(city)}
                style={{ cursor: "pointer", margin: 5 }}
              >
                {city}
              </Label>
            );
          })
        ) : (
          <Label image style={{ margin: 5 }}>
            {city}
            <Icon name="delete" onClick={() => setCity(null)} />
          </Label>
        )}
      </div>
      <div>
        {city !== null && locality === null
          ? localities.map((locality) => {
              return (
                <Label
                  image
                  color="orange"
                  size="large"
                  onClick={() => setLocality(locality)}
                  style={{ cursor: "pointer", margin: 5 }}
                >
                  {locality}
                </Label>
              );
            })
          : locality !== null && (
              <Label image style={{ margin: 5 }}>
                {locality}
                <Icon name="delete" onClick={() => setLocality(null)} />
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
        {city !== null && locality !== null && (
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
