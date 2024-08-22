import Image from "next/image";

export function LandingFeatureOne(){
    return (
      <div>
        <div className='flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-start sm:justify-between mt-16 sm:mt-32 mx-0 lg:mx-2 sm:ml-10 md:ml-12 lg:ml-20 rounded-none sm:rounded-3xl sm:w-9/12 bg-zinc-900 sm:relative'>
        <div className="pt-16 sm:pt-16 md:pt-24 px-6 sm:px-0 pb-16  sm:pb-20 sm:ml-6 md:ml-20 sm:w-2/3">
        <div className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl text-white font-semibold">
            Fast, secure and reliable payments
        </div >

          <div className="text-base sm:text-2xl pt-4 sm:pt-8 text-white sm:w-2/3">
            Pay, get paid, and add funds to your wallet with ease. Join the tens of millions of people on Remimo
          </div>
        </div>

          <div className="hidden sm:block">
            <div className="absolute right-[-150px] top-0 md:top-10 mt-44 sm:mr-10">
              <div  className="sm:w-[20rem] sm:h-[16rem] md:w-[20rem] md:h-[16rem] xl:w-[30rem] xl:h-[20rem] relative overflow-visible">
                <Image
                  src="/people.jpeg"
                  alt="People enjoying the app"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-3xl"
                />
              </div>
            </div>
          </div>
       </div>
        <div className="block sm:hidden">
          <div className='w-full sm:w-auto sm:absolute sm:right-[-150px] sm:top-0  sm:mt-44 flex justify-center'>
            <div className='relative w-full h-[22rem] overflow-visible'>
              <Image
                src="/people.jpeg"
                alt='People enjoying the app'
                layout='fill'
                objectFit='cover'
                className='rounded-none sm:rounded-3xl'
              />
            </div>
          </div>
        </div>
      </div>
    )
}