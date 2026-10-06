import { useEffect, useState } from 'react'

const campos = [
  { id: 'nome', rotulo: 'NOME COMPLETO', tipo: 'text', placeholder: 'Digite seu nome' },
  { id: 'email', rotulo: 'E-MAIL', tipo: 'email', placeholder: 'Digite seu e-mail' },
  { id: 'nascimento', rotulo: 'DATA DE NASCIMENTO', tipo: 'date', placeholder: '' },
  { id: 'telefone', rotulo: 'TELEFONE', tipo: 'tel', placeholder: '(00) 00000-0000' },
  { id: 'cidade', rotulo: 'CIDADE', tipo: 'text', placeholder: 'Digite sua cidade' },
]

const regras = {
  nome: (v) => (v.trim().length < 3 ? 'Digite seu nome completo.' : ''),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Digite um e-mail válido.'),
  nascimento: (v) => {
    if (!v) return 'Informe sua data de nascimento.'
    const data = new Date(v)
    const hoje = new Date()
    if (data > hoje) return 'A data não pode ser no futuro.'
    if (data.getFullYear() < 1900) return 'Digite uma data válida.'
    return ''
    },
  telefone: (v) => {
    const digitos = v.replace(/\D/g, '')
    return digitos.length === 10 || digitos.length === 11 ? '' : 'Digite um telefone com DDD.'
  },
  cidade: (v) => (v.trim().length < 2 ? 'Digite sua cidade.' : ''),
  mensagem: (v) => (v.trim().length < 5 ? 'Escreva uma mensagem com pelo menos 5 caracteres.' : ''),
}

const valoresIniciais = { nome: '', email: '', nascimento: '', telefone: '', cidade: '', mensagem: '' }

function mascaraTelefone(valor) {
  const d = valor.replace(/\D/g, '').slice(0, 11)
  if (d.length > 10) return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
  if (d.length > 6) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  if (d.length > 2) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  if (d.length > 0) return `(${d}`
  return ''
}

export default function Contato() {
  const [valores, setValores] = useState(valoresIniciais)
  const [erros, setErros] = useState({})
  const [sucesso, setSucesso] = useState('')

  // some com a mensagem de sucesso depois de 5 segundos
  useEffect(() => {
    if (!sucesso) return
    const timer = setTimeout(() => setSucesso(''), 5000)
    return () => clearTimeout(timer)
  }, [sucesso])

  function aoDigitar(e) {
    const { name, value } = e.target
    const novoValor = name === 'telefone' ? mascaraTelefone(value) : value
    setValores((anterior) => ({ ...anterior, [name]: novoValor }))
    if (erros[name]) setErros((anterior) => ({ ...anterior, [name]: '' }))
  }

  function aoEnviar(e) {
    e.preventDefault()
    setSucesso('')

    const novosErros = {}
    Object.keys(regras).forEach((campo) => {
      const mensagem = regras[campo](valores[campo])
      if (mensagem) novosErros[campo] = mensagem
    })
    setErros(novosErros)

    const primeiroInvalido = Object.keys(novosErros)[0]
    if (primeiroInvalido) {
      document.getElementById(primeiroInvalido).focus()
      return
    }

    console.log('Dados do formulário:', valores)
    setSucesso(`Mensagem enviada com sucesso! Obrigado, ${valores.nome.trim().split(' ')[0]}.`)
    setValores(valoresIniciais)
  }

  function limpar() {
    setValores(valoresIniciais)
    setErros({})
    setSucesso('')
  }

  return (
    <section id="contato" className="contato py-5">
      <div className="container py-4">
        <div className="contato-card">
          <h2 className="text-center fw-bold">Feedback</h2>
          <p className="subtitulo text-center">REBOBINA</p>

          <form onSubmit={aoEnviar} noValidate>
            {campos.map((campo) => (
              <div className="campo" key={campo.id}>
                <label htmlFor={campo.id}>{campo.rotulo}</label>
                <input
                  type={campo.tipo}
                  max={campo.tipo === 'date' ? new Date().toISOString().split('T')[0] : undefined}
                  className={`form-control ${erros[campo.id] ? 'is-invalid' : ''}`}
                  id={campo.id}
                  name={campo.id}
                  placeholder={campo.placeholder}
                  value={valores[campo.id]}
                  onChange={aoDigitar}
                />
                <div className="invalid-feedback">{erros[campo.id]}</div>
              </div>
            ))}

            <div className="campo">
              <label htmlFor="mensagem">DEIXE SUA MENSAGEM</label>
              <textarea
                className={`form-control ${erros.mensagem ? 'is-invalid' : ''}`}
                id="mensagem"
                name="mensagem"
                placeholder="Digite sua mensagem..."
                value={valores.mensagem}
                onChange={aoDigitar}
              ></textarea>
              <div className="invalid-feedback">{erros.mensagem}</div>
            </div>

            <div className="d-flex gap-2 mt-4">
              <button type="submit" className="btn btn-dark px-4">ENVIAR</button>
              <button type="button" className="btn btn-outline-dark px-4" onClick={limpar}>
                LIMPAR
              </button>
            </div>

            {sucesso && (
              <div className="alert alert-success mt-3" role="alert">
                {sucesso}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}