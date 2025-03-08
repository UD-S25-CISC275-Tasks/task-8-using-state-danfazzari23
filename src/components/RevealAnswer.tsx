import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [showAnswer, setShowAnswer] = useState<boolean>(false);

    function handleClick(): void {
        setShowAnswer(!showAnswer);
    }

    return (
        <div>
            <Button onClick={handleClick}>Reveal Answer</Button>
            {showAnswer && <div>42</div>}
        </div>
    );
}
