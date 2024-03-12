
export default function Main() {

    return(
    
        <main id="top-button">
          <section className="sections section1">
            <div className="wrapp-content">
              <h2>Olá, me chamo <span>Luiz Filipe</span></h2>
              <h3 className="text-information">Estudante de Ciência da Computação - CI UFPB</h3>
              <a id="cv" href="https://drive.google.com/u/2/uc?id=15yTE5lEgVNhJyRmklS0zcFzTf4nF3KEx&export=download" target="_blank">Baixar CV</a>
            </div>
          </section>
          <section className="sections section2">
            <h2 id="about">Sobre</h2>
            <div className="wrapp-contain">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit assumenda, culpa maxime earum corporis in inventore officiis cumque modi nobis at, quo accusamus voluptas praesentium esse. Optio, recusandae! Reprehenderit, tempore!</p>
            </div>
          </section>
            <section className="section3">
              <h2 id="pro">Projetos</h2>
              <div className="projects-git">
                <a href="https://filipe-devv.vercel.app/" target="_blank"><img src=""/>Portfólio</a>
                <a href="https://desafio-filipee01.vercel.app/" target="_blank"><img src="" alt="crud"/>Formulário dinâmico(CRUD)</a>
              </div>
              <div className="projects-git">
                <a href="https://filipee01.github.io/Mude-sua-cor-de-fundo-/" target="_blank"><img src="" alt="colors"/>Change colors</a>
                <a href="https://filipee01.github.io/pokedex/" target="_blank"><img src="" alt="pokedex"/>Pokedex</a>
              </div>
              <div className="projects-git">
                <a href="https://filipee01.github.io/linktree1/" target="_blank" ><img src="" alt="linktree"/>Linktree</a>
                <a href="https://filipee01.github.io/PortifoliodaNutri/" target="_blank" ><img src="" alt="eloNutri"/>Portifólio Nutri</a>
              </div>
              <div className="projects-git">
                <a href="#" ><img src="" alt="coming"/>Em breve...</a>
                <a href="#" ><img src="" alt="coming"/>Em breve...</a>
              </div>
            </section>
        <button id="top-buttonJs" className="">
          <a href="#top-button"><img src="" alt="seta"/></a></button>
    </main>
            
   
    

    )

}
