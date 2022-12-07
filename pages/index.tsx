import { MouseEvent, useState } from "react";
import axios from "axios";
import { Triangle } from "react-loader-spinner";
import Image from "next/image";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [size, setSize] = useState("small");
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [imageSize, setImageSize] = useState("");
  const [error, setError] = useState("");

  const onClear = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setImageUrl("");
    setImageSize("");
    setPrompt("");
    setSize("small");
  };

  const onGenerate = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!prompt || !size) return;

    setImageUrl("");
    setImageSize("");

    try {
      setIsLoading(true);
      const res = await axios.post("/api/generateImage", {
        prompt,
        size,
      });

      setIsLoading(false);

      setImageUrl(res.data.image);
      setImageSize(res.data.size);
      setPrompt("");
      setSize("small");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
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
        <div className='flex justify-center mt-10'>
          <p className='p-2 font-bold text-sm sm:text-lg text-center'>
            <span className='bg-text-purple px-2 py-1 rounded-lg'>
              Generate
            </span>{" "}
            realistic images and art from a description in natural language.
          </p>
        </div>
        <div className='mt-10 flex justify-center'>
          <form>
            <div className='h-10 flex items-center w-96 max-w-[310px]'>
              <input
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className='rounded-l-full border-t-2 border-b-2 border-l-2 border-black px-3 py-2 h-full  text-sm focus:outline-none flex-grow-1 flex-1'
                type='text'
                placeholder='Enter a prompt'
              />
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className='border-2 border-black px-3 py-2 font-medium text-sm focus:outline-none rounded-r-full h-full cursor-pointer flex-grow-0'
              >
                <option value='small'>small</option>
                <option value='medium'>medium</option>
                <option value='large'>large</option>
              </select>
            </div>

            <div className='flex items-center justify-end space-x-4 font-bold mt-4 mr-2'>
              <button
                disabled={!imageUrl}
                onClick={onClear}
                className='border border-black px-3 py-2 bg-transparent text-sm transition-colors duration-200 shadow-solid-primary disabled:bg-gray-300'
              >
                CLEAR
              </button>
              <button
                disabled={!prompt || !size}
                type='submit'
                onClick={onGenerate}
                className='border border-black px-3 py-2 bg-text-purple hover:bg-text-purple/90 text-sm transition-colors duration-200 shadow-solid-primary disabled:bg-gray-300'
              >
                GENERATE
              </button>
            </div>
          </form>
        </div>

        <div className='w-full flex justify-center mt-10'>
          {error ? <p className='bg-red-500 text-white p-4'>{error}</p> : null}
        </div>

        <div className='w-full flex justify-center mt-10'>
          {imageUrl && imageSize ? (
            <div className='relative'>
              <Image
                src={imageUrl}
                alt='generated image'
                width={
                  imageSize === "small"
                    ? 256
                    : imageSize === "medium"
                    ? 512
                    : 1024
                }
                height={
                  imageSize === "small"
                    ? 256
                    : imageSize === "medium"
                    ? 512
                    : 1024
                }
              />
            </div>
          ) : null}
        </div>

        {isLoading ? (
          <div className='fixed top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center bg-black/50'>
            <Triangle
              height='80'
              width='80'
              color='#A66EFE'
              ariaLabel='triangle-loading'
              wrapperStyle={{}}
              visible={true}
            />
            <p className='text-white text-xs mt-4'>Generating your image...</p>
          </div>
        ) : null}
      </main>
    </div>
  );
}
