import React, { useState, useEffect } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";

const items = [
    {
        title: "What is React?",
        content: "React is a front end javascript framework",
    },
    {
        title: "Why use React?",
        content: "React is a favorite JS Lib among engineers",
    },
    {
        title: "How do you use React?",
        content: "You use React by creating components",
    },
];

const options = [
    {
        label: "The Color Red",
        value: "red",
    },
    {
        label: "The Color Green",
        value: "green",
    },
    {
        label: "The Color Blue",
        value: "blue",
    },
];
export default () => {
    const [selected, setSelected] = useState(options[0]); // argument is default value

    return (
        <div>
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            <Dropdown
                selected={selected}
                onSelectedChange={setSelected}
                options={options}
            />
        </div>
    );
};
