import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";






export default function Examples() {

    const [selectedItem, setSelectedItem] = useState();
    function handleClick(selectedButton) {
        console.log(`${selectedButton} is clicked`);
        tabContent = selectedButton;
        setSelectedItem(selectedButton);


    };

    let tabContent = <p>Please click a button</p>
    if (selectedItem) {
        tabContent = <div>
            <h3>{EXAMPLES[selectedItem].title}</h3>
            <p>{EXAMPLES[selectedItem].description}</p>
            <p>{EXAMPLES[selectedItem].code}</p>
        </div>
    }
    return (
        <Section title="Examples" id="examples">
            <Tabs buttonsContainer="menu"
            buttons={
                <>
                <TabButton
                    isSelected={selectedItem == 'components'}
                    onClick={() => handleClick('components')}>
                    Components
                </TabButton>
                <TabButton
                    isSelected={selectedItem == 'jsx'}
                    onClick={() => handleClick('jsx')}>
                    JSX
                </TabButton>
                <TabButton
                    isSelected={selectedItem == 'props'}
                    onClick={() => handleClick('props')}>
                    Props
                </TabButton>
                <TabButton
                    isSelected={selectedItem == 'state'}
                    onClick={() => handleClick('state')}>
                    State
                </TabButton>
                </>
            }>
                {tabContent}
                </Tabs>
        </Section>
    );
}