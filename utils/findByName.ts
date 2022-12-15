import { ICharacter } from "../interfaces";

export const findByName = (array: Array<ICharacter>, name: string) => {
	return array.findIndex(el => el.name === name) + 1;
}