import {ChangeEvent, useState} from "react";
import axios from 'axios'

export const useFormFields: (initialState: { [p: string]: any }) => {
    handleFieldChange: (event: ChangeEvent<HTMLInputElement>) => void;
    fields: { [p: string]: any };
} = (initialState: { [key: string]: any }) => {
    const [fields, setValues] = useState(initialState);
    const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...fields,
            [event.target.id]: event.target.value,
        });
    };
    return {fields, handleFieldChange};
};

export const useMailChimpForm: (url: string) => {
    handleSubmit: (params: { [key: string]: any }, callback: any) => void;
    success: boolean;
    reset: () => void;
    loading: boolean;
    error: boolean;
    message: string;
} = (url: string) => {
    const initStatusState = {
        loading: false,
        error: false,
        success: false,
    };
    const [status, setStatus] = useState(initStatusState);
    const [message, setMessage] = useState("");

    const handleSubmit = (params: { [key: string]: any }, callback: any): void => {
        setStatus({...status, loading: true});
        setMessage("");
        axios.post('https://native-staking-v3.onrender.com/api/mailerlite', params).then(res => {
            if (res.data.message !== 'Thank you for subscribing!') {
                setStatus({...initStatusState, error: true});
            } else {
                setStatus({...initStatusState, success: true});
                if (callback) setTimeout(() => {
                    callback()
                }, 2000);
            }
            setMessage(res.data.message);
        }).catch(error => {
            setStatus({...initStatusState, error: true});
            setMessage(error.message);
        })
    };

    const reset: () => void = async () => {
        await setMessage("");
        await setStatus(initStatusState);
    };

    return {
        loading: status.loading,
        success: status.success,
        error: status.error,
        message,
        handleSubmit,
        reset,
    };
};
