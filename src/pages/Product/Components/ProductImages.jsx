import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

export function ProductImages({ images }) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );
  return (
    <figure className='flex flex-col gap-4 lg:w-1/2 lg:flex-row'>
      {/* Thumbnails (ซ้าย) */}
      {/* <div className='hidden w-1/5 flex-col space-y-4 lg:flex'>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className='h-full w-full cursor-pointer rounded-lg border bg-[#F7F5F7]'
          />
        ))}
      </div> */}

      {/* Main Carousel (ขวา) */}
      <div className='w-full'>
        <Carousel
          plugins={[plugin.current]}
          className='w-full'
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {images.map((img, index) => (
              <CarouselItem key={index}>
                <img
                  src={img}
                  alt={`Main Image ${index + 1}`}
                  className='h-auto w-full rounded-lg bg-[#F7F5F7] object-cover shadow-lg'
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
    </figure>
  );
}
