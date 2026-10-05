const links = [
  { href: '#inicio', texto: 'Início' },
  { href: '#historia', texto: 'Nossa história' },
  { href: '#contato', texto: 'Contato' },
]

export default function Navbar() {
  return (
    <header className="topo sticky-top py-3">
      <nav
        className="navbar navbar-expand-md bg-white rounded-5 shadow-sm mx-3 mx-md-5 px-4 py-2"
        aria-label="Navegação principal"
      >
        <a className="navbar-brand fw-bold" href="#inicio">📼 REBOBINA</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuPrincipal"
          aria-controls="menuPrincipal"
          aria-expanded="false"
          aria-label="Abrir menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menuPrincipal">
          <ul className="navbar-nav nav-pills ms-auto gap-md-2">
            {links.map((link) => (
              <li className="nav-item" key={link.href}>
                <a className="nav-link rounded-5 px-3" href={link.href}>
                  {link.texto}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}