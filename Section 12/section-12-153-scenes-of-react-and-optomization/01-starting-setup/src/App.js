import React, {useState, useCallback} from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
    const [showParagraph, setShowParagraph] = useState(false);
    const [allowToggle, setAllowToggle] = useState(false);

    const toggleParagraphHandler = useCallback(() => {
        if (allowToggle) {
            setShowParagraph((previousShowParagraph) => !previousShowParagraph); //using the function syntax is for when we are using the previous state in someway. In this case we need to use the previous state because we are setting to the opposite of what that previous state is.
        }
    }, [allowToggle]);

    const allowToggleHandler = () => {
        setAllowToggle(true);
    };

    return (
        <div className="app">
            <h1>Hi there!</h1>
            <DemoOutput show={showParagraph} />
            <Button onClick={allowToggleHandler}>Allow Toggling</Button>
            <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
        </div>
    );
}

export default App;
