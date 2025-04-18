import ErrorCat from '../../../public/error/graycat404.png';

export function Error404() {
  return (
    <div className='bg-secondary-50 grid h-dvh place-content-center-safe gap-4 lg:grid-cols-2'>
      <section className='mx-12 flex flex-col items-end justify-center'>
        <h1 className='text-4xl font-bold lg:text-6xl'>404 ERROR</h1>
        <p className='mb-8 text-lg'>This page is under construction</p>
        <a href='#' className='hover:text-primary-600 font-semibold'>
          Back →
        </a>
      </section>
      <img src={ErrorCat} />
    </div>
  );
}
