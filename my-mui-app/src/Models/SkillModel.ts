import Character from "../Pages/Character/Character";
import { CharacterModel } from "./CharaceterModel";
import { ElementModel } from "./ElementModel";

export interface SkillModel {
    id: number;
    name: string;
    damage: number;
    characters?: CharacterModel[] | null;
    elementType: ElementModel[];
}