import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import EditUser from "./components/EditUser";
import { useEffect } from "react";
import { useUsers } from "./services/useUser";
import { validationSchema } from "./utils/validationSchema";
import { IEditUserSubmitForm } from "./utils/ISubmitForm";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { UserModel } from "../../Models/UserModel";
import Loader from "../../shared/components/Loader";


const queryClient = new QueryClient()

export default function Users() {

    return (
        <QueryClientProvider client={queryClient}>
            <UsersPage></UsersPage>
        </QueryClientProvider>
    )
}

function UsersPage() {

    console.log('rend')
    const { user, fetchUsers } = useUsers()

    const { isLoading, data, error } = useQuery<UserModel, Error>('repoSlip', () => fetchUsers())

    const EditUserSubmitForm = useForm<IEditUserSubmitForm>({
        defaultValues: {} as IEditUserSubmitForm,
        mode: "onBlur",
        resolver: yupResolver(validationSchema)
    });

    useEffect(() => {
        if (data)
            EditUserSubmitForm.reset(data);
    }, [EditUserSubmitForm, data, user])

    if (error)
        return (
            <>
                <div>Error</div>
            </>
        )

    if (isLoading) {
        return (
            <>
                <Loader></Loader>
            </>
        )
    }

    return (
        <>
            <EditUser internalProps={EditUserSubmitForm}></EditUser>
        </>
    )
}
