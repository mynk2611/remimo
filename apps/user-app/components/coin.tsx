import Image from 'next/image';

const Coin = () => {
  return (
    <Image 
        className='relative'
        src="/coin.png"
        alt="coin"
        width={400}
        height={400}
    />
  )
    
};

export default Coin;
