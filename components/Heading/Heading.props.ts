import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";

export interface HeadingProps {
	tag: 'h1' | 'h2' | 'h3';
	children: ReactNode;
	hover?: boolean;
}