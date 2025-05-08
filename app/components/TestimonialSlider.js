// components/TestimonialSlider.jsx
'use client';

// import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const testimonials = [
  {
    image: '/clientreviews/clientreview1.webp',
    name: 'clientreview1',
  },
  {
    image: '/clientreviews/clientreview2.webp',
    name: 'clientreview2',
  },
  {
    image: '/clientreviews/clientreview3.webp',
    name: 'clientreview3',
  },
  {
    image: '/clientreviews/clientreview4.webp',
    name: 'clientreview4',
  },
  {
    image: '/clientreviews/clientreview5.webp',
    name: 'clientreview5',
  },
  {
    image: '/clientreviews/clientreview6.webp',
    name: 'clientreview6',
  }
];

export default function TestimonialSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  return (
    <div className="overflow-hidden  pb-6 mb-16">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((item, index) => (
            <div
              className="min-w-full px-4 flex justify-center items-center"
              key={index}
            >
              <div className="bg-white rounded-xl shadow-lg p-2 max-w-md">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={500}
                  height={500}
                  className="mx-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
