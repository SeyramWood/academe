import React from "react";
import validateForm from "./validateForm";
function useFormValidation(initialState, validationRules, callBack) {
    const [state, setState] = React.useState(initialState);
    const [errors, setErrors] = React.useState({});
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    React.useEffect(() => {
        if (isSubmitting) {
            let noErrors;
            Object.values(errors).forEach(err => {
                noErrors = err.length === 0;
            });
            if (noErrors) {
                callBack();
                setErrors({});
                setTimeout(() => {
                    setIsSubmitting(false);
                }, 1000);
            } else {
                setTimeout(() => {
                    setIsSubmitting(false);
                }, 1000);
            }
        }
    }, [errors, isSubmitting, callBack]);
    const handleChange = e => {
        const { name, value, type, checked } = e.target;
        type === "checkbox"
            ? setState({ ...state, [name]: checked })
            : setState({ ...state, [name]: value });
    };
    const handleBlur = () => {
        setErrors(validateForm(state, validationRules));
    };
    const handleSubmit = e => {
        e.preventDefault();
        setErrors({});
        setIsSubmitting(true);
        setTimeout(() => {
            setErrors(validateForm(state, validationRules));
        }, 500);
    };
    const clearValues = (action = true) => {
        if (action) {
            setState(initialState);
            setErrors({});
        }
    };
    const setValues = (data = {}) => {
        if (Object.keys(data).length > 0) {
            setState({ ...state, ...data });
        }
    };
    const setServerErrors = (err = {}) => {
        if (Object.keys(err).length > 0) {
            setErrors({ ...errors, ...err });
        }
    };

    return {
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        errors,
        state,
        clearValues,
        setValues,
        setServerErrors
    };
}

export default useFormValidation;
