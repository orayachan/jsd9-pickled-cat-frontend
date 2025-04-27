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
    <div className='mx-auto flex max-w-screen-2xl flex-col content-center-safe justify-center'>
      <h2
        id='highlight'
        className='text-primary-700 py-4 text-center text-2xl font-bold'
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
                    <CardContent className='bg-primary-50 flex aspect-square h-80 flex-col items-center justify-center p-6'>
                      <img
                        src={`@/error/graycat404.png`}
                        alt=''
                        className='h-32 w-32 object-cover sm:h-40 sm:w-40'
                      />
                      <p className='text-lg'>{index + 1}</p>
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
