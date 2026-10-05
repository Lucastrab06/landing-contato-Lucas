export default function Footer() {
  return (
    <footer className="bg-dark py-4">
      <p className="text-white text-center">© 2026 Rebobina</p>

      <div className="d-flex justify-content-center gap-3 fs-4">
        <a
          href="https://www.instagram.com/rebobina_loja_retro/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
          aria-label="Instagram da Rebobina"
        >
          <i className="bi bi-instagram"></i>
        </a>

        <a href="#contato" className="text-white" aria-label="Ir para o formulário de feedback">
          <i className="bi bi-file-earmark-text"></i>
        </a>
      </div>
    </footer>
  )
}