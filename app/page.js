
export default function Home() {
  const leituras = [
    {
      nome: "Carta do Dia",
      descricao: "Uma mensagem simbólica para refletir sobre o seu dia.",
      preco: "R$ 15,00",
    },
    {
      nome: "Caminhos e Escolhas",
      descricao: "Uma leitura para explorar possibilidades e perspectivas.",
      preco: "R$ 30,00",
    },
    {
      nome: "Leitura Completa",
      descricao: "Uma leitura mais ampla para momentos de reflexão.",
      preco: "R$ 50,00",
    },
  ];

  return (
    <main>
      <header className="topo">
        <a className="logo" href="#">Oráculo da Lua</a>
        <nav>
          <a href="#inicio">Início</a>
          <a href="#leituras">Leituras</a>
          <a href="#sobre">Sobre</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <p className="subtitulo">UM MOMENTO PARA VOCÊ</p>
        <h1>Oráculo da Lua</h1>
        <p>
          Entre os mistérios das cartas, descubra novos caminhos.
        </p>
        <a className="botao" href="#leituras">
          Conheça as leituras
        </a>
      </section>

      <section className="leituras" id="leituras">
        <p className="subtitulo">DESCUBRA AS POSSIBILIDADES</p>
        <h2>Nossas leituras</h2>
        <div className="cards">
          {leituras.map((leitura) => (
            <article className="card" key={leitura.nome}>
              <h3>{leitura.nome}</h3>
              <p>{leitura.descricao}</p>
              <strong>{leitura.preco}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="sobre" id="sobre">
        <h2>Um espaço de reflexão</h2>
        <p>
          As cartas são um convite ao autoconhecimento e à reflexão.
          As leituras não determinam o futuro nem substituem decisões pessoais.
        </p>
      </section>

      <footer>
        <p>Oráculo da Lua · Todos os direitos reservados</p>
      </footer>
    </main>
  );
}
