export default function Header() {
  return(
      <>
      <div className="flex justify-between py-6 bg-zinc-800 font-medium pl-3 text-zinc-50 text-2xl fixed top-0 left-0 right-0 w-full">
          <div>
              ABR
          </div>
          <div className="">
              <a className="mr-4" href="#Home">Home</a>
              <a className="mr-4" href="#About">About</a>
              <a className="mr-4" href="#Contact">Contact</a>
          </div>
      </div>
      </>
  )
}
