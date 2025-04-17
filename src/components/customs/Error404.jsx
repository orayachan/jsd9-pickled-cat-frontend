import ErrorCat from '../../../public/error/graycat404.png'

export function Error404() {
  return (
    <div className='bg-secondary-50 grid lg:grid-cols-2 gap-4 h-dvh place-content-center-safe'>
      <section className='flex flex-col justify-center items-end mx-12'>
        <h1 className='text-4xl lg:text-6xl font-bold'>404 ERROR</h1>
        <p className='text-lg mb-8'>This page is under construction</p>
        <a href='#' className='font-semibold hover:text-primary-600'>
          Back →
        </a>
      </section>
      <img src={ErrorCat} />
    </div>
  )
}
