import * as yup from 'yup';

const formSchema = yup.object().shape({
    size: yup.string(),
    sauce: yup.string(),
    pepperoni: yup.string(),
    sausage: yup.string(),
    canadianBacon: yup.string(),
    spicyItalianSausage: yup.string(),
    special: yup.string().min(3, 'You must enter 3 characters').required('Special is a required field')
})

export default formSchema