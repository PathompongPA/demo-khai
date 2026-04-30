import Reveal from "../animation/reveal/reveal.component";

export default function Presentation() {
    return (
        <div className="w-screen h-screen relative flex flex-col md:flex-row " >
            {/* <Reveal >
                <div className=" bg-gray-800 w-screen border h-50"></div>
            </Reveal> */}
            <div className="absolute top-48 left-8 md:right-16 flex flex-col gap-8">
                <Reveal delay={""} className={"text-gray-400 font-bold"}>
                    <h1 className=" text-3xl uppercase">Industry Motor</h1>
                    <h1 className=" text-3xl uppercase">Hight Performance</h1>
                </Reveal>
                <div className=" flex gap-4 md:gap-8">
                    <Reveal delay={"1"}>
                        <h1 className=" text-sm md:text-lg text-gray-500">ราคาพิเศษ</h1>
                    </Reveal>
                    <Reveal delay={"2"}>
                        <h1 className=" text-sm md:text-lg text-gray-500">เลือกชม</h1>
                    </Reveal>
                </div>
            </div>
            <Reveal className={" absolute w-screen flex justify-center left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  "} delay={"3"}>
                <img
                    className=" w-screen md:w-200"
                    src="
                    https://www.pngall.com/wp-content/uploads/10/Water-Pump-Motor.png
                    "
                    alt=""
                />
            </Reveal>
        </div>
    )
};
