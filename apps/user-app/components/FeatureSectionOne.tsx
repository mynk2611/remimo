import Image from "next/image";

export function LandingFeatureOne(){
    return (
        <div className='mt-32 ml-20 rounded-3xl w-9/12 bg-zinc-900 flex relative'>
        <div className='pt-32 pb-20 ml-20 w-2/3  '>
          <div className='text-8xl text-white font-semibold'>
            Fast, secure and reliable payments
          </div >

          <div className='text-2xl pt-8 text-white w-2/3'>
            Pay, get paid, and add funds to your wallet with ease. Join the tens of millions of people on Remimo
          </div>
        </div>

        <div className='absolute right-[-150px] top-0 mt-44'>
          <div style={{ width : "30rem" , height : "24rem"}} className='   overflow-visible relative'>
            <Image
              src="/people.jpeg"
              alt='People enjoying the app'
              layout='fill'
              objectFit='cover'
              className='rounded-3xl'
            />
          </div>
        </div>
      </div>
    )
}