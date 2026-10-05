import { useEffect, useRef, useState } from 'react'
import categorias from '../data/categorias'

export default function Escolha() {
  const [girando, setGirando] = useState(false)
  const [resultado, setResultado] = useState(null)
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  function escolher() {
    setGirando(true)
    timer.current = setTimeout(() => {
      const sorteada = categorias[Math.floor(Math.random() * categorias.length)]
      setResultado(sorteada)
      setGirando(false)
    }, 2200)
  }

  return (
    <section className="escolha py-5">
      <div className="container py-5 text-center">
        <span className="badge rounded-pill text-bg-dark px-4 py-2">🎲 NÃO SABE O QUE ESCOLHER?</span>
        <h2 className="display-5 fw-bold mt-3">Deixa a Rebobina decidir!</h2>
        <p className="lead text-muted">
          Aperte o botão e descubra qual categoria combina com você hoje.
        </p>

        <button
          type="button"
          className="btn btn-dark btn-lg rounded-pill px-5 mt-3"
          onClick={escolher}
          disabled={girando}
        >
          🎲 Escolha por mim!
        </button>

        <div className="resultado-escolha mt-5" aria-live="polite">
          {girando ? (
            <>
              <div className="icone-escolha rebobinando">📼</div>
              <h3>Rebobinando...</h3>
              <div className="barra-rebobinando">
                <div className="progresso-rebobinando"></div>
              </div>
              <span className="texto-rebobinando">◀◀ REW</span>
            </>
          ) : resultado ? (
            <>
              <div className="icone-escolha resultado-icone">{resultado.icone}</div>
              <h3>{resultado.titulo}</h3>
              <p>{resultado.texto}</p>
              <a href="#categorias" className="btn btn-dark rounded-pill botao-categoria">
                {resultado.botao}
              </a>
            </>
          ) : (
            <>
              <div className="icone-escolha">📼</div>
              <h3>Sua próxima sessão está esperando...</h3>
              <p>Clique no botão para descobrir!</p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}