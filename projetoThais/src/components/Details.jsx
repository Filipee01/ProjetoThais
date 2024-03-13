import Computer from "../assets/images/computer.png"

export default function Datails () {

    return(
        
        <section className="sections section1">
        <div>
          <h2>Vamos conhecer um
            pouco da <span>história da computação </span></h2>
        </div>
        <div className="wrapp-computerImg">
            <img src={Computer} alt="computer" />
        </div>
      </section>
    )


}