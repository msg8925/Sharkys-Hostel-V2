import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const images = [
  { src: "http://127.0.0.1:8000/storage/room_images/exterior.jpg", alt: "Exterior" },
  { src: "/images/room1.jpg", alt: "Private Room" },
  { src: "/images/room2.jpg", alt: "Dorm Room" },
  { src: "/images/room3.jpg", alt: "Common Area" },
  { src: "/images/room4.jpg", alt: "Reception" },
  { src: "/images/room5.jpg", alt: "Garden" },
  // Add as many hostel photos as needed
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Hostel Gallery</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <LazyImage
            key={i}
            img={img}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          />
        ))}
      </div>

      <Lightbox
        open={open}
        index={index}
        close={() => setOpen(false)}
        slides={images.map((img) => ({ src: img.src }))}
      />
    </div>
  );
}

// Lazy-loading image component with animation
function LazyImage({ img, onClick }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // load only once
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="cursor-pointer overflow-hidden rounded-lg shadow-md">
      {inView && (
        <motion.img
          src={img.src}
          alt={img.alt}
          onClick={onClick}
          loading="lazy"
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </div>
  );
}