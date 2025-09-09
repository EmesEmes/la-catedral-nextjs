const Gallery = () => {
  return (
    <section id="gallery" className="max-w-[1200px] mx-auto">
      <div>
        <h2 className="text-center my-20 text-4xl">Estilos</h2>

        <div className="grid grid-cols-2 gap-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="bg-sky-700 ">
            <img
              src="/images/tattoos/1.webp"
              alt="imagen galeria"
              className=" hover:scale-[0.98] transition duration-700 ease-in-out "
            />
          </div>
          <div className="bg-sky-700 ">
            <img
              src="/images/tattoos/1.webp"
              alt="imagen galeria"
              className=" hover:scale-[0.98] transition duration-700 ease-in-out "
            />
          </div>
          <div className="bg-sky-700 ">
            <img
              src="/images/tattoos/1.webp"
              alt="imagen galeria"
              className=" hover:scale-[0.98] transition duration-700 ease-in-out "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
