import { IceAndFireCharacter } from "./IceAndFireCharacter";
import { IceAndFireHouse } from "./IceAndFireHouse";

export type ApiDefinition = {
    getHouses: (page: number) => Promise<IceAndFireHouse[]>;
    getCharacterByUrl: (url: string) => Promise<IceAndFireCharacter>;
};
