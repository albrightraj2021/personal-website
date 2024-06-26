import abr from './assets/img/abr.png';

export default function Home() {
    return (
        <>
            <div className="bg-blue-900 flex flex-col items-center justify-center pt-12 overflow-hidden  flex-wrap " id="Home">
                <div className="flex flex-col xl:flex-row items-center justify-center w-full pt-10 xl:pt-4">
                    <div className="text-center  w-full pt-4 xl:w-1/2 xl:mb-8 pb-10">
                        <p className="text-blue-200 text-4xl font-semibold xl:text-6xl p-1 xl:pb-2">Hello, I'm</p>
                        <p className="text-white text-5xl xl:text-7xl mt-2 p-1 font-bold  xl:pb-5">Albright Raj</p>
                        <p className="text-blue-300 xl:text-3xl text-2xl mt-2 pb-6  xl:pb-3">Web Developer</p>
                        <button className="bg-blue-600 text-white px-8 py-4 rounded mt-4 xl:mt-6 text-1xl">Say Hello</button>
                    </div>
                    <div className="w-full   xl:w-1/2 flex justify-center mt-10 ">
                        <img src={abr} alt="Albright Raj" className="w-3/4 m-0  xl:w-5/6 pr-0 xl:pr-5  pt-3 object-bottom xl:pt-3 "/>
                    </div>
                </div>
            </div>
        </>
    );
}