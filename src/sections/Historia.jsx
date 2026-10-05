import integrantes from '../data/integrantes'

export default function Historia() {
  return (
    <section id="historia" className="historia py-5">
      <div className="container py-4">
        <div className="text-center mb-5">
          <span className="badge rounded-pill text-bg-dark px-4 py-2">📼 NOSSA HISTÓRIA</span>
          <h2 className="display-5 fw-bold mt-3">Quatro pessoas. Uma loja. Mil histórias.</h2>
          <p className="text-muted historia-intro">
            A Rebobina nasceu da vontade de transformar nostalgia em uma experiência digital.
          </p>
        </div>

        <div className="historia-abertura mb-5">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center">
              <div className="historia-fita">
                <div className="fita-topo">
                  <span>VHS</span>
                  <span>REBOBINA</span>
                </div>
                <div className="fita-corpo">
                  <div className="fita-rolo"></div>
                  <div className="fita-rolo"></div>
                </div>
                <div className="fita-nome">PLAY • PAUSE • REWIND</div>
              </div>
            </div>

            <div className="col-lg-6 mt-5 mt-lg-0">
              <span className="historia-numero">CAPÍTULO 01</span>
              <h3 className="fw-bold mt-2">Uma ideia que ganhou forma</h3>
              <p>
                Quatro integrantes, diferentes ideias e uma missão em comum: criar uma loja
                online com aquele gostinho das antigas.
              </p>
              <p>
                Assim surgiu a Rebobina, reunindo filmes, séries, músicas e jogos em um só lugar.
              </p>
              <div className="palavra-rebobina">“DÊ O PLAY NA NOSTALGIA.”</div>
              <p>
                Cada parte do projeto ficou nas mãos de um integrante. Cada página ganhou sua
                própria identidade e, juntas, elas formaram a nossa loja.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {integrantes.map((pessoa) => (
            <div className="col-md-6 col-lg-3" key={pessoa.nome}>
              <div className="historia-card h-100">
                <div className="historia-icone">{pessoa.icone}</div>
                <span className="capitulo">{pessoa.capitulo}</span>
                <h3>{pessoa.nome}</h3>
                <p>{pessoa.texto}</p>

                <div className="responsabilidade">
                  <strong>Responsável por:</strong>
                  {pessoa.responsavel.map((item) => (
                    <div key={item}>{item}</div>
                  ))}
                </div>

                <div className="frase-card">{pessoa.frase}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="historia-final text-center mt-5">
          <span className="badge rounded-pill bg-dark px-4 py-2">📼 FINAL DA FITA</span>
          <h3 className="display-6 fw-bold mt-3">E assim nasceu a REBOBINA.</h3>
          <p className="lead">
            Cada integrante trouxe uma parte. Juntos, criamos uma experiência inteira.
          </p>
          <p className="text-muted">
            Filmes, séries, músicas, jogos, cadastro e a opinião de quem visita. Tudo reunido
            em uma única loja.
          </p>
          <a href="#categorias" className="btn btn-dark btn-lg rounded-pill px-5 mt-3">
            🎬 Começar a viagem
          </a>
        </div>
      </div>
    </section>
  )
}