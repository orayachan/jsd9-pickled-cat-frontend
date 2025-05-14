import { Button } from '@/components/ui/button';

export function HeroBanner() {
  return (
    <section className='px-8 pb-8 lg:py-12'>
      <div className='bg-secondary relative mx-auto grid justify-center rounded-xl border-red-300 px-8 shadow-xl sm:py-16 md:grid-cols-2 lg:px-16'>
        <div className='max-w-prose space-y-8 max-xl:pb-24 max-lg:z-[1] max-md:text-center max-sm:pt-16 sm:content-center'>
          <h1 className='text-primary text-4xl leading-tight font-medium xl:text-5xl xl:leading-snug'>
            โปรโมชั่นเด็ด รับส่วนลด 50% ฉลองเปิดร้านใหม่
          </h1>
          <p className='text-lg text-zinc-700 xl:text-2xl'>
            ระยะเวลาโปรโมชั่นภายใน 1 มีนาคม - 31 พฤษภาคม 2567 เท่านั้น
          </p>
          <Button className='w-full rounded-full py-6 text-lg text-white sm:w-1/2 xl:py-8 xl:text-xl'>
            สั่งซื้อเลย!
          </Button>
        </div>
        <img
          className='xs:h-full absolute bottom-0 max-md:opacity-30 sm:right-0 md:-right-8 lg:right-16 lg:h-[calc(100%+4rem)]'
          src='/big-grey-cat.png'
          alt=''
        />
      </div>
    </section>
  );
}
