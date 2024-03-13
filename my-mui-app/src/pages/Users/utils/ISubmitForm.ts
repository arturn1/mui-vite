interface IEditUserSubmitForm {
    id: number;
    username?: string | undefined;
    gender?: string;
    age: number;
    isMale: boolean;
    elementType: number
}

export type { IEditUserSubmitForm }