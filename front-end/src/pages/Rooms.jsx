import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";

// Example images – replace with your real hostel images
const galleryImages = [
  {
    src: "http://127.0.0.1:8000/storage/room_images/dorm1.jpg",
    blur: "/images/rooms/deluxe-room-blur.jpg",
    title: "Deluxe Room",
  },
  {
    src: "/images/rooms/deluxe-room.jpg",
    blur: "/images/rooms/deluxe-room-blur.jpg",
    title: "Deluxe Room",
  },
  {
    src: "/images/rooms/dorm-bed.jpg",
    blur: "/images/rooms/dorm-bed-blur.jpg",
    title: "Dorm Bed",
  },
  {
    src: "/images/rooms/family-suite.jpg",
    blur: "/images/rooms/family-suite-blur.jpg",
    title: "Family Suite",
  },
  {
    src: "/images/rooms/seaview.jpg",
    blur: "/images/rooms/seaview-blur.jpg",
    title: "Sea View Room",
  },
];

export default function Rooms() {
  const [index, setIndex] = useState(-1);
  const [loaded, setLoaded] = useState({});

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Rooms</h1>

      {/* Gallery Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((img, i) => (
          <motion.div
            key={i}
            className="cursor-pointer relative overflow-hidden rounded-2xl shadow-lg group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            onClick={() => setIndex(i)}
          >
            {/* Blurred placeholder */}
            <img
              src={img.blur}
              alt={img.title}
              className={`absolute inset-0 w-full h-full object-cover blur-lg scale-105 transition-opacity duration-500 ${
                loaded[i] ? "opacity-0" : "opacity-100"
              }`}
            />
            {/* Real image */}
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              onLoad={() => setLoaded((prev) => ({ ...prev, [i]: true }))}
            />
            {/* Title overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-40 text-white text-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity">
              {img.title}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={galleryImages.map((img) => ({ src: img.src }))}
      />
    </div>
  );
}