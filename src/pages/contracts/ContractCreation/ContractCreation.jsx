import React, { Fragment, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Typography, Button, Step, StepLabel} from '@material-ui/core';
import PageContainer from '../../../components/hocs/Containers/PageContainer/PageContainer';
import ContractCreationForm from '../../../components/contracts/ContractCreationForm';
import { PDFViewer } from '@react-pdf/renderer';
import ContractDocument from '../../../components/pdf/ContractDocument/ContractDocument';

const useStyles = makeStyles((theme) => ({
    button: {
        marginRight: '10px',
    },
    instructions: {
        marginTop: '10px',
        marginBottom: '10px',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '40px'
    },
    viewer: {
        width: '60vw',
        height: '70vh'
    }
}));


const ContractCreation = () => {

    const [activeStep, setActiveStep] = useState(0);
    const [contractBody, setContractBody] = useState('');
    const steps = getSteps();
    const classes = useStyles();


    function getSteps() {
        return ['Datos del locador', 'Datos del inquilino', 'Datos del contrato'];
    }

    return (
        <PageContainer>
            <Stepper activeStep={activeStep}>
                {steps.map(label => {
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
                    <Fragment>
                        <h1>Contrato finalizado!</h1>
                        <PDFViewer className={classes.viewer}>
                            <ContractDocument body={contractBody}/>
                        </PDFViewer>
                    </Fragment>
                ) : (
                    <ContractCreationForm 
                        steps={steps}
                        activeStep={activeStep}
                        setActiveStep={setActiveStep}
                        setContractBody={setContractBody}
                        classes={classes}
                    />
                )}
            </div>
        </PageContainer>
    );
}

export default ContractCreation;