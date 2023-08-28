import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const notifyError = (message) => {
    toast.error(message, {
        position: "top-right",
        autoClose: true,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export const notifySuccess = (message) => {
    return toast.success(message, {
        position: "top-right",
        autoClose: true,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export const notifyInfo = (message) => {
    return toast.info(message, {
        position: "top-right",
        autoClose: true,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
		progress: undefined,
    });
}

export const notifyWarning = (message) => {
    return toast.warn(message, {
        position: "top-right",
        autoClose: true,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}
