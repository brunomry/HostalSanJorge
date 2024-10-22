
const CarruselDetalleHabitacion = ({habitacion}) => {
  return (
    <div className="border bg-gray-100 flex justify-center">
    <div
      id="default-carousel"
      class="relative w-full"
      data-carousel="static"
    >
      <div class="relative h-56 overflow-hidden flex justify-center rounded-lg md:h-96">
        <div
          class="h-[100%] md:h-[400px] hidden duration-0 ease-in"
          data-carousel-item
        >
          <img
            src={habitacion.img1}
            class=" absolute block object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-[100%] "
            alt="..."
          />
        </div>
        <div
          class="h-[100%] md:h-[400px] hidden duration-0 ease-in"
          data-carousel-item
        >
          <img
            src={habitacion.img2}
            class=" absolute block object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-[100%] "
            alt="..."
          />
        </div>
        <div
          class="h-[100%] md:h-[400px] hidden duration-0 ease-in"
          data-carousel-item
        >
          <img
            src={habitacion.img3}
            class=" absolute block object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-[100%] "
            alt="..."
          />
        </div>
      </div>
      <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-gray-800"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
      </div>
      <button
        type="button"
        class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none hover:bg-[rgba(172,171,171,0.1)]"
        data-carousel-prev
      >
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800  group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none hover:bg-[rgba(172,171,171,0.1)]"
        data-carousel-next
      >
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800  group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  </div>
  )
}

export default CarruselDetalleHabitacion