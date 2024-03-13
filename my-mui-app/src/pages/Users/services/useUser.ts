import { useState } from "react";
import { UserModel } from "../../../Models/UserModel";
import api from "../../../services/axios";
import { toast } from "react-toastify";



export const useUsers = () => {
    const [user, setUser] = useState<UserModel>({} as UserModel);

    const fetchUsers = async () => {
        const response = await api.get(
            `https://localhost:7075/api/getuser/1`
        ).then(response => {
            setUser(response.data);
            return response.data
        })
        return response
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updateUser = async (data: any) => {
        await api.patch('edituser', data)
            .then((resp => {
                setUser(resp!.data)
                toast.success('Operation Successfully')
            }))
            .catch(function (error) {
                if (error.response) {
                    toast.error('Operation Error on Server')
                    return
                } else if (error.request) {
                    toast.error('Operation Error on Client')
                    return
                } else {
                    console.log('Error', error.message);
                    return
                }
            })
    }

    return { user, setUser, updateUser, fetchUsers };
};
