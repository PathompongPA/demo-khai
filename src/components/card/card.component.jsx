import { useState } from "react"
import Button from "../button/button.component"

export default function Card() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = () => { setIsOpen(!isOpen) }
    return (
        <div className="" >
            <div className=" p-2 hover:cursor-pointer select-none" onClick={toggleOpen}>
                Detail card.
            </div>
            {isOpen &&
                <div className=" fixed bg-black/50 w-screen h-screen top-0 p-8 left-0 flex justify-center items-center" data-open={isOpen} onClick={toggleOpen}>
                    <div className=" select-none flex justify-center items-center flex-col w-screen gap-8 bg-gray-950 p-10 rounded-2xl data-[animate=true]:animate-fade-down" data-animate={isOpen} onClick={(e) => { e.stopPropagation() }}>
                        asdfasdlkjlk
                        <Button onClick={toggleOpen}>close</Button>
                    </div>
                </div>
            }
        </div>
    )
};
