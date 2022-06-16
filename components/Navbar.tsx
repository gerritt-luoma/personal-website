import Link from "next/link";

const Navbar = () => {
  return (
    <header className="nav_bar">
      <nav>
        <ul className="nav_links">
          <li>
            <Link href='#'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='#'>
              <a>Resume</a>
            </Link>
          </li>
          <li>
            <Link href='#'>
              <a>Projects</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;