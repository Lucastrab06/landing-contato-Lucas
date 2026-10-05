import categorias from '../data/categorias'

export default function Categorias() {
  return (
    <section id="categorias" className="categorias py-5">
      <div className="container py-4">
        <div className="text-center mb-5">
          <span className="badge rounded-pill text-bg-dark px-4 py-2">NOSSO CATÁLOGO</span>
          <h2 className="display-5 fw-bold mt-3">O que você quer assistir hoje?</h2>
          <p className="text-muted">Tem nostalgia para todo tipo de gosto.</p>
        </div>

        <div className="row g-4">
          {categorias.map((cat) => (
            <div className="col-md-6 col-lg-3" key={cat.titulo}>
              <div className="categoria-card h-100">
                <div className="icone">{cat.icone}</div>
                <h3>{cat.titulo}</h3>
                <p>{cat.texto}</p>
                <a href="#contato" className="btn btn-dark rounded-pill">{cat.botao}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}