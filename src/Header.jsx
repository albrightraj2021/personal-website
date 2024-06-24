export default function Header() {
    return(
        <>
        <div className="flex justify-between  py-5 bg-zinc-800 font-medium pl-3 text-zinc-50 text-xl" >
            <div>
                ABR
            </div>
          <div className="">
            <a className="mr-3" href="#Home">Home</a>
            <a className="mr-3" href="#About"> About</a>
            <a className="mr-3" href="#About">Contact</a>
          </div>
        </div>
        </>
    )
}