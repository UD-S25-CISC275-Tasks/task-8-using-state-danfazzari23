import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Christmas"
    | "Easter"
    | "Halloween"
    | "New Year"
    | "Thanksgiving";

// Define the mapping from holiday names to their emoji.
const holidayEmojis: Record<Holiday, string> = {
    Christmas: "🎄",
    Easter: "🐰",
    Halloween: "🎃",
    "New Year": "🎆",
    Thanksgiving: "🦃"
};

// Define two different orderings.
// Alphabetical order: the holidays arranged alphabetically.
const alphabetOrder: Holiday[] = [
    "Christmas",
    "Easter",
    "Halloween",
    "New Year",
    "Thanksgiving"
];

// Year order: the holidays arranged in chronological order through the year.
// (For example, New Year (January), Easter (spring), Halloween (October),
// Thanksgiving (November), Christmas (December))
const yearOrder: Holiday[] = [
    "New Year",
    "Easter",
    "Halloween",
    "Thanksgiving",
    "Christmas"
];

export function CycleHoliday(): React.JSX.Element {
    // Initialize with a chosen holiday. Here, "New Year" is chosen.
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>("New Year");

    // Function to get the next holiday in alphabetical order.
    function advanceAlphabet(): void {
        const currentIndex = alphabetOrder.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % alphabetOrder.length;
        setCurrentHoliday(alphabetOrder[nextIndex]);
    }

    // Function to get the next holiday in year order.
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
