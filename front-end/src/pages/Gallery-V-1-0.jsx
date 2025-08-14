import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // All hostel photos (replace with your actual image URLs)
  const images = [
    { src: "/images/room1.jpg", alt: "Cozy private room" },
    { src: "/images/room2.jpg", alt: "Shared dormitory" },
    { src: "/images/lobby.jpg", alt: "Spacious lobby" },
    { src: "/images/kitchen.jpg", alt: "Guest kitchen" },
    { src: "/images/outdoor.jpg", alt: "Outdoor seating" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Photo Gallery</h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative cursor-pointer overflow-hidden rounded-xl shadow-lg group"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images}
        plugins={[Thumbnails]}
      />
    </div>
  );
};

export default Gallery;
