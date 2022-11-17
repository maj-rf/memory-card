export const Navbar = () => {
  return (
    <nav className="border-gray-200 border-b-2 px-5 py-2.5">
      <div className="container flex flex-wrap justify-between items-center">
        <h1>Memory Game</h1>
        <div className=" flex gap-4">
          <p className=" bg-zinc-700 py-2 px-3 rounded-md">Score: 0</p>
          <p className=" bg-zinc-700 py-2 px-3 rounded-md">High Score: 0</p>
        </div>
      </div>
    </nav>
  )
}
