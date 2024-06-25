export default function Header() {
  return(
      <>
      <div className="flex justify-between py-4 bg-zinc-800 font-medium pl-3 text-zinc-50 text-xl fixed top-0 left-0 right-0 w-full">
          <div>
              ABR
          </div>
          <div className="">
              <a className="mr-3" href="#Home">Home</a>
              <a className="mr-3" href="#About">About</a>
              <a className="mr-3" href="#Contact">Contact</a>
          </div>
      </div>
      </>
  )
}
