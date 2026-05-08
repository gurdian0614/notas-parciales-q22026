import { useState, useEffect, useCallback } from "react";
import type { Parciales, NombreParcial } from "../types/Parciales";

export const useNotasParciales = () => {
    const objParciales: Parciales = {
        parcial1: "",
        parcial2: "",
        parcial3: "",
        total: 0,
    }
    
    const [nota, setNota] = useState<Parciales>(objParciales);
    const MAX_P1_P2: number = 30;
    const MAX_P3: number = 40;
    const MAX_TOTAL: number = 100;
    const PASS_SCORE: number = 65;

    const obtenerNotaParcialMaxima = (nombreParcial: NombreParcial): number => {
        if (nombreParcial === "parcial1" || nombreParcial === "parcial2") {
            return MAX_P1_P2;
        }
        return MAX_P3;
    }
}