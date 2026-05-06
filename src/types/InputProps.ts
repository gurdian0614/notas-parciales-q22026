import type { NombreParcial, parcial } from "./Parciales";

export interface InputProps {
    label: string;
    maxPoints: number;
    value: parcial;
    name: NombreParcial;
    onChange: (name: NombreParcial, value: string) => void;
}