import SectionTitle from "./SectionTitle"

const Map = () => {
  return (
    <section>
      <div className="text-center my-16">
        <SectionTitle title="Llegar es el primer paso" subtitle="Aquí comienza tu historia en tinta, encuentra nuestra ubicación." />
      </div>
      <div>
        <iframe title="ubicacion" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7994849265147!2d-78.48996842420621!3d-0.1760551998222031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59b289faa2233%3A0xa6d58710a65ab31!2sLa%20Catedral%20Tattoo%20Studio!5e0!3m2!1ses-419!2sec!4v1756933153803!5m2!1ses-419!2sec" width="600" height="450" className="w-[100%]" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  )
}

export default Map