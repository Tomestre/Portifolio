import './App.css';
import cerebro from './assets/cerebro.png'
import { AiOutlineWhatsApp, AiOutlineMobile, AiOutlineGithub } from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";



function App() {
  
  const itensProjeto = [
    {
    titulo: 'Projeto 1',
    img: <img src={require('./assets/projetos/appClima.gif')} className='imgProjeto'/>,
    detalhes:'descrição do projeto',
    },
    {
      titulo: 'Projeto 2',
      img: <img src={require('./assets/projetos/appFilmes.gif')} className='imgProjeto'/>,
      detalhes:'descrição do projeto',
    },
      {
        titulo: 'Projeto 3',
        img: <img src={require('./assets/projetos/biscoito.gif')} className='imgProjeto'/>,
        detalhes:'descrição do projeto',
        }
        ,
      {
        titulo: 'Projeto 4',
        img: <img src={require('./assets/projetos/appFinanças.gif')} className='imgProjeto'/>,
        detalhes:'descrição do projeto',
        }
        ,
      {
        titulo: 'Projeto 5',
        img: <img src={require('./assets/projetos/conversordemoeda.gif')} className='imgProjeto'/>,
        detalhes:'descrição do projeto',
        }
        ,
      {
        titulo: 'Projeto 6',
        img: <img src={require('./assets/projetos/cronometro.gif')} className='imgProjeto'/>,
        detalhes:'descrição do projeto',
        }
        ,
      {
        titulo: 'Projeto 7',
        img: <img src={require('./assets/projetos/todo.gif')} className='imgProjeto'/>,
        detalhes:'descrição do projeto',
        }
       
  ]
  const coder = '<Coder>'
  
  return (
    

    <header className='app'>
      
      <nav className='menu'>
        <h2 className='assinatura'>Gabriel Tomé</h2>
      

      <ul className='smoothScroll'>
        <li><Link to='sessao1' offset={-55} spy={true}
    smooth={true}  duration={500}>O que eu faço?</Link></li>
        <li><Link to='sessao2' offset={-55} spy={true}
    smooth={true}  duration={500}>Projetos</Link></li>
        <li><Link to='sessao3' spy={true}
    smooth={true}  duration={500}>Quem sou eu?</Link></li>
        <li><Link to='sessao4' spy={true}
    smooth={true}  duration={500}>Fale comigo</Link></li>
      </ul>
      </nav>

      <div className='sessao1'>
      <h1>O que eu faço?</h1>
      <div className='animation1'>
        <img src={cerebro} className='cerebro'/>
        <div className='buttons'>
        <button className='coder'><p>{coder}</p></button>
         <button className='designer'><p>Designer</p></button>
        </div>
      </div>
      </div>

      <div className='sessao2'>
        <h1>Projetos</h1>
        <div className='containerProjetos'>
          {itensProjeto.map(projeto => {
            return(
          
          <div className='projeto'>
            
            {projeto.img}
            <h3>{projeto.titulo}</h3>
            <h4>{projeto.detalhes}</h4>
          </div>)
})}
        </div>

      </div>

      <div className='sessao3'>
        <h1>Quem sou eu?</h1>
        <p>Meu nome é Gabriel Tomé sou um desenvolvedor junior, buscando minha primeira oportunidade para trabalhar na área.<br></br><br></br>

Fui professor de reforço por 8 anos, e por isso, além de ter facilidade em aprender, eu conheço tecnicas de estudo muito eficientes.<br></br><br></br>

Isso me permitiu aprender sozinho,todas as linguagens que domino.<br></br><br></br>

Acredito que o trabalho duro é recompensado e que a excelência é um habito.</p>

        <div>
          <img/>
        </div>
      </div>

      

      <div className='sessao4'>
        <h1>Fale Comigo</h1>
        <a href='https://github.com/Tomestre'><AiOutlineGithub/> Tomestre </a>
        <p><AiOutlineMobile/> (61) 99371-7359</p>

        <button className='whatsApp' onClick={()=> window.open('https://wa.me/5561993717359')} >
           
          <p><AiOutlineWhatsApp/>  WhatsApp</p>
        </button>
      </div>

    </header>


     
    

   
  )

}

export default App;
