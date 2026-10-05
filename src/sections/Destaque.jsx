export default function Destaque() {
  return (
    <section className="py-5 bg-dark text-white">
      <div className="container py-4">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <span className="badge rounded-pill bg-warning text-dark px-3 py-2">
              ⭐ DESTAQUE DA SEMANA
            </span>
            <h2 className="display-5 fw-bold mt-3">Uma viagem no tempo começa aqui.</h2>
            <p className="lead text-white-50 mt-3">
              Relembre personagens, músicas e histórias que fizeram parte de diferentes gerações.
            </p>
            <a href="#categorias" className="btn btn-light btn-lg rounded-pill px-5 mt-3">
              📼 Conferir catálogo
            </a>
          </div>

          <div className="col-lg-5 text-center mt-5 mt-lg-0">
            <div className="tv-retro">
              <div className="tv-screen">
                <span>▶</span>
                <strong>REBOBINA</strong>
                <small>PLAYING...</small>
              </div>
              <div className="tv-controls">● ● ●</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}