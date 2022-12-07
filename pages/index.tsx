import { MouseEvent, useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [size, setSize] = useState("small");

  console.log(prompt, size);

  const onClear = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const onGenerate = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

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
            <div className='h-10 flex items-center'>
              <input
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className='rounded-l-full border-t-2 border-b-2 border-l-2 border-black px-3 py-2 h-full w-96 max-w-[320px] text-sm focus:outline-none'
                type='text'
                placeholder='Enter a prompt'
              />
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className='border-2 border-black px-3 py-2 font-medium text-sm focus:outline-none rounded-r-full h-full cursor-pointer'
              >
                <option value='small'>small</option>
                <option value='medium'>medium</option>
                <option value='large'>large</option>
              </select>
            </div>

            <div className='flex items-center justify-end space-x-4 font-bold mt-4 mr-2'>
              <button
                onClick={onClear}
                className='border border-black px-3 py-2 bg-transparent text-sm transition-colors duration-200 shadow-solid-primary'
              >
                CLEAR
              </button>
              <button
                type='submit'
                onClick={onGenerate}
                className='border border-black px-3 py-2 bg-text-purple hover:bg-text-purple/90 text-sm transition-colors duration-200 shadow-solid-primary'
              >
                GENERATE
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
