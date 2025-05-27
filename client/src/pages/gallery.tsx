import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleries = [
    {
      title: "Shawood Homes Exteriors",
      description: "Stunning custom home designs and architectural details",
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      title: "Luxury Interiors",
      description: "Premium finishes and custom design elements",
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      title: "Red Rock Canyon Views",
      description: "Breathtaking natural landscapes from your backyard",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      title: "Community Amenities",
      description: "Guard gates, parks, and recreational facilities",
      images: [
        "https://images.unsplash.com/photo-1587174486073-ae5e5cec4540?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    }
  ];

  const allImages = galleries.flatMap(gallery => gallery.images);

  const openLightbox = (galleryIndex: number, imageIndex: number) => {
    const globalIndex = galleries.slice(0, galleryIndex).reduce((acc, gallery) => acc + gallery.images.length, 0) + imageIndex;
    setSelectedImage(globalIndex);
  };

  const closeLightbox = () => setSelectedImage(null);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % allImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + allImages.length) % allImages.length);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Shawood Homes Gallery
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Explore the beauty and elegance of luxury living in Summerlin West's 
            most exclusive guard-gated community.
          </p>
        </div>
      </section>

      {/* Gallery Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {galleries.map((gallery, galleryIndex) => (
            <div key={galleryIndex} className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">{gallery.title}</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  {gallery.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {gallery.images.map((image, imageIndex) => (
                  <div 
                    key={imageIndex}
                    className="group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => openLightbox(galleryIndex, imageIndex)}
                  >
                    <img 
                      src={image}
                      alt={`${gallery.title} ${imageIndex + 1}`}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative max-w-4xl mx-4">
            <img 
              src={allImages[selectedImage]}
              alt="Gallery image"
              className="max-w-full max-h-[80vh] object-contain"
            />
            
            {/* Close button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            
            {/* Navigation buttons */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronRight className="w-12 h-12" />
            </button>
            
            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded">
              {selectedImage + 1} / {allImages.length}
            </div>
          </div>
        </div>
      )}

      {/* Virtual Tours Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Virtual Tours Available</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience Shawood Homes from anywhere with our immersive virtual tours. 
            Walk through luxury properties and explore every detail from the comfort of your current home.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">3D Matterport Tours</h3>
              <p className="text-gray-600 mb-4">
                Immersive 3D walkthroughs of select properties with detailed floor plans and measurements.
              </p>
              <button className="btn-primary">Explore 3D Tours</button>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Drone Footage</h3>
              <p className="text-gray-600 mb-4">
                Aerial videos showcasing properties, community layout, and stunning Red Rock Canyon views.
              </p>
              <button className="btn-primary">Watch Videos</button>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Live Virtual Showings</h3>
              <p className="text-gray-600 mb-4">
                Schedule a live virtual tour with Dr. Jan Duffy for personalized property viewings.
              </p>
              <button className="btn-primary">Schedule Tour</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}