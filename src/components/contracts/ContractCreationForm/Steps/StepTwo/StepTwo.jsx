import React, { Fragment } from 'react'
import { tenantFields } from '../../../../../utils/fields';
import { Grid } from '@material-ui/core';
import FormTextField from '../../../../common/FormTextField';

const StepTwo = ({tenant, setTenant, fieldsErrors, handleFieldUpdate, handleFieldAddressUpdate}) => {
    return ( 
        <Fragment>
                <h1>Datos del inquilino</h1>
                <Grid container spacing={1}>
                    {tenantFields.tenant.map(field => (
                        <FormTextField
                            key={field.name}
                            field={field}
                            updateObj={tenant}
                            updateFunc={(e) => handleFieldUpdate(e, setTenant, tenant)}
                            error={fieldsErrors[field.name]}
                        />
                    ))}
                </Grid>
                <h2>Datos del domicilio</h2>
                <Grid container spacing={1}>
                    {tenantFields.address.map(field => (
                        <FormTextField
                            key={field.name}
                            field={field}
                            updateObj={tenant}
                            updateFunc={(e) => handleFieldAddressUpdate(e, setTenant, tenant)}
                            isAddress
                            error={fieldsErrors[field.name]}
                        />
                    ))}
                </Grid>
            </Fragment>
    );
}
 
export default StepTwo;