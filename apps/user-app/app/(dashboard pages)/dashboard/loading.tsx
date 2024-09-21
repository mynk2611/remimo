
export default function Loading() {

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
        <div className="border rounded-2xl border-zinc-600 p-5 sm:p-10 md:p-5 lg:p-10 xl:px-10 mt-24 mb-16 xl:pb-16 mx-4 w-11/12">
          <div className="flex flex-col items-center md:flex-row sm:justify-evenly p-0 md:p-0 mb-16 sm:mb-20 mt-10 sm:mt-14">


            {/* first card */}
            <div>
              <div
                className={`relative w-[18rem] md:w-[15rem] lg:w-[18rem] xl:w-[22rem] h-40 md:h-36 lg:h-40 xl:h-48 rounded-lg shadow-lg p-2 bg-gradient-to-r from-pink-500 to-red-700  text-white overflow-hidden`}

              >

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="spotlight"></div>
                </div>

                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-base sm:text-xl md:text-lg font-bold md:font-semibold">Wallet</h2>
                  </div>

                  <div className='flex justify-between '>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className='size-20 md:size-16 lg:size-20 xl:size-24 mt-10 md:mt-8 xl:mt-12'
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                        />
                      </svg>

                    </div>
                    <div className={`mt-20 md:mt-14 lg:mt-18 xl:mt-24 text-xl md:text-xl font-bold md:font-medium`}><div className='flex space-x-1 '>
                      <span className='sr-only'>Loading...</span>
                      <div className='h-4 w-4 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                      <div className='h-4 w-4 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                      <div className='h-4 w-4 bg-black rounded-full animate-bounce'></div>
                    </div></div>
                  </div>
                  {/* {dateRange && <p className="text-sm">{dateRange}</p>} */}
                </div>
              </div>
            </div>



            {/* second Card */}
            <div className="h-52 flex flex-col justify-center">
              <div

                className={` relative w-[16rem] md:w-[12rem] lg:w-[16rem] xl:w-[20rem] h-36 md:h-28 lg:h-32 xl:h-40 rounded-lg shadow-lg p-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white overflow-hidden`}
              >
                {/* Spotlight effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="spotlight"></div>
                </div>

                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-base sm:text-xl md:text-lg font-bold md:font-semibold">Locked Balance</h2>
                  </div>

                  <div className='flex justify-between '>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-20 md:size-12 lg:size-16 mt-5 md:mt-4 xl:mt-10"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                      </svg>


                    </div>
                    <div className={`mt-10 md:mt-8 lg:mt-10 xl:mt-16 text-xl md:text-xl font-bold md:font-medium`}>
                      <div className='flex space-x-1 '>
                        <span className='sr-only'>Loading...</span>
                        <div className='h-3 w-3 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                        <div className='h-3 w-3 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                        <div className='h-3 w-3 bg-black rounded-full animate-bounce'></div>
                      </div>
                    </div>
                  </div>
                  {/* {dateRange && <p className="text-sm">{dateRange}</p>} */}
                </div>
              </div>
            </div>



            {/* third card */}
            <div className="h-52 flex flex-col justify-center">
              <div

                className={` relative w-[16rem] md:w-[12rem] lg:w-[16rem] xl:w-[20rem] h-36 md:h-28 lg:h-32 xl:h-40 rounded-lg shadow-lg p-2 bg-gradient-to-r from-green-500 to-teal-500 text-white overflow-hidden`}
              >
                {/* Spotlight effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="spotlight"></div>
                </div>

                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-base sm:text-xl md:text-lg font-bold md:font-semibold">Unlocked Balance</h2>
                  </div>

                  <div className='flex justify-between '>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-20 md:size-12 lg:size-16 xl:size-18 mt-5 md:mt-4 xl:mt-10"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                      </svg>


                    </div>
                    <div className={`mt-10 md:mt-8 lg:mt-10 xl:mt-16 text-xl md:text-xl font-bold md:font-medium`}>
                      <div className='flex space-x-1 '>
                        <span className='sr-only'>Loading...</span>
                        <div className='h-3 w-3 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                        <div className='h-3 w-3 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                        <div className='h-3 w-3 bg-black rounded-full animate-bounce'></div>
                      </div>
                    </div>
                  </div>
                  {/* {dateRange && <p className="text-sm">{dateRange}</p>} */}
                </div>
              </div>

            </div>


          </div>


          {/* Transactions */}
          <div className="md:grid md:grid-cols-12 md:gap-8">
            <div className="mb-8 md:mb-0 md:col-span-6">
              <div className='rounded-2xl p-4 shadow-[3px_3px_18px_-4px_rgb(228,228,231)] '>
                <div className="text-white font-semibold text-lg mb-6 p-5 w-full border-b border-zinc-500 pb-4">
                  Wallet Transactions
                </div>
                <div className="max-h-96 overflow-y-auto hover:overflow-y-scroll">
                  <div className="flex justify-center items-center">


                    <div role="status" className="w-full animate-pulse">
                      <div className="h-7 bg-zinc-900   w-full mb-3"></div>
                      <div className="h-7 bg-zinc-900   w-full mb-3"></div>
                      <div className="h-7 bg-zinc-900   w-full mb-3"></div>
                      <div className="h-7 bg-zinc-900   w-full mb-3"></div>
                      <div className="h-7 bg-zinc-900   w-full mb-3"></div>
                      <div className="h-7 bg-zinc-900   w-full mb-3"></div>
                      <div className="h-7 bg-zinc-900   w-full mb-3"></div>
                      <div className="h-7 bg-zinc-900   w-full mb-3"></div>
                      <div className="h-7 bg-zinc-900   w-full mb-3"></div>

                      <span className="sr-only">Loading...</span>
                    </div>


                  </div>
                </div>
              </div>

            </div>

            <div className="mb-8 md:mb-0 md:col-span-6">
              <div className='rounded-2xl p-4 shadow-[3px_3px_18px_-4px_rgb(228,228,231)] '>
                <div className="text-white font-semibold text-lg mb-6 p-5 w-full border-b border-zinc-500 pb-4">
                  Bank-to-Wallet Transaction
                </div>
                <div className="max-h-96 overflow-y-auto hover:overflow-y-scroll">
                  <div className="flex justify-center items-center">




                    <div role="status" className="w-full animate-pulse">
                      <div className="h-7 bg-zinc-900   w-full mb-3"></div>
                      <div className="h-7 bg-zinc-900   w-full mb-3"></div>
                      <div className="h-7 bg-zinc-900   w-full mb-3"></div>
                      <div className="h-7 bg-zinc-900   w-full mb-3"></div>
                      <div className="h-7 bg-zinc-900   w-full mb-3"></div>
                      <div className="h-7 bg-zinc-900   w-full mb-3"></div>
                      <div className="h-7 bg-zinc-900   w-full mb-3"></div>
                      <div className="h-7 bg-zinc-900   w-full mb-3"></div>
                      <div className="h-7 bg-zinc-900   w-full mb-3"></div>
                      <div className="h-7 bg-zinc-900   w-full mb-3"></div>
                      <span className="sr-only">Loading...</span>
                    </div>


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
