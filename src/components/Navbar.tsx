type Props = {
  score: number
  highScore: number
}
export const Navbar = (props: Props) => {
  return (
    <nav className="border-gray-200 border-b-2 px-5 py-2.5">
      <div className="flex flex-wrap justify-between items-center gap-2">
        <h1>Memory Game</h1>
        <div className=" flex gap-4">
          <p className=" bg-zinc-700 py-2 px-3 rounded-md">
            Score: {props.score}
          </p>
          <p className=" bg-zinc-700 py-2 px-3 rounded-md">
            High Score: {props.highScore}
          </p>
        </div>
      </div>
    </nav>
  )
}
