export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 text-center text-lg-start">
            <span className="badge rounded-pill text-bg-light px-4 py-2 mb-3">📼 LOJA RETRÔ</span>

            <h1 className="display-1 fw-bold">REBOBINA</h1>
            <p className="slogan display-6 fw-semibold">A nostalgia nunca sai de moda.</p>

            <p className="lead mt-4">
              Filmes, séries, músicas e jogos para você voltar no tempo sem sair do sofá.
            </p>

            <div className="mt-4">
              <a href="#categorias" className="btn btn-dark btn-lg rounded-pill px-5">
                🎬 Explorar catálogo
              </a>
              <a href="#contato" className="btn btn-outline-dark btn-lg rounded-pill px-5 ms-2 mt-2 mt-sm-0">
                💬 Deixe seu feedback
              </a>
            </div>
          </div>

          <div className="col-lg-5 text-center mt-5 mt-lg-0">
            <div className="vhs-card">
              <div className="vhs-label">
                <span>REBOBINA</span>
                <small>LOJA • 1990</small>
              </div>
              <div className="vhs-reels">
                <div className="reel"></div>
                <div className="reel"></div>
              </div>
              <div className="vhs-line"></div>
              <div className="vhs-bottom">
                <span>PLAY</span>
                <span>▶</span>
                <span>REW</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}