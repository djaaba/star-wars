import { ReactNode, DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from "react";

export interface CharacterSearchProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement{
	children: ReactNode;
}