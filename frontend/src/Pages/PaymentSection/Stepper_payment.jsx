import React from "react";
import { makeStyles, createStyles, withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      margin: theme.spacing(1),
      backgroundColor: "#f2f2f2",
      color: "green",
    },
    stepper: {
      backgroundColor: "#f2f2f2",
      color: "green",
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);

function getSteps() {
  return ["Review", "Travellers", "Payment"];
}

export default function HorizontalStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(2);
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper
        className={classes.stepper}
        activeStep={activeStep}
        alternativeLabel
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel >{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
