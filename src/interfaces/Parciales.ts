export type parcial = number | "";

export interface Parciales {
    parcial1: parcial;
    parcial2: parcial;
    parcial3: parcial;
    total: number;
}

export type NombreParcial = keyof Omit<Parciales, "total">;