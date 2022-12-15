import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";
import { ICharacter } from "../../interfaces";

export interface CharacterHistoryProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	characters: Array<ICharacter>;
}