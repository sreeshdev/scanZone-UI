import React from "react";
import { Icon, Label, Button } from "semantic-ui-react";

const StepOne = ({
  primary,
  secondary,
  setPrimary,
  setSecondary,
  scans,
  bodyParts,
  setCurrentStep,
}) => {
  return (
    <div>
      <div>
        {primary === null ? (
          scans.map((scan) => {
            return (
              <Label
                image
                color="orange"
                size="large"
                onClick={() => setPrimary(scan)}
                style={{ cursor: "pointer", margin: 5 }}
              >
                {scan}
              </Label>
            );
          })
        ) : (
          <Label image style={{ margin: 5 }}>
            {primary}
            <Icon name="delete" onClick={() => setPrimary(null)} />
          </Label>
        )}
      </div>
      <div>
        {primary !== null && secondary === null
          ? bodyParts.map((body) => {
              return (
                <Label
                  image
                  color="orange"
                  size="large"
                  onClick={() => setSecondary(body)}
                  style={{ cursor: "pointer", margin: 5 }}
                >
                  {body}
                </Label>
              );
            })
          : primary !== null &&
            secondary !== null && (
              <Label image style={{ margin: 5 }}>
                {secondary}
                <Icon name="delete" onClick={() => setSecondary(null)} />
              </Label>
            )}
      </div>
      <div>
        {primary !== null && secondary !== null && (
          <Button
            icon
            labelPosition="right"
            color="orange"
            style={{ marginTop: 50 }}
            onClick={() => setCurrentStep(2)}
          >
            Next
            <Icon name="right arrow" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default StepOne;
