'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'

export default function EmblaSlider({ items }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  return (
    <div className="my-6">

      {/* Mobile View (Slider) */}
      <div className="relative block lg:hidden">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {items.map((item, index) => (
              <div key={index} className="flex-none min-w-[100%] p-4">
                <Link href={`/certifications/${item.slug}`}>
                  <div className=" border rounded-2xl shadow-md p-4 flex items-center gap-4">
                    <Image
                      src={item.c_image}
                      alt={item.code}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                    <div className='w-[100%]'>
                      <h3 className="text-lg font-bold text-gray-800">{item.code}</h3>
                      <p className="text-gray-600 text-sm">{item.title}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
      {
        items.length > 1 && (
          <>
            <button
          onClick={scrollPrev}
          className="absolute left-1 top-1/2 -translate-y-1/2 bg-gray-600/20 text-themewhite rounded-full p-1 z-10 -translate-x-1/2"
        >
          <GoChevronLeft size={24} />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-1 top-1/2 -translate-y-1/2 bg-gray-600/20 text-themewhite rounded-full p-1 z-10 translate-x-1/2"
        >
          <GoChevronRight size={24} />
        </button>
          </>
        )
      }
      </div>


    </div>
  )
}
