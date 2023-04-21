import { useState } from "react";

const useMenu = (initialState = false) => {
    const [ariaExpanded, setExpanded] = useState(initialState);
    const [toggle, setToggle] = useState('');

    const toggleExpanded = (target: React.KeyboardEvent<HTMLAnchorElement>) => {
        if (target.key !== 'Enter' ) {
            return false;
        }
        changeToggleState();
    }
    const changeToggleState = () => {
        setExpanded(!ariaExpanded);
        setToggle(!ariaExpanded? '!block': '!hidden');
    }
    const changeToggleStateManual = (state: boolean) => {
        setExpanded(state);
        setToggle(state? '!block': '!hidden');
    }

    const resetToggle = () => {
        setExpanded(false);
        setToggle('');
    }

    return [{
        ariaExpanded,
        toggle,
        changeToggleState,
        toggleExpanded,
        changeToggleStateManual,
        resetToggle
    }];
}

export { useMenu };