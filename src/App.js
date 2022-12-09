import './App.css';
import cerebro from './assets/cerebro.png'




function App() {
  
  const itensProjeto = [
    {
    titulo: 'Projeto 1',
    img: <img/>,
    detalhes:'descrição do projeto',
    },
    {
      titulo: 'Projeto 2',
      img: <img/>,
      detalhes:'descrição do projeto',
      },
      {
        titulo: 'Projeto 3',
        img: <img/>,
        detalhes:'descrição do projeto',
        }
  ]
  const coder = '<Coder>'
  
  return (
    

    <header className='app'>
      
      <nav className='menu'>
        <h2 className='assinatura'>Gabriel Tomé</h2>
      

      <ul className='smoothScroll'>
        <li>O que eu faço?</li>
        <li>Projetos</li>
        <li>Quem sou eu?</li>
        <li>Fale comigo</li>
      </ul>
      </nav>

      <div className='sessao1'>
      <h1>O que eu faço?</h1>
      <div className='animation1'>
        <img src={cerebro} className='cerebro'/>
        <div className='buttons'>
        <button className='coder'>{coder}</button>
         <button className='designer'>Designer</button>
        </div>
      </div>
      </div>

      <div className='sessao2'>
        <h1>Projetos</h1>
        <div className='projetos'>
          {itensProjeto.map(projeto => <h3>{projeto.titulo}</h3>)}
        </div>

      </div>

      <div>
        <h1>Quem sou eu?</h1>
        <p>Meu nome é Gabriel Tomé sou um desenvolvedor junior, buscando minha primeira oportunidade para trabalhar na área.

Fui professor de reforço por 8 anos, e por isso, além de ter facilidade em aprender, eu conheço tecnicas de estudo muito eficientes.

Isso me permitiu aprender sozinho,todas as linguagens que domino.

Acredito que o trabalho duro é recompensado e que a excelência é um habito.</p>
      </div>

      <div>
        <img/>
      </div>

      <div>
        <h1>Fale Comigo</h1>
      </div>

    </header>


     
    

   
  )

}

export default App;
