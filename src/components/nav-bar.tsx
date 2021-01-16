import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <Link href="https://br.leagueoflegends.com/en-us/">
        <a className="navbar-brand" target="_blank">
          <img src="https://www.toornament.com/media/file/2795263737750224896/original?v=1567295244" />
        </a>
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              My resume
            </a>
          </li>
        </ul>
        <Link href="https://github.com/Matheus-se/next">
          <a target="_blank">
            <button className="btn my-3 py-2 my-sm-0">Source Code</button>
          </a>
        </Link>
      </div>
    </nav>
  );
}
