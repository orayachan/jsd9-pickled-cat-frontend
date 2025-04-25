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
        className='text-primary-700 font-bold text-2xl py-4'
      >
        สินค้าขายดี
      </h2>
      <section className='px-8'>
        <Carousel className='w-full'>
          <CarouselContent className='-ml-1'>
            {Array.from({ length: 4 }).map((_, index) => (
              <CarouselItem
                key={index}
                className='pl-1 md:basis-1/2 lg:basis-1/3'
              >
                <div className='p-1'>
                  <Card>
                    <CardContent className='flex aspect-square items-center justify-center p-6'>
                      <span className='text-2xl font-semibold'>
                        {index + 1}
                      </span>
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
