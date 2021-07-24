import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      margin: theme.spacing(3),
      color: "green"
    },
    stepper:{
      width: "100%",
        color: "green"
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

function getSteps() {
  return ['Review', 'Travellers', 'Payment'];
}

export default function HorizontalStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(2);
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}  className={classes.stepper}  alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}