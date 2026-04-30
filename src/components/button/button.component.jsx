import { cva } from "class-variance-authority"

let buttonStyle = cva([
    // "relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:scale-x-100 ",
    // "bg-[linear-gradient(currentColor,currentColor)] bg-size-[0%_2px] bg-no-repeat bg-bottom-left transition-all duration-300 hover:bg-size-[100%_2px]",
    "border",
    "relative inline-block text-black after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
    // " after:scale-0 after:h-full after:hover:scale-100 after:border after:w-full after:left-0 after:absolute ",
    // "select-none",
    // "w-fit h-fit",
    // "p-2 rounded-2xl bg-gray-900",
    // "font-bold",
    // "aspect-video",
    // "duration-300",
    // "hover:cursor-pointer hover:bg-gray-800",
    // "active:scale-95 active:bg-gray-900"
])

export default function Button({ children, onClick, className }) {
    return (
        <button className={buttonStyle({ className })} onClick={onClick} >{children}</button>
    )
};
