import { toast } from "react-toastify";


function ToastPromisse(promise: () => Promise<void>) {
    return (
        toast.promise(promise, {
            pending: "Promise is pending",
            success: "Promise  Loaded",
            error: {
                render({ data }) {
                    return `${data}`
                }
            }
        })
    )
}

export default ToastPromisse