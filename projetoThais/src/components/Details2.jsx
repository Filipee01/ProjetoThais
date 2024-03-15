import Dev from "../assets/images/dev.png"
import "./Details2.css"

export default function Detail2() {

    return(
      <section className="section3">
      <div className="carrers2">
        <h2>Vamos conhecer um pouco das diversas<span>carreiras de um cientista da computação</span></h2>
      </div>
      <div className="wrapp-computerImg2">
          <img src={Dev} alt="computer" />
      </div>
    </section>
    )

}