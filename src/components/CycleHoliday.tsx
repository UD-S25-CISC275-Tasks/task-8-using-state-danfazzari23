import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Christmas"
    | "Easter"
    | "Halloween"
    | "New Year"
    | "Thanksgiving";

const holidayEmojis: Record<Holiday, string> = {
    Christmas: "🎄",
    Easter: "🐰",
    Halloween: "🎃",
    "New Year": "🎆",
    Thanksgiving: "🦃"
};

const alphabetOrder: Holiday[] = [
    "Christmas",
    "Easter",
    "Halloween",
    "New Year",
    "Thanksgiving"
];

const yearOrder: Holiday[] = [
    "New Year",
    "Easter",
    "Halloween",
    "Thanksgiving",
    "Christmas"
];

export function CycleHoliday(): React.JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>("New Year");

    function advanceAlphabet(): void {
        const currentIndex = alphabetOrder.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % alphabetOrder.length;
        setCurrentHoliday(alphabetOrder[nextIndex]);
    }

    function advanceYear(): void {
        const currentIndex = yearOrder.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % yearOrder.length;
        setCurrentHoliday(yearOrder[nextIndex]);
    }

    return (
        <div>
            <div>Holiday: {holidayEmojis[currentHoliday]}</div>
            <Button onClick={advanceAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advanceYear}>Advance by Year</Button>
        </div>
    );
}
