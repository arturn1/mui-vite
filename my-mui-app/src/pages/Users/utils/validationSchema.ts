import * as Yup from "yup";


const validationSchema = Yup.object().shape({
    id: Yup.number().positive('O ID deve ser um número positivo').required('O ID é obrigatório'),
    age: Yup.number().positive('O ID deve ser um número positivo').typeError('Precisa ser um número').required('O ID é obrigatório'),
    isMale: Yup.boolean().required(),
    gender: Yup.string().when('yesOrNot', {
        is: false,
        then: (schema) => schema.min(2),
        otherwise: (schema) => schema.min(10),
    }),
    username: Yup.string()
        .test('custom', 'O campo deve ter entre 2 e 10 caracteres', function (value) {
            if (!value || value.length === 0) {
                return true;
            }
            const isLengthValid = value.length >= 2 && value.length < 10;
            return isLengthValid;
        }),
    elementType: Yup.number().required().transform((_, val) => (typeof (val) === 'string' ? parseInt(val) : val)),
});

const miniValidationSchema = Yup.object().shape({
    id: Yup.number().positive('O ID deve ser um número positivo').required('O ID é obrigatório'),
    isMale: Yup.boolean().required(),
    gender: Yup.string().when('yesOrNot', {
        is: false,
        then: (schema) => schema.min(2),
        otherwise: (schema) => schema.min(10),
    }),
    elementType: Yup.number().required().transform((_, val) => (typeof (val) === 'string' ? parseInt(val) : val)),
});

export { validationSchema, miniValidationSchema }