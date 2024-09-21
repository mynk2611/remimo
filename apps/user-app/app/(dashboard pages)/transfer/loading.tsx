
export default function Loading() {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
  let colors = [
    "--sky-300",
    "--pink-300",
    "--green-300",
    "--yellow-300",
    "--red-300",
    "--purple-300",
    "--blue-300",
    "--indigo-300",
    "--violet-300",
  ];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (

    <div className="spotlight-bg h-screen">

      <div className="flex justify-center ">
        <div className="w-11/12 md:10/12 flex justify-center mt-3 fixed top-0 z-50">
          <div className={` transition-all duration-300 w-full sm:w-9/12}`}>
            <>
              <div className="px-5 flex justify-between border-b border-black sm:px-10 bg-customblack py-2 sticky top-0 z-50 w-full">
                <div className="flex flex-grow justify-center ml-20 sm:ml-0 sm:flex-grow-0">
                  <div className="text-base flex flex-col justify-center text-white font-semibold mr-6">
                    Remimo
                  </div>
                  <div className="hidden md:block">
                    <div className="flex">
                      <div className=" flex flex-col justify-center pl-4">
                        <div>
                          <button
                            type="button"
                            className="text-base text-slate-100 bg-customblack hover:bg-zinc-800 hover:border-t border-zinc-600 py-2 px-3 rounded-xl">
                            Dashboard
                          </button>
                        </div>
                      </div>

                      <div className=" flex flex-col justify-center pl-4">
                        <div>
                          <button
                            type="button"
                            className="text-base text-slate-100 bg-customblack hover:bg-zinc-800 hover:border-t border-zinc-600 py-2 px-3 rounded-xl">
                            Transfer
                          </button>
                        </div>
                      </div>

                      <div className=" flex flex-col justify-center pl-4">
                        <div>
                          <button
                            type="button"
                            className="text-base text-slate-100 bg-customblack hover:bg-zinc-800 hover:border-t border-zinc-600 py-2 px-3 rounded-xl">
                            P2P
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="block md:hidden">
                    <div className="cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                      </svg>
                    </div>
                  </div>
                  <div className="hidden md:block md:flex items-center space-x-6">
                    <div className="w-28 text-lg">
                      <div className="flex justify-center items-center w-full">


                        <div role="status" className="w-full animate-pulse">
                          <div className="h-7 bg-zinc-900 rounded-full  w-full"></div>
                          <span className="sr-only">Loading...</span>
                        </div>


                      </div>
                    </div>
                    <div>
                      <button type="button" className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-cyan-400 border border-black  text-black rounded-lg font-bold transform hover:-translate-y-0.5 transition duration-400">

                        <div className='flex space-x-1 p-2'>
                          <span className='sr-only'>Loading...</span>
                          <div className='h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                          <div className='h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                          <div className='h-2 w-2 bg-black rounded-full animate-bounce'></div>
                        </div>

                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </>
          </div>
        </div>
      </div>

      <div className="flex justify-center h-min">
        <div className="border rounded-2xl border-zinc-600 p-2 md:p-12 mt-24 mb-14 mx-4 w-11/12">


          <div className="relative w-full h-screen overflow-hidden bg-zinc-800 flex flex-col items-center justify-center rounded-lg">
            <div className="absolute inset-0 w-full h-full bg-zinc-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <div
              style={{
                transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
              }}
              className=
              "absolute left-1/4 p-4 -top-1/4 flex  -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 "

            >
              {rows.map((_, i) => (
                <div
                  key={`row` + i}
                  className="w-16 h-8  border-l  border-black relative"
                >
                  {cols.map((_, j) => (
                    <div
                      key={`col` + j}
                      className="w-16 h-8  border-r border-t border-black relative"
                    >
                      {j % 2 === 0 && i % 2 === 0 ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="absolute h-6 w-10 -top-[14px] -left-[22px] text-black stroke-[1px] pointer-events-none"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v12m6-6H6"
                          />
                        </svg>
                      ) : null}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="relative w-10/12 md:w-7/12 lg:w-5/12 rounded-lg shadow-lg p-4 bg-black text-white overflow-hidden z-40">
              <div className="bg-black p-5 z-50  w-full ">
                <div className="text-zinc-200 flex justify-center text-xl font-semibold mb-5">
                  Pay money
                </div>
                <div className="flex justify-center items-center py-44">
                  <div role="status">
                    <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div >




  );
}
