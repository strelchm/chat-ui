import {createToast} from "mosha-vue-toastify";

export enum ToastType {
    INFO = 'info',
    DANGER = 'danger',
    WARNING = 'warning',
    SUCCESS = 'success',
    DEFAULT = 'default'
}


export const showToast = (title: string, description: string, type: ToastType = ToastType.DANGER, timeout: number = 5000) => {
    createToast({
        title: title,
        description: description
    }, {
        type: type,
        timeout: timeout,
        showCloseButton: true,
        position: 'top-right',
        transition: 'bounce',
        hideProgressBar: false,
        swipeClose: true,
    })
}