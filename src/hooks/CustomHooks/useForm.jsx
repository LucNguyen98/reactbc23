import { useState } from 'react'

export default function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);

    const handleChange = (evt) => {
        const { value, name } = evt.target;
        setValues({
            ...values,
            [name]: value
        });
    }
    return {
        values,
        handleChange
    };
}
