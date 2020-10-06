import React from "react";
import { Icon, Label, Button } from "semantic-ui-react";

const StepOne = ({
  primary,
  secondary,
  setPrimary,
  setSecondary,
  subCategory,
  setSubCategory,
  scans,
  types,
  setCurrentStep,
}) => {
  var sub;

  if (primary !== null && secondary !== null) {
    types.map((type) => {
      if (type.scan === primary && type.category === secondary) {
        sub = type.subCategory;
      }
    });
  }
  console.log(sub);
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
            <Icon
              name="delete"
              onClick={() => {
                setPrimary(null);
                setSecondary(null);
                setSubCategory(null);
              }}
            />
          </Label>
        )}
      </div>
      <div>
        {primary !== null && secondary === null
          ? types.map((type) => {
              if (type.scan === primary) {
                return (
                  <Label
                    image
                    color="orange"
                    size="large"
                    onClick={() => setSecondary(type.category)}
                    style={{ cursor: "pointer", margin: 5 }}
                  >
                    {type.category}
                  </Label>
                );
              }
            })
          : primary !== null &&
            secondary !== null && (
              <Label image style={{ margin: 5 }}>
                {secondary}
                <Icon
                  name="delete"
                  onClick={() => {
                    setSecondary(null);
                    setSubCategory(null);
                  }}
                />
              </Label>
            )}
      </div>
      <div>
        {primary !== null && secondary !== null && subCategory === null
          ? sub.length > 0 &&
            sub.map((type) => {
              return (
                <Label
                  image
                  color="orange"
                  size="large"
                  onClick={() => setSubCategory(type)}
                  style={{ cursor: "pointer", margin: 5 }}
                >
                  {type}
                </Label>
              );
            })
          : primary !== null &&
            secondary !== null &&
            sub.length > 0 &&
            subCategory !== null && (
              <Label image style={{ margin: 5 }}>
                {subCategory}
                <Icon name="delete" onClick={() => setSubCategory(null)} />
              </Label>
            )}
      </div>
      <div>
        {primary !== null &&
          secondary !== null &&
          (subCategory !== null || sub.length === 0) && (
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
