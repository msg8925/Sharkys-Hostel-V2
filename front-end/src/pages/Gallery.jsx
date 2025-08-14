import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useInView } from "react-intersection-observer";
// import ProgressiveImage from "./ProgressiveImage";
import ProgressiveImage from "../components/ProgressiveImage";

// http://127.0.0.1:8000/storage/room_images/exterior.jpg

const images = [
    {
        src: "http://127.0.0.1:8000/storage/room_images/exterior.jpg",
        placeholder: "/images/room1-small.jpg",
        alt: "Room 1"
    },
    {
        src: "http://127.0.0.1:8000/storage/room_images/exterior.jpg",
        placeholder: "/images/room2-small.jpg",
        alt: "Room 2"
    },
//   {
//     src: "/images/room1.jpg",
//     placeholder: "/images/room1-small.jpg",
//     alt: "Room 1"
//   },
//   {
//     src: "/images/room2.jpg",
//     placeholder: "/images/room2-small.jpg",
//     alt: "Room 2"
//   },
  // ... add all hostel photos here
];

export default function HostelGallery() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => {
        const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

        return (
          <div ref={ref} key={index}>
            {inView && (
              <ProgressiveImage
                src={image.src}
                placeholder={image.placeholder}
                alt={image.alt}
                onClick={() => setLightboxIndex(index)}
              />
            )}
          </div>
        );
      })}

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={images.map((img) => ({ src: img.src }))}
      />
    </div>
  );
}