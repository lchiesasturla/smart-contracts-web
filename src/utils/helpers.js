export const getTemplateKeys = (template, prevFields = []) => {
    let keys = prevFields;
    Object.keys(template).map(key => typeof template[key] === 'object' ? getTemplateKeys(template[key], keys) : keys.push(key));
    return keys;
}

export const getFieldObjects = (fieldsTemplate) => {
    let fields = [];
    Object.keys(fieldsTemplate).forEach(key => fields = fields.concat(fieldsTemplate[key]));
    return fields;
}

export const validateFieldValues = (state, fieldsTemplate, template) => {
    const keys = getTemplateKeys(template);
    const fields = getFieldObjects(fieldsTemplate);
    let errors = {};
    let field;
    keys.forEach(key => {
        field = fields.find(field => field.name === key);
        if(field?.validations){
            const {validations} = field;
            if(validations.maxLength && state[key].length > validations.maxLength){
                errors = {...errors, [field.name]: `La longitud del campo debe ser menor a ${validations.maxLength} caracteres.`}
            }

            if(validations.minLength && state[key].length < validations.minLength){
                errors = {...errors, [field.name]: `La longitud del campo debe ser mayor a ${validations.minLength} caracteres.`}
            }
        }
    })
    return errors;
}