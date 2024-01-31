"use client";
import Image from "next/image";
import { FunctionComponent, useState } from "react";

interface GalleryProps {
  images: string[];
  alt: string;
}

const Gallery: FunctionComponent<GalleryProps> = ({ images, alt }) => {
  const [selectedImage, setSelectedImage] = useState<number>(0);

  return (
    <div className="product-gallery">
      <div className="selectables">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => {
              setSelectedImage(idx);
            }}
          >
            <Image src={img} alt={alt} width={80} height={80} />
          </button>
        ))}
      </div>
      <Image src={images[selectedImage]} alt={alt} width={400} height={400} />
    </div>
  );
};
export default Gallery;
