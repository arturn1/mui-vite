import { UseFormReturn } from "react-hook-form";
import { useState } from "react";
import { useUsers } from "../services/useUser";
import { Box, Button, FormControlLabel, FormGroup, FormHelperText, MenuItem, Select, Switch, TextField, Typography } from "@mui/material";
import { UserModel } from "../../../Models/UserModel";
import { useQuery } from "react-query";

interface EditUserSubmitForm {
    id: number;
    username?: string | undefined;
    gender?: string;
    age: number;
    isMale: boolean;
    elementType: number
}

interface IEditUserSubmitForm {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    internalProps: UseFormReturn<EditUserSubmitForm, any>
}

export default function EditUser(props: IEditUserSubmitForm) {

    const { register, handleSubmit, formState: { errors }, getValues, watch } = props.internalProps

    const { data } = useQuery<UserModel, Error>('repoSlip')


    const { updateUser } = useUsers()
    const isLocalIsMale = watch("isMale")

    const [localName, setLocalName] = useState(getValues("username"));

    const onSubmitHandler = (data: EditUserSubmitForm) => {
        updateUser(data);
    };

    return (
        <>
            <Typography variant="h4" gutterBottom>{data?.username}</Typography>
            <FormGroup>
                <Typography variant="h6">Lets sign you in.</Typography>

                <input
                    type="hidden"
                    {...register("id")}
                />

                <TextField variant="filled"
                    label='Nome'
                    {...register("username")}
                    onChange={e => (setLocalName(e.target.value))}
                />
                <Typography variant="body2" gutterBottom>{errors.username?.message}</Typography>

                <TextField variant="filled"
                    label='Idade'
                    {...register("age")}
                />
                <Typography variant="body2" gutterBottom>{errors.age?.message}</Typography>

                <FormHelperText>Select type:</FormHelperText>
                <Select
                    {...register("elementType")}>
                    <MenuItem value="0">water</MenuItem >
                    <MenuItem value="1">fire</MenuItem >
                    <MenuItem value="2">earth</MenuItem >
                    <MenuItem value="3">air</MenuItem >
                </Select>
                <Box>
                    <FormControlLabel control={
                        <Switch
                            {...register("isMale")}
                            id="isMale"
                        />
                    } label="Is Male:" />
                </Box>

                {isLocalIsMale && (
                    <>
                        <TextField variant="filled"
                            label='Gênero'
                            {...register("gender")}
                            onBlur={handleSubmit(onSubmitHandler)}
                        />
                        <Typography variant="body2" gutterBottom>{errors.gender?.message}</Typography>
                    </>
                )}
                <Button variant="contained" onClick={handleSubmit(onSubmitHandler)}>Salvar</Button>
            </FormGroup>
        </>
    );
}