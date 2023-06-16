import { FC, useState } from 'react';
import Button from './button';
import { z, ZodType } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '../utils';
type FormProps = {
  onSubmit: () => void;
};
type FormType = {
  email: string;
};
const Form: FC<FormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const schema: ZodType<FormType> = z.object({
    email: z.string().email(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });
  const submit = async (data: FormType) => {
    onSubmit();
    console.log(data);
  };

  return (
    <form
      className="flex flex-col items-start gap-2 mt-auto md:mt-2"
      onSubmit={handleSubmit(submit)}
    >
      <div className="flex justify-between items-center w-full">
        <label
          htmlFor="email"
          className="text-neutral-dark-slate-grey text-sm font-medium"
        >
          Email Address
        </label>
        {errors.email && (
          <small className="text-xs font-medium text-red-500">
            Valid email required
          </small>
        )}
      </div>
      <input
        {...register('email')}
        name="email"
        id="email"
        placeholder="email@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={cn(
          'w-full h-12 rounded-md border border-neutral-grey/70 outline-none bg-transparent indent-4 ',
          {
            'border-primary text-primary bg-red-100': errors.email,
          }
        )}
      />
      <Button
        text="Subscribe to monthly newsletter"
        variant={!errors.email ? 'primary' : 'secondary'}
      />
    </form>
  );
};

export default Form;
