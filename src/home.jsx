import abr from './assets/img/abr.png';

export default function Home() {
    return (
        <>
            <div className="h-screen bg-blue-900 flex flex-col items-center justify-center pt-12 overflow-hidden mt-4" id="Home">
                <div className="flex flex-col md:flex-row items-center justify-center w-full h-full relative">
                    <div className="text-center w-full mb-10 md:w-1/2 md:mb-0">
                        <p className="text-blue-200 text-4xl font-semibold md:text-6xl p-">Hello, I'm</p>

                                               <p className="text-white text-6xl md:text-7xl mt-2 p-1 font-bold">Albright Raj</p>
                        <p className="text-blue-300 xl:text-xl text-2xl mt-2 p-1">Web Developer</p>
                        <button className="bg-blue-500 text-white px-6 py-3 rounded mt-4 md:mt-6">Say Hello</button>
                    </div>
                    <div className="w-full xl:mt-6 md:w-1/2 flex justify-center md:mt-0 relative">
                        <img src={abr} alt="Albright Raj" className="xl:w-3/4 md:w-full pr-0 md:pr-5 object-contain"/>
                        <img src={abr} alt="Albright Raj" className="xl:w-3/4 md:w-full pr-0 md:pr-5 object-contain absolute bottom-0 left-0 right-0 mx-auto block md:hidden"/>
                    </div>
                </div>
            </div>
        </>
    );
}
