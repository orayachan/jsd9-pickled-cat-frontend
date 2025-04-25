import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export function ProductHighlight() {
  return (
    <div>
      <h2 id='highlight' className='text-2xl font-bold text-primary-700'>สินค้าขายดี</h2>
      <section className='mx-auto flex flex-col content-center-safe justify-center p-8 lg:max-w-screen-2xl'>
        <Carousel className='min-w-6/8'>
          <CarouselContent>
            {Array.from({ length: 4 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className='p-1'>
                  <Card>
                    <CardContent className='flex items-center justify-center p-6'>
                      <span className='text-4xl font-semibold'>
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
