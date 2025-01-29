import { Link } from 'react-router-dom';
import abr from './assets/img/abr.png';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function Home() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Home - Albright Raj</title>
                <meta name="description" content="Welcome to the personal website of Albright Raj, a web developer." />
                <meta name="keywords" content="Albright Raj, web developer, web designer, front-end developer, back-end developer, full-stack developer, react developer, nodejs developer, expressjs developer, mongodb developer, mysql developer, postgresql developer, web developer in Chennai, web developer in kathmandu, web developer in lalitpur, web developer in bhaktapur, web developer in pokhara, web developer in chitwan, web developer in butwal, web develope, web developer in India, web developer in Nagercoil, web developer in Tamil nadu" />
                <meta name="author" content="Albright Raj" />
                <meta property="og:title" content="Home - Albright Raj" />
                <meta property="og:description" content="Welcome to the personal website of Albright Raj, a web developer." />
                <meta property="og:image" content="https://albrightraj2021/src/assets/img/home-page.png" />
                <meta property="og:url" content="https://albrightraj2021/" />
                <meta property="og:type" content="website" />
            </Helmet>
            <div className="w-full bg-cyan-950 flex flex-col items-center justify-center pt-5 overflow-hidden flex-wrap">
                <div className="flex flex-col xl:flex-row items-center justify-center w-full pt-10 xl:pt-6">
                    <div className="text-center  w-full pt-4 xl:w-1/2 xl:mb-8 pb-10">
                        <p className="text-blue-200 text-4xl font-semibold xl:text-6xl xl:mt-11 mt-3 xl:pb-2">Hello, I'm</p>
                        <p className="text-white text-5xl xl:text-7xl mt-7 p-1 font-bold  xl:pb-5">Albright Raj</p>
                        <p className="text-blue-300 xl:text-3xl text-2xl mt-8 pb-6  xl:pb-3">Web Developer</p>
                        <button className="bg-cyan-600 text-white  px-6 py-4 rounded mt-10 xl:mt-6 text-1xl"><Link to="/contact">Get Touch</Link></button>
                    </div>
                    <div className="w-full xl:w-1/2 flex justify-center items-center mt-7 xl:mt-0">
                        <img src={abr} alt="Albright Raj" className="max-w-full h-auto object-contain" />
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
}