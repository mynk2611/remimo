import Image from "next/image";

export function LandingFeatureOne(){
    return (
      <div>
        <div className='flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-start sm:justify-between mt-16 sm:mt-32 mx-2 sm:ml-20 rounded-none sm:rounded-3xl sm:w-9/12 bg-zinc-900 sm:relative'>
        <div className="pt-16 sm:pt-32 pb-10 px-6 sm:px-0 sm:pb-20 sm:ml-20 sm:w-2/3">
        <div className="text-5xl sm:text-8xl text-white font-semibold">
            Fast, secure and reliable payments
        </div >

          <div className="text-base sm:text-2xl pt-4 sm:pt-8 text-white sm:w-2/3">
            Pay, get paid, and add funds to your wallet with ease. Join the tens of millions of people on Remimo
          </div>
        </div>

          <div className="hidden sm:block">
            <div className="absolute right-[-150px] top-0 mt-44 ">
              <div style={{ width: "30rem", height: "24rem" }} className="relative overflow-visible">
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
            <div className='relative w-full h-[16rem] overflow-visible'>
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