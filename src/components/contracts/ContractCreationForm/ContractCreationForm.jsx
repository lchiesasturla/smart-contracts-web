import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import { personTemplate, contractTemplate, createDocumentBody } from '../../../utils/templates';
import { locatorFields, tenantFields, contractFields } from '../../../utils/fields';
import { validateFieldValues } from '../../../utils/helpers';
import StepOne from './Steps/StepOne';
import StepTwo from './Steps/StepTwo';
import StepThree from './Steps/StepThree';

const ContractCreationForm = ({ steps, activeStep, setActiveStep, setContractBody, classes }) => {

    const [locator, setLocator] = useState(personTemplate);
    const [tenant, setTenant] = useState(personTemplate);
    const [contract, setContract] = useState(contractTemplate);
    const [fieldsErrors, setfieldsErrors] = useState([]);

    const stepObjects = {
        0: { state: locator, fields: locatorFields, template: personTemplate },
        1: { state: tenant, fields: tenantFields, template: personTemplate },
        2: { state: contract, fields: contractFields, template: contractTemplate },
    }

    function getStepContent(step) {
        switch (step) {
            case 0:
                return <StepOne
                    locator={locator}
                    setLocator={setLocator}
                    fieldsErrors={fieldsErrors}
                    handleFieldUpdate={handleFieldUpdate}
                    handleFieldAddressUpdate={handleFieldAddressUpdate}
                />;
            case 1:
                return <StepTwo
                    tenant={tenant}
                    setTenant={setTenant}
                    fieldsErrors={fieldsErrors}
                    handleFieldUpdate={handleFieldUpdate}
                    handleFieldAddressUpdate={handleFieldAddressUpdate}
                />;
            case 2:
                return <StepThree 
                    contract={contract}
                    setContract={setContract}
                    fieldsErrors={fieldsErrors}
                    handleFieldUpdate={handleFieldUpdate}
                    handleFieldAddressUpdate={handleFieldAddressUpdate}
                />;
            default:
                return 'Paso desconocido';
        }
    }


    const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const handleNext = () => {
        const stepObject = stepObjects[activeStep];
        const { state, fields, template } = stepObject;
        const errors = validateFieldValues(state, fields, template);
        if (Object.keys(errors).length === 0) setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setfieldsErrors(errors);
    };

    const handleFieldUpdate = (e, setter, prevState) => setter({ ...prevState, [e.target.name]: e.target.value })

    const handleFieldAddressUpdate = (e, setter, prevState) => setter({ ...prevState, address: { ...prevState.address, [e.target.name]: e.target.value } });

    const handleSubmit = e => {
        e.preventDefault();
        const stepObject = stepObjects[activeStep];
        const { state, fields, template } = stepObject;
        const errors = validateFieldValues(state, fields, template);
        if (Object.keys(errors).length === 0) setActiveStep((prevActiveStep) => prevActiveStep + 1);
        const text = createDocumentBody(locator, tenant, contract);
        setContractBody(text);
    }

    return (
        <form onSubmit={handleSubmit}>
            {getStepContent(activeStep)}
            <div className={classes.buttons}>
                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                    Atras
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                    className={classes.button}
                    type='button'
                >
                    {activeStep === steps.length - 1 ? 'Crear' : 'Siguiente'}
                </Button>
            </div>
        </form>
    );
}

export default ContractCreationForm;