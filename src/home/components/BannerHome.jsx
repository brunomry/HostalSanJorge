import frente from "../../assets/IMG/frente.webp";
import { Link } from "react-router-dom";

function BannerHome() {
  return (
    <div>
      <section className="bannerHome">
        <div>
          <img src={frente} alt="" />
        </div>
        <div className="bannerHome__description flex flex-col gap-3  bg-[rgba(43,69,94,0.8)] p-3 md:p-10 lg:p-20 max-w-[950px] min-h-[100px]">
          <small className="hidden md:block text-[#fff] mb-0">Provincia de Salta, Noroeste Argentino</small>
        <h1 className="md:block text-[20px] lg:text-[45px] text-[#fff] mt-0 font-bold">Hostal San Jorge Cafayate</h1>
        <p className="text-[18px] text-[#fff] lg:text-[20px] font-normal">Tu lugar ideal para descansar y tu mejor experiencia la tendrás con nosotros.</p>
        <Link to={"/habitaciones"} class="p-2 md:p-4 w-[100%] text-[1rem] bg-amber-400  md:mt-8 text-[#0e2541] md:max-w-[220px] lg:hover:bg-gray-950 lg:hover:text-[#fff] ">
            NUESTRAS HABITACIONES     
        </Link>
        </div>        
      </section>
    </div>
  );
}

export default BannerHome;
