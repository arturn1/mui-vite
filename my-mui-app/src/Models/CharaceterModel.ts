import { UserModel } from "./UserModel";
import { SkillModel } from "./SkillModel";

export interface CharacterModel {
    id: number;
    name?: string;
    rpgClass?: string;
    user?: UserModel;
    weapons?: WeaponModel[] | null;
    skills?: SkillModel[] | null;
}