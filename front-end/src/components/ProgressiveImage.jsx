// ProgressiveImage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ProgressiveImage({ src, placeholder, alt, onClick }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl cursor-pointer"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      onClick={onClick}
    >
      {/* Blurred placeholder */}
      <img
        src={placeholder}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover filter blur-lg scale-105"
        style={{ transition: "opacity 0.3s ease" }}
      />

      {/* Full image */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
        loading="lazy"
      />
    </motion.div>
  );
}