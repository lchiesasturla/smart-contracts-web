import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Typography, Button, Step, StepLabel, Grid, TextField } from '@material-ui/core';
import PageContainer from '../../../components/hocs/Containers/PageContainer/PageContainer';

const useStyles = makeStyles((theme) => ({
    button: {
        marginRight: '10px',
    },
    instructions: {
        marginTop: '10px',
        marginBottom: '10px',
    },
    input: {
        width: '95%'
    }
}));


const ContractCreation = () => {

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();
    const classes = useStyles();
    function getSteps() {
        return ['Datos del locador', 'Datos del inquilino', 'Datos del contrato'];
    }

    function getStepContent(step) {
        switch (step) {
            case 0:
                return getFirstStepContent();
            case 1:
                return getSecondStepContent();
            case 2:
                return getThirdStepContent();
            default:
                return 'Paso desconocido';
        }
    }

    const handleNext = () => {
        let newSkipped = skipped;

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    const handleReset = () => {
        setActiveStep(0);
    };

    const getFirstStepContent = () => {
        return (
            <Fragment>
                <Grid item xs={3}>
                    <TextField className={classes.input} label="Nombre" variant="outlined" />
                </Grid>
                <Grid item xs={3}>
                    <TextField className={classes.input} label="Apellido" variant="outlined" />
                </Grid>
                <Grid item xs={3}>
                    <TextField className={classes.input} label="Mail" variant="outlined" />
                </Grid>
                <Grid item xs={3}>
                    <TextField className={classes.input} label="Documento" variant="outlined" />
                </Grid>
            </Fragment>
        );
    }

    const getSecondStepContent = () => {
        return (
            <h1>Step 2</h1>
        );
    }

    const getThirdStepContent = () => {
        return (
            <h1>Step 3</h1>
        );
    }

    return (
        <PageContainer>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};

                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Button onClick={handleReset} className={classes.button}>
                            Reset
                        </Button>
                    </div>
                ) : (
                    <div>
                        <Grid container spacing={1}>
                            {getStepContent(activeStep)}
                        </Grid>

                        <div>
                            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                Atras
                            </Button>

                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                className={classes.button}
                            >
                                {activeStep === steps.length - 1 ? 'Crear' : 'Siguiente'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </PageContainer>
    );
}

export default ContractCreation;