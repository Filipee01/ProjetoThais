import Computer from "../assets/images/computer.png"

export default function Datails () {

    return(
        
        <section className="sections section1">
        <div>
          <h2>Vamos conhecer um
            pouco da <span>história da computação </span></h2>
          {/* <a id="cv" href="https://drive.google.com/u/2/uc?id=15yTE5lEgVNhJyRmklS0zcFzTf4nF3KEx&export=download" target="_blank">Baixar CV</a> */}
        </div>
        <div className="wrapp-computerImg">
            <img src={Computer} alt="computer" />
        </div>
      </section>
    )


}