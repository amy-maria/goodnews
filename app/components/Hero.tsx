export default function Hero() {
  return (
    <div className='flex h-200 justify-center items-center '>
      <div className='bg-slate-500 bg-center bg-cover bg-no-repeat w-full h-auto relative'>
        <div
          className='w-full h-full flex justify-center 
             bg-blue-600/30 backdrop-brightness-40'>
          <span className='text-black text-center'>
            <h2 className='text-3xl'>Good News</h2>
            <p className='text-xl'>All of the news you want to read</p>
          </span>
        </div>
      </div>
    </div>
  );
}
