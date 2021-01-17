import React from "react";

import StepProgressBar from "react-step-progress";

import "react-step-progress/dist/index.css";

// setup the step content
const step1Content = <h1>Step 1 Content</h1>;
const step2Content = <h1>Step 2 Content</h1>;
const step3Content = <h1>Step 3 Content</h1>;

// setup step validators, will be called before proceeding to the next step
function step2Validator() {
  return true;
}

function step3Validator() {
  return true;
}

function onFormSubmit() {
  // handle the submit logic here
  // This function will be executed at the last step
  // when the submit button (next button in the previous steps) is pressed
}

// render the progress bar

const ProgressBar = (props) => {
  return (
    <StepProgressBar
      startingStep={0}
      onSubmit={onFormSubmit}
      steps={[
        {
          label: "Step 1",
          subtitle: "10%",
          name: "step 1",
          content: step1Content,
        },
        {
          label: "Step 2",
          subtitle: "50%",
          name: "step 2",
          content: step2Content,
          validator: step2Validator,
        },
        {
          label: "Step 3",
          subtitle: "100%",
          name: "step 3",
          content: step3Content,
          validator: step3Validator,
        },
      ]}
    />
  );
};

export default ProgressBar;
