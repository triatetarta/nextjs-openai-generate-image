export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-tr from-cool-pink via-cool-orange to-cool-purple select-none'>
      <nav className='h-20 w-full bg-white'>
        <div className='container mx-auto h-full flex items-center justify-center'>
          <h1 className='text-black font-bold text-2xl'>
            AI-Generated <span className='text-text-purple'>Images</span>
          </h1>
        </div>
      </nav>
      <main className='w-full'>
        <div className='mt-10 flex justify-center'>
          <form>
            <input
              className='rounded-l-full border-t-2 border-b-2 border-l-2 border-black px-3 py-2 w-96 max-w-[320px] text-sm focus:outline-none'
              type='text'
              placeholder='Enter a description'
            />
            <button className='border-2 border-black px-3 py-2 bg-text-purple hover:bg-text-purple/90 font-medium text-sm transition-colors duration-200'>
              GENERATE
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
