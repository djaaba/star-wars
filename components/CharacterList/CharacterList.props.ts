import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";
import { ICharacter } from "../../interfaces";

export interface CharacterListProps {
	characters: Array<ICharacter>;
	filtered: Array<ICharacter>;
}