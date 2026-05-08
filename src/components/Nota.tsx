import Input from "./Input";
import useNotasParciales from "../hooks/useNotasParciales";

const Nota: React.FC = () => {
    const {
        nota,
        handleCambiarNota,
        obtenerNotaParcialMaxima,
        MAX_TOTAL,
        PASS_SCORE
    } = useNotasParciales();
    return (
        <Input 
            label="Primer Parcial"
            maxPoints={obtenerNotaParcialMaxima("parcial1")}
            value={nota.parcial1}
            name="parcial1"
            onChange={handleCambiarNota}
        />
    );
}

export default Nota