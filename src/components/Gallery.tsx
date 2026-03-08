const galleryImages = [
  {
    url: "/assets/dbb72e773d50dc8fe7b483bd97200ade80613d28.png",
    alt: "Precision machined aerospace bracket",
  },
  {
    url: "/assets/975f7e5a6f4a3a9d57d89074890e552ea75a2c1a.png",
    alt: "CNC machined threaded shaft component",
  },
  {
    url: "/assets/a8e8e9a0072478ad9238d8c4dad6406cb4a944a3.png",
    alt: "Custom metal bracket with mounting holes",
  },
  {
    url: "/assets/c6b03f6a41805f17037fce593f81fac664910cde.png",
    alt: "Precision threaded spindle component",
  },
  {
    url: "/assets/ae94597534e4748a6db29d32abadf63f90848517.png",
    alt: "Complex machined circular component",
  },
  {
    url: "/assets/6574e72f4dbce096d64aa637eca5a23e3595c0aa.png",
    alt: "Gold anodized precision mounting bracket",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore examples of our precision-manufactured components across
            various industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
