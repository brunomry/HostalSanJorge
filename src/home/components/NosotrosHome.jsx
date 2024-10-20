import salon from "../../assets/IMG/Home/desayunador.webp";
import { MdArrowForwardIos } from "react-icons/md";

function NosotrosHome() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[250px] w-[100%] mt-[450px]">
        <div className="bg-slate-700 w-[100%] min-h-[200px] text-[#fff] flex gap-24 py-20">
          <div className="w-[40%] flex flex-col gap-16 p-20">
            <div>
              <h2 className="lg:text-[45px]">Sobre Nosotros</h2>
              <p className="xl:text-[16px] font-normal text-gray-300">
                Con más de 15 años brindando alojamiento a nuestros huéspedes,
                en Hostal San Jorge le ofrecemos un lugar cómodo, tranquilo e
                ideal para descansar. Permítanos ser su hogar lejos de casa y
                disfrute de una experiencia agradable y memorable mientras
                explora los encantos de la hermosa ciudad de Cafayate en la
                provincia de Salta, noroeste argentino.
              </p>
            </div>

            <div className="w-[100%] flex items-center">
              <button className="bg-emerald-400 flex items-center gap-5 px-15 p-5 xl:w-[25%] xl:text-[16px]">
                <span>Leer más</span> <MdArrowForwardIos />
              </button>
            </div>
          </div>
          <div className=" w-[50%]">
          <img src={salon} alt="" className="imgSalon w-[90%]" />
          </div>
         
        </div>
      </section>
  )
}

export default NosotrosHome