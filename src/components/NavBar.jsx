import { Link } from "react-router";

export default function Navbar () {
  return (
    <nav className="bg-zinc-200 text-black p-4 border border-black font-bold text-2xl">
      <ul className="flex gap-8 justify-end mr-6 my-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/owner">Owner</Link>
        </li>
      </ul>
    </nav>
  )
}
