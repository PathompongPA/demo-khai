import Reveal from "../animation/reveal/reveal.component";

export default function Slide1() {
    return (
        <div className=" w-screen h-screen flex justify-center items-center gap-4 relative">
            <div className=" absolute top1/2 -translate-y-1/2 flex gap-8 flex-col md:flex-row justify-center items-center ">
                <Reveal type={"fade-down"} >
                    <h1 className="text-2xl text-gray-400">เปลี่ยนหน้า</h1>
                </Reveal>
                <Reveal type={"fade-down"} delay={"1"}>
                    <h1 className="text-4xl font-bold">แสดง slide ถัดไป</h1>
                </Reveal>
                <Reveal type={"fade-down"} delay={"2"}>
                    <h1 className="text-2xl text-gray-500">Go Go ..</h1>
                </Reveal>
            </div>
        </div>
    )

};
