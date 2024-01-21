export default function Hero() {
  return (
    <div className='flex h-200 justify-center items-center '>
      <div className="bg-[url('https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover bg-no-repeat w-full h-auto relative">
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
