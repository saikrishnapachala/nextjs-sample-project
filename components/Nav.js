import Link from 'next/link'

const Nav = () => (
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="/">SAIKRISHNA</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor02">
    <ul class="navbar-nav mr-auto">
     
      <li class="nav-item">
        <Link href="/about">
        <a class="nav-link">About</a>
        </Link>
      </li>
      <li class="nav-item ">
        <Link href="/Projects">
           <a class="nav-link">Projects</a>
        </Link>
      </li>
      <li class="nav-item ">
        <Link href="/Hireme">
           <a class="nav-link">Hire me!</a>
        </Link>
      </li>

    </ul>
  </div>
</nav>
)


export default Nav


