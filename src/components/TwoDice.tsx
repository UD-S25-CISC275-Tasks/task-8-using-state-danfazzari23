import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(6);
    const [message, setMessage] = useState<string>("");

    const checkResult = (left: number, right: number) => {
        if (left === right) {
            if (left === 1) {
                setMessage("Snake Eyes! You lose!");
            } else {
                setMessage("You win!"); // Updated to display "You win!" when the dice match
            }
        } else {
            setMessage("");
        }
    };

    const rollLeftDie = () => {
        const newValue = d6();
        setLeftDie(newValue);
        checkResult(newValue, rightDie);
    };

    const rollRightDie = () => {
        const newValue = d6();
        setRightDie(newValue);
        checkResult(leftDie, newValue);
    };

    return (
        <div>
            <div>
                <span data-testid="left-die">{leftDie}</span>
                <span data-testid="right-die">{rightDie}</span>
            </div>
            <Button onClick={rollLeftDie} data-testid="roll-left">
                Roll Left
            </Button>
            <Button onClick={rollRightDie} data-testid="roll-right">
                Roll Right
            </Button>
            {message && <div>{message}</div>}
        </div>
    );
}
