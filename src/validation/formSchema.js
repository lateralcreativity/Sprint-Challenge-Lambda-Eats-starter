import * as yup from 'yup';

const formSchema = yup.object().shape({
    size: yup.string()
    .required('Please select a size'),
    sauce: yup.string()
    .required('Please select a sauce'),
    pepperoni: yup.bool().notRequired(),
    sausage: yup.bool().notRequired(),
    canadianBacon: yup.bool().notRequired(),
    spicyItalianSausage: yup.bool().notRequired(),
    special: yup.string().notRequired()
})

export default formSchema