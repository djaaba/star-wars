import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";
import { ICharacter } from "../../interfaces";

export interface CharacterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	character: ICharacter;
}