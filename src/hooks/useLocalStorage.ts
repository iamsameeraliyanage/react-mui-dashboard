import { useState, useEffect } from "react";

function useLocalStorage<T>(
    key: string,
    initialValue: T
): [T, (value: T) => void] {
    // Get the initial value from local storage if it exists
    const storedValue = localStorage.getItem(key);
    const initial = storedValue ? JSON.parse(storedValue) : initialValue;

    // Create state to hold the current value
    const [value, setValue] = useState<T>(initial);

    // Use a useEffect to save the value to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorage;
