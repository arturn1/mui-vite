export interface ElementModel {
    elemType: number;
    id: number;
    createdAt: string;
}

enum ElemType {
    Water = 'water',
    Fire = 'fire',
    Earth = 'earth',
    Air = 'air'
}