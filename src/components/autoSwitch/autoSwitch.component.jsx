import { useEffect, useState } from "react";

export default function AutoSwitch({ children, interval = 4000 }) {
    const items = Array.isArray(children) ? children : [children];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % items.length);
        }, interval);
        return () => clearInterval(timer);
    }, [items.length, interval]);

    return (
        <>
            {/* <div className=" absolute top-4  right-4">{index + 1}</div> */}
            {items[index]}
        </>
    )
}