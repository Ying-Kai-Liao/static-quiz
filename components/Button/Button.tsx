type Props = {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ text, onClick }: Props) => {
  return (
    <button
      className='bg-black select-none font-bold h-[45px] min-w-[120px] rounded-[15px] text-white hover:opacity-60 transition active:opacity-80'
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
