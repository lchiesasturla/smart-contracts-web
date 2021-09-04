import React, { Fragment } from 'react'
import FormTextField from '../../../../common/FormTextField';
import { Grid } from '@material-ui/core';
import { locatorFields } from '../../../../../utils/fields';

const StepOne = ({locator, setLocator, fieldsErrors, handleFieldUpdate, handleFieldAddressUpdate}) => {
    return (
        <Fragment>
            <h1>Datos del locador</h1>
            <Grid container spacing={1}>
                {locatorFields.locator.map(field => (
                    <FormTextField
                        key={field.name}
                        field={field}
                        updateObj={locator}
                        updateFunc={(e) => handleFieldUpdate(e, setLocator, locator)}
                        error={fieldsErrors[field.name]}
                    />
                ))}
            </Grid>
            <h2>Datos del domicilio</h2>
            <Grid container spacing={1}>
                {locatorFields.address.map(field => (
                    <FormTextField
                        key={field.name}
                        field={field}
                        updateObj={locator}
                        updateFunc={(e) => handleFieldAddressUpdate(e, setLocator, locator)}
                        isAddress
                        error={fieldsErrors[field.name]}
                    />
                ))}
            </Grid>
        </Fragment>
    );
}

export default StepOne;