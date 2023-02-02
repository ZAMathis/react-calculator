import { useState } from "react"

const Calculator = () => {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const operators = ['+', '-', '*', '/', '.'];
    
    const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    const createNumbers = () => {
        const digits = [];

        for (let i = 0; i < 9; i++) {
            digits.push(
                <button id={numbers[i]} 
                key={i} 
                onClick={() => updateCalc((i + 1).toString())}>
                    {i + 1}
                    </button>
            )
        }

        return digits;
    }

    const updateCalc = val => {
        if (operators.includes(val) && calc === '' ||
        operators.includes(val) && operators.includes(calc.slice(-1))) {
            return;
        }
        
        setCalc(calc + val);

        if (!operators.includes(val)) {
            setResult(eval(calc + val).toString());
        }
    }

    const calculate = () => {
        setCalc(eval(calc).toString());
        setResult("");
    }

    const clear = () => {
        setCalc("");
        setResult("");
    }

    return (
        <div id="calculator">
            <div id="display">
                {result ? <span>({result})</span> : ''} 
                {calc || '0'}
            </div>

            <div id="operators">
                <button id="add" onClick={() => updateCalc('+')}>+</button>
                <button id="subtract" onClick={() => updateCalc('-')}>-</button>
                <button id="multiply" onClick={() => updateCalc('*')}>*</button>
                <button id="divide" onClick={() => updateCalc('/')}>/</button>
                <button id="clear" onClick={clear}>CLEAR</button>
            </div>

            <div id="numbers">
                {createNumbers()}
                <button id="zero">0</button>
                <button id="decimal">.</button>
                <button id="equals" onClick={calculate}>=</button>
            </div>
        </div>
    )
}

export default Calculator