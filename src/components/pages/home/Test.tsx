export function Hero() {
  return (
    <section className="relative  isolate  w-full">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff4d6d] to-[#ff85a1] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -bottom-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-bottom-80"
        >
          <div
            style={{
              clipPath:
                "polygon(0% 80%, 15% 85%, 35% 90%, 55% 92%, 75% 88%, 100% 80%, 100% 100%, 0% 100%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[0deg] bg-gradient-to-b from-[#ff3b5c] to-[#ff85a1] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
      <div className=" mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Content */}
        <div className="flex flex-col text-left font-sora justify-center">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            We’re changing <br /> the way people <br /> connect
          </h1>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit.
            Et labore commodo nulla aliqua proident mollit ullamco exercitation tempor.
          </p>
        </div>

        {/* Right Image Grid */}
        <div className="relative grid grid-cols-2 gap-6">
          <div className="space-y-6">
            <img
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
              alt="Person 1"
              className="rounded-xl shadow-lg"
            />
            <img
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
              alt="Person 2"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="space-y-6 pt-12">
            <img
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
              alt="Person 3"
              className="rounded-xl shadow-lg"
            />
            <img
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
              alt="Person 4"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
