import TimeLine from "../assets/images/timeLine1.png"

export default function Main() {

    return(
        <main id="top-button">
          <div className="timeLine2">
            <img src={TimeLine} alt="" />
          </div>
            <h3 id="timeLine" className="timeLineh"><span>Linha do Tempo</span></h3>
          <hr />
          <section className="sections section2">
            <h2 id="about">Sobre</h2>
            <div className="wrapp-contain">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit assumenda, culpa maxime earum corporis in inventore officiis cumque modi nobis at, quo accusamus voluptas praesentium esse. Optio, recusandae! Reprehenderit, tempore!</p>
            </div>
          </section>
    </main>

    )

}
