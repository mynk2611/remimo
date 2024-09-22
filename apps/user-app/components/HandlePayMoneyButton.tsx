
"use client"
interface HandlePayMoneyButtonProps {
  onClick: () => any;
}

export const HandlePayMoneyButton = ({ onClick }: HandlePayMoneyButtonProps) => {
  return (
    <button
      className="shadow-[inset_0_0_0_2px_#616467] text-white px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white transition duration-200"
      onClick={onClick}
    >
      Pay
    </button>
  );
}

