import { Helmet } from "react-helmet";

function Faqs() {
  return (
    <div>
        <Helmet>
        <meta
      name="description"
      content="Aquí encontrarás respuesta a las preguntas más frecuentes sobre tu estadía. Descubre nuestras comodidades, servicios y cómo realizar tu reserva."
    />
    <meta
      name="keywords"
      content="Hostal San Jorge, hostal san jorge cafayate, san jorge cafayate, preguntas frecuentes, check-In, check-Out, desayuno incluido, formas de pago, wi-fi, habitaciones privadas, reserva, respuestas"
    />
    <meta name="author" content="Bruno Madozzo Romay" />
    <meta name="robots" content="index, follow" />
    <link rel="icon" href="../IMG/favicon.png" />
    <link rel="apple-touch-icon" href="../IMG/favicon.png" />
    <meta
      property="og:title"
      content="Preguntas Frecuentes | Hostal San Jorge - Alojamiento"
    />
    <meta
      property="og:description"
      content="Aquí encontrarás respuesta a las preguntas más frecuentes sobre tu estadía. Descubre nuestras comodidades, servicios y cómo realizar tu reserva."
    />
    <meta
      property="og:image"
      content="https://hostalsanjorgecafayate.netlify.app/IMG/Galeria/antiguedades2.webp"
    />
    <meta
      property="og:url"
      content="https://hostalsanjorgecafayate.netlify.app/PAGES/preguntasFrecuentes"
    />
    <title>Preguntas Frecuentes | Hostal San Jorge - Alojamiento</title>
        </Helmet>
 {/* <section>
        <div class="bannerImgFaqs">
          <img
            src="../IMG/Galeria/antiguedades2.webp"
            alt="antiguedades"
            title="antiguedades"
          />
        </div>
      </section>
      <section class="container py-5">
        <div class="text-center mb-3 containerQuestions mx-auto">
          <h1 class="mb-3 fw-bold">Preguntas Frecuentes</h1>
          <p class="lead">
            Si tu pregunta no se encuentra aquí, no te preocupes. Puedes
            escribirnos o llamarnos y estaremos encantados en ayudarte a
            responder tus dudas.
          </p>
          <div
            class="d-flex flex-column align-items-center flex-md-row justify-content-md-center gap-2 gap-md-5"
          >
            <div>
              <i class="fa-brands fa-whatsapp me-2 fs-2 text-success"></i
              ><span class="fs-5 text-success">WhatsApp</span>
              <p class="lead mb-0">+54 9 387 6843082</p>
            </div>
            <div>
              <i class="fa-solid fa-phone me-2 fs-2 text-dark"></i>
              <span class="fs-5">Teléfono</span>
              <p class="lead mb-0">+54 9 3868 422388</p>
            </div>
          </div>
        </div>
        <article class="d-flex justify-content-center pt-3">
          <div class="accordion" id="accordionQuestions">
            <div class="accordion-item my-3 border border-secondary rounded-1">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed fs-5"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  <i class="fa-solid fa-circle-question fs-2 me-3"></i>
                  <span class="lead"
                    >¿A qué hora puedo realizar el Check-In?</span
                  >
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionQuestions"
              >
                <div class="accordion-body">
                  <p class="lead">
                    El Check-In está disponible a partir de las 02:00 pm.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item my-3 border border-secondary rounded-1">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed fs-5"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <i class="fa-solid fa-circle-question fs-2 me-3"></i
                  ><span class="lead"
                    >¿A qué hora puedo realizar el Check-Out?</span
                  >
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionQuestions"
              >
                <div class="accordion-body">
                  <p class="lead">El Ckeck-Out es hasta las 10:00 am.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item my-3 border border-secondary rounded-1">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed fs-5"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <i class="fa-solid fa-circle-question fs-2 me-3"></i
                  ><span class="lead"
                    >¿El Desayuno está incluido en la Estadía?</span
                  >
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionQuestions"
              >
                <div class="accordion-body">
                  <p class="lead">
                    ¡Sí, claro que sí! En nuestro hostal, ofrecemos servicio de
                    desayuno cada mañana en el horario de las 08:15 a 09:45 am.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item my-3 border border-secondary rounded-1">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed fw-medium fs-5"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <i class="fa-solid fa-circle-question fs-2 me-3"></i
                  ><span class="lead">¿Cuáles son las Formas de pago?</span>
                </button>
              </h2>
              <div
                id="collapseFour"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionQuestions"
              >
                <div class="accordion-body">
                  <ul class="lead list-unstyled">
                    <li>
                      <i class="fa-solid fa-check fs-2 text-success me-2"></i>Pago
                      en efectivo.
                    </li>
                    <li>
                      <i class="fa-solid fa-check fs-2 text-success me-2"></i>Transferencias bancarias.
                    </li>
                    <li>
                      <i class="fa-solid fa-check fs-2 text-success me-2"></i>Link
                      de la app MercadoPago para que puedas pagar con tu tarjeta
                      de débito o crédito. (Esta operación tiene un 10% de
                      recargo)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item my-3 border border-secondary rounded-1">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed fw-medium fs-5"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  <i class="fa-solid fa-circle-question fs-2 me-3"></i>
                  <span class="lead">¿El Hostal cuenta con Wi-Fi?</span>
                </button>
              </h2>
              <div
                id="collapseFive"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionQuestions"
              >
                <div class="accordion-body">
                  <p class="lead">
                    Sí, contamos con conexión Wi-Fi y puedes conectarte desde
                    cualquier lugar del hostal, ya sea en tu habitación o en
                    áreas comunes.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item my-3 border border-secondary rounded-1">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed fw-medium fs-5"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFiveTeen"
                  aria-expanded="false"
                  aria-controls="collapseFiveTeen"
                >
                  <i class="fa-solid fa-circle-question fs-2 me-3"></i
                  ><span class="lead"
                    >¿Las Habitaciones son Privadas o Compartidas?</span
                  >
                </button>
              </h2>
              <div
                id="collapseFiveTeen"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionQuestions"
              >
                <div class="accordion-body">
                  <p class="lead">
                    En nuestro hostal, todas las habitaciones son privadas
                    garantizando la mayor privacidad para nuestros huéspedes.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item my-3 border border-secondary rounded-1">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed fw-medium fs-5"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  <i class="fa-solid fa-circle-question fs-2 me-3"></i
                  ><span class="lead"
                    >¿Las Habitaciones cuentan con Aire Acondicionado?</span
                  >
                </button>
              </h2>
              <div
                id="collapseSix"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionQuestions"
              >
                <div class="accordion-body">
                  <p class="lead">
                    Actualmente tenemos dos habitaciones dobles con aire
                    acondicionado para brindarle una estancia aún más cómoda.
                    Las demás habitaciones aún no disponen de este servicio.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item my-3 border border-secondary rounded-1">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed fw-medium fs-5"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  <i class="fa-solid fa-circle-question fs-2 me-3"></i
                  ><span class="lead"
                    >¿Las Habitaciones cuentan con Televisión?</span
                  >
                </button>
              </h2>
              <div
                id="collapseSeven"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionQuestions"
              >
                <div class="accordion-body">
                  <p class="lead">
                    En nuestro hostal, nos enfocamos en brindar un espacio
                    tranquilo e ideal para descansar, por lo que actualmente no
                    ofrecemos servicio de televisión en ninguna de nuestras
                    habitaciones o en áreas comunes.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item my-3 border border-secondary rounded-1">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed fw-medium fs-5"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEight"
                  aria-expanded="false"
                  aria-controls="collapseEight"
                >
                  <i class="fa-solid fa-circle-question fs-2 me-3"></i
                  ><span class="lead"
                    >¿Las Habitaciones cuentan con Baño privado?</span
                  >
                </button>
              </h2>
              <div
                id="collapseEight"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionQuestions"
              >
                <div class="accordion-body">
                  <p class="lead">
                    Sí, todas nuestras habitaciones disponen de baño privado.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item my-3 border border-secondary rounded-1">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed fs-5"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseNine"
                  aria-expanded="false"
                  aria-controls="collapseNine"
                >
                  <i class="fa-solid fa-circle-question fs-2 me-3"></i
                  ><span class="lead"
                    >¿El Hostal cuenta con Estacionamiento?</span
                  >
                </button>
              </h2>
              <div
                id="collapseNine"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionQuestions"
              >
                <div class="accordion-body">
                  <p class="lead">
                    En este momento, nuestro hostal no dispone de
                    estacionamiento propio.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item my-3 border border-secondary rounded-1">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed fw-medium fs-5"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTen"
                  aria-expanded="false"
                  aria-controls="collapseTen"
                >
                  <i class="fa-solid fa-circle-question fs-2 me-3"></i
                  ><span class="lead">¿El Hostal cuenta con Piscina?</span>
                </button>
              </h2>
              <div
                id="collapseTen"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionQuestions"
              >
                <div class="accordion-body">
                  <p class="lead">Nuestro hostal no cuenta con piscina.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item my-3 border border-secondary rounded-1">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed fw-medium fs-5"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEleven"
                  aria-expanded="false"
                  aria-controls="collapseEleven"
                >
                  <i class="fa-solid fa-circle-question fs-2 me-3"></i
                  ><span class="lead">¿Se aceptan mascotas?</span>
                </button>
              </h2>
              <div
                id="collapseEleven"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionQuestions"
              >
                <div class="accordion-body">
                  <p class="lead">No se aceptan mascotas por el momento.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item my-3 border border-secondary rounded-1">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed fs-5"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsethirteen"
                  aria-expanded="false"
                  aria-controls="collapsethirteen"
                >
                  <i class="fa-solid fa-circle-question fs-2 me-3"></i
                  ><span class="lead">¿Cómo puedo realizar una reserva?</span>
                </button>
              </h2>
              <div
                id="collapsethirteen"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionQuestions"
              >
                <div class="accordion-body lead">
                  <p>
                    <span>
                      Puedes realizar tu reserva de dos maneras: a través de
                      WhatsApp o llamando a nuestro teléfono fijo. Para
                      garantizar tu estadía, solicitamos un pago inicial del 50%
                      como seña. Puedes realizar esta transacción a través de
                      las
                    </span>
                    <a
                      class="border-0 fw-medium text-secondary linkModalPaymentMethods"
                      data-bs-target="#modalPaymentMethods"
                      data-bs-toggle="modal"
                      >formas de pago</a
                    >
                    <span> habilitadas. </span>
                  </p>
                  <p>
                    En caso de llegar más tarde de lo previsto, por favor
                    comunícate con nosotros para informarnos. Esto nos ayuda a
                    asegurarnos de tu llegada. Apreciamos tu colaboración,
                    especialmente en períodos de alta demanda.
                  </p>
                  <p>
                    Si tienes alguna pregunta adicional, estamos disponibles
                    para ayudarte.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section> */}
    </div>
  )
}

export default Faqs