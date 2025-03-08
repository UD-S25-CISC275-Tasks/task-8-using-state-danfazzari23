import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): React.JSX.Element {
    const [count, setCount] = useState<number>(0);

    return (
        <div>
            <div>Current Count: {count}</div>
            <Button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Increment
            </Button>
        </div>
    );
}
