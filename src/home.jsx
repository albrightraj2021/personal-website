import abr from './assets/img/abr.png';

export default function Home() {
    return (
        <>
            <div className="h-screen  bg-blue-900 flex flex-col items-center justify-center pt-12 overflow-hidden mt-4 flex-wrap " id="Home">
                <div className="flex flex-col xl:flex-row items-center justify-center w-full ">
                    <div className="text-center : w-full mb-10 xl:w-1/2 xl:mb-8 p-10">
                        <p className="text-blue-200 text-4xl font-semibold xl:text-6xl p-1 xl:pb-2">Hello, I'm</p>
                        <p className="text-white text-5xl xl:text-7xl mt-2 p-1 font-bold  xl:pb-5">Albright Raj</p>
                        <p className="text-blue-300 xl:text-3xl text-2xl mt-2 p-1  xl:pb-3">Web Developer</p>
                        <button className="bg-blue-600 text-white px-8 py-4 rounded mt-4 xl:mt-6 text-1xl">Say Hello</button>
                    </div>
                    <div className="w-full   xl:w-1/2 flex justify-center mt-10 xl:">
                        <img src={abr} alt="Albright Raj" className="w-3/4 m-0  xl:w-5/6 pr-0 xl:pr-5 object-bottom xl:mt-11"/>
                    </div>
                </div>
            </div>
        </>
    );
}