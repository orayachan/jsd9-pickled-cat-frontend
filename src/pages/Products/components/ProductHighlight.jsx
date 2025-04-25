import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export function ProductHighlight() {
  return (
    <div className='flex flex-col content-center-safe justify-center mx-auto max-w-screen-2xl'>
      <h2
        id='highlight'
        className='text-primary-700 text-center font-bold text-2xl py-4'
      >
        สินค้าขายดี
      </h2>
      <section className='px-8'>
        <Carousel className='w-full'>
          <CarouselContent className='-ml-1'>
            {Array.from({ length: 6 }).map((_, index) => (
              <CarouselItem
                key={index}
                className='pl-1 md:basis-1/2 lg:basis-1/3'
              >
                <div className='p-1'>
                  <Card>
                    <CardContent className='flex flex-col aspect-square items-center justify-center p-6 h-80 bg-primary-50'>
                      <img src={`@/error/graycat404.png`} alt='' className='object-cover w-32 h-32 sm:w-40 sm:h-40' />
                      <p className='text-lg'>
                        {index + 1}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </div>
  );
}
