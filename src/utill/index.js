import { toast } from 'react-toastify';
import { v4 as uuidv4 } from "uuid";

export  const rKey = (Math.random() + 1).toString(36).substring(7) + uuidv4()
export const notify = (state,msg) => {
    switch(state) {
        case "success":
            toast.success(msg, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            break;
        case "error":
            toast.error(msg, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            break;
        default:
            break

    }
}