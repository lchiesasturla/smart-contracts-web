const addressFields = [
    {
        label: 'Calle',
        variant: 'outlined',
        size: 3,
        name: 'street',
    },
    {
        label: 'Numero',
        variant: 'outlined',
        size: 3,
        name: 'number',
        type: 'number',
    },
    {
        label: 'Piso',
        variant: 'outlined',
        size: 3,
        name: 'floor',
    },
    {
        label: 'Departamento', 
        variant: 'outlined', 
        size: 3, 
        name: 'apartment',
    },
    {
        label: 'Entre calles', 
        variant: 'outlined', 
        size: 4, 
        name: 'betweenStreet',
    },
    {
        label: 'Codigo postal', 
        variant: 'outlined', 
        size: 2, 
        name: 'zipCode',
    },
    {
        label: 'Localidad', 
        variant: 'outlined', 
        size: 3, 
        name: 'location',
    },
];

export const locatorFields = {
    locator: [
        {
            label: 'Nombre', 
            variant: 'outlined', 
            size: 3, 
            name: 'firstName',
            validations: {minLength: 3, maxLength: 8}
        },
        {
            label: 'Apellido', 
            variant: 'outlined', 
            size: 3, 
            name: 'lastName',
            validations: {maxLength: 8}
        },
        {
            label: 'Mail', 
            variant: 'outlined', 
            size: 6, 
            name: 'email',
        },
        {
            label: 'Tipo de documento', 
            variant: 'outlined', 
            size: 3, 
            name: 'documentType', 
            type: 'number',
        },
        {
            label: 'Documento', 
            variant: 'outlined', 
            size: 4, 
            name: 'documentValue',
            type: 'number'
        },
    ],
    address: addressFields
}

export const tenantFields = {
    tenant: [
        {
            label: 'Nombre', 
            variant: 'outlined', 
            size: 3, 
            name: 'firstName'
        },
        {
            label: 'Apellido', 
            variant: 'outlined', 
            size: 3, 
            name: 'lastName'
        },
        {
            label: 'Mail', 
            variant: 'outlined', 
            size: 6, 
            name: 'email'
        },
        {
            label: 'Tipo de documento', 
            variant: 'outlined', 
            size: 3, 
            name: 'documentType'
        },
        {
            label: 'Documento', 
            variant: 'outlined', 
            size: 4, 
            name: 'documentValue'
        },
    ],
    address: addressFields
}

export const contractFields = {
    contract: [
        {
            label: 'Duracion', 
            variant: 'outlined', 
            size: 3, 
            name: 'duration',
        },
        {
            label: 'Fecha de inicio', 
            variant: 'outlined', 
            size: 3, 
            name: 'startDate', 
            type: 'date',
        },
        {
            label: 'Dia de pago', 
            variant: 'outlined', 
            size: 2, 
            name: 'paymentDay',
        },
        {
            label: 'El locador desea transferir la titularidad de servicios?', 
            variant: 'outlined', 
            size: 4, 
            name: 'servicesTransfer',
        },
        {
            label: 'Monto mensual', 
            variant: 'outlined', 
            size: 3, 
            name: 'amount',
        },
        {
            label: 'Tipo de cuenta', 
            variant: 'outlined', 
            size: 2, 
            name: 'paymentType',
        },
        {
            label: 'Numero', 
            variant: 'outlined', 
            size: 3, 
            name: 'paymentValue',
        },
        {
            label: 'Intereses por mora', 
            variant: 'outlined', 
            size: 2, 
            name: 'interests',
        },
    ],
    address: addressFields,
}

