import { FC } from 'react';
import { cn } from '../utils';
type ButtonProps = {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
};
const Button: FC<ButtonProps> = ({ text, onClick, variant = 'secondary' }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full p-4 bg-neutral-dark-slate-grey text-center text-white font-medium rounded-md',
        variant === 'primary'
          ? 'bg-primary shadow-[0_10px_30px_rgb(_255,_98,_87,_0.7)]'
          : 'bg-neutral-dark-slate-grey'
      )}
    >
      {text}
    </button>
  );
};

export default Button;
