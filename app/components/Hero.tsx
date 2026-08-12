export default function Hero() {
  return (
    <section
      aria-label='Introduction'
      className='flex justify-center items-center '>
      <div className='bg-dark bg-center bg-cover bg-no-repeat w-full h-auto relative'>
        <div className='w-full h-full flex justify-center '>
          <span className='text-muted text-center'>
            <h1 className='text-3xl mb-2'>Good News</h1>
            <p className='text-2xl mb-3'>
              News <i>you</i> want to read
            </p>
          </span>
        </div>
      </div>
    </section>
  );
}
