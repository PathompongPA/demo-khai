import { useEffect, useState } from "react";

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY;
            current > lastScrollY ? setHidden(true) : setHidden(false)
            setLastScrollY(current);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <div className=" select-none fixed top-0 transition-transform duration-300  left-0 p-4 bg-gray-900 w-full font-bold z-50 data-[hidden=true]:-translate-y-full data-[hidden=false]:translate-y-0" data-hidden={hidden} >
            <div className="w-fit flex flex-col justify-center items-center gap-1 p-2 bg-gray-500/25">
                <h1 className=" text-4xl uppercase">PNk</h1>
                <h1 className=" text-xs">Supply Ltd.</h1>
                {/* <h1 className=" text-xs"> Punutkit Supply Co., Ltd.  </h1> */}
            </div>
        </div>
    )

};
