import type {InputProps} from "../types/InputProps";

const Input: React.FC<InputProps> = ({label, maxPoints, value, name, onChange}) => {
    const isInvalid: boolean = value !== "" && value > maxPoints;

    return (
        <div>
            <label>
                {label}
            </label>

            <p>
                Max: {maxPoints} pts
            </p>

            <input
                type="number"
                value={value}
                onChange={(e) => onChange(name, e.target.value)}
                min={0}
                max={maxPoints}
                placeholder={`0 - ${maxPoints}`} 
            />
        </div>
    );
}

export default Input