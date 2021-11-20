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
export const detectWord = (word) => {
    if(typeof word === "string") {
        const type = ['.png','.jpg','jpeg']
        const dotIndex = word.lastIndexOf('.');
        const ext = word.substring(dotIndex);
        if(word.split(":").includes('blob')) {
            console.log("test")
            return true
        }
        return type.includes(ext);    
    } else {
        return true
    }
    
}

// blob:http://localhost:3000/9998a70b-2949-4670-8813-94dd288e36e7