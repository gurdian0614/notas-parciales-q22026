import { useState, useEffect, useCallback } from "react";
import type { Parciales, NombreParcial } from "../types/Parciales";

const useNotasParciales = () => {
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

    const calcularTotal = useCallback(() => {
        const p1 = Number(nota.parcial1) || 0;
        const p2 = Number(nota.parcial2) || 0;
        const p3 = Number(nota.parcial3) || 0;

        return p1 + p2 + p3;
    }, [nota.parcial1, nota.parcial2, nota.parcial3]);

    useEffect(() => {
        setNota((prev) => ({
            ...prev,
            total: calcularTotal(),
        }));
    }, [calcularTotal]);

    const handleCambiarNota = (nombreParcial: NombreParcial, valor: string): void => {
        const max = obtenerNotaParcialMaxima(nombreParcial);
        const numValor = Number(valor);

        if (isNaN(numValor) || numValor < 0 || numValor > max) {
            return;
        }

        setNota((prev) => ({
            ...prev,
            [nombreParcial]: valor,
        }));
    }

    return {
        nota,
        handleCambiarNota,
        obtenerNotaParcialMaxima,
        MAX_TOTAL,
        PASS_SCORE,
    }
}

export default useNotasParciales;