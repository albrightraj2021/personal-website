import abr from './assets/img/abr.png';
export default function Home() {
    return (
        <>
        <div class="h-screen bg-blue-900 flex flex-col items-center justify-center pt-24 overflow-hidden " id="Home" >
        <div class="flex flex-col md:flex-row items-center justify-center w-full h-full">
            <div class="text-center md:text-left w-full md:w-1/2 p-4">
                <h4 class="text-blue-200 text-2xl">Hello, I'm</h4>
                <h2 class="text-white text-4xl mt-2">Albright Raj</h2>
                <h6 class="text-blue-300 text-xl mt-2">Web Developer</h6>
                <button class="bg-blue-300 text-blue-900 px-6 py-3 rounded mt-4">Say Hello</button>
            </div>
            <div class="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center ">
                <img src={abr}alt="person" class="w-4/2 pr-5 object-bottom"/>
            </div>
        </div>
    </div>
        </>
    )
}