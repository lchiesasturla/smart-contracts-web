import React, { Fragment } from 'react'
import { contractFields } from '../../../../../utils/fields';
import { Grid } from '@material-ui/core';
import FormTextField from '../../../../common/FormTextField';

const StepThree = ({contract, setContract, fieldsErrors, handleFieldUpdate, handleFieldAddressUpdate}) => {
    return (
        <Fragment>
            <h1>Datos del contrato</h1>
            <Grid container spacing={1}>
                {contractFields.address.map(field => (
                    <FormTextField
                        key={field.name}
                        field={field}
                        updateObj={contract}
                        updateFunc={(e) => handleFieldAddressUpdate(e, setContract, contract)}
                        isAddress
                        error={fieldsErrors[field.name]}
                    />
                ))}
            </Grid>
            <h2>Condiciones</h2>
            <Grid container spacing={1}>
                {contractFields.contract.map(field => (
                    <FormTextField
                        key={field.name}
                        field={field}
                        updateObj={contract}
                        updateFunc={(e) => handleFieldUpdate(e, setContract, contract)}
                        error={fieldsErrors[field.name]}
                    />
                ))}
            </Grid>
        </Fragment>
    );
}

export default StepThree;