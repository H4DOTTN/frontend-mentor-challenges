import { useState } from 'react';
import { ReactComponent as Check } from './assets/images/icon-list.svg';
import DesktopBg from './assets/images/illustration-sign-up-desktop.svg';
import MobileBg from './assets/images/illustration-sign-up-mobile.svg';
import Button from './components/button';
import Form from './components/form';

function App() {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState('');
  return (
    <>
      {!success ? (
        <div className=" overflow-hidden w-full h-full md:p-4 md:max-w-[922px]   md:aspect-[16/10] bg-white md:rounded-3xl flex flex-col-reverse  md:flex-row gap-2 items-center ">
          <div className="w-full md:w-3/5 h-full p-8 flex flex-col justify-center gap-4  flex-grow-[2]">
            <h1 className="text-5xl md:text-6xl  text-neutral-dark-slate-grey font-bold ">
              Stay updated!
            </h1>
            <p className="text-sm">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className="flex flex-col items-start gap-4 ">
              <ListItem text="Product discovery and building what matters" />
              <ListItem text=" Measuring to ensure updates are a success" />
              <ListItem text="And much more!" />
            </ul>
            <Form onSubmit={() => setSuccess(true)} />
          </div>
          <div className="w-full md:w-2/5 h-full  ">
            <div className="w-full h-full rounded-b-3xl md:rounded-3xl overflow-hidden">
              <img
                src={DesktopBg}
                alt="background"
                className="hidden md:block w-full h-full object-cover"
              />
              <img
                src={MobileBg}
                alt="background"
                className="md:hidden block w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="overflow-hidden w-full  h-full min-h-screen md:min-h-0 bg-white flex flex-col gap-8 p-8 justify-center items-start rounded-3xl  md:max-w-[400px]">
          <div className="w-16 aspect-square rounded-full bg-primary flex justify-center items-center">
            <Check className="w-full h-full" />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl md:text-6xl  text-neutral-dark-slate-grey font-bold ">
              Thanks for subscribing!
            </h1>
            <p className="text-sm">
              A confirmation email has been sent to{' '}
              <span className="font-medium text-neutral-dark-slate-grey">
                {email}
              </span>{' '}
              Please open it and click the button inside to confirm your
              subscription.
            </p>
          </div>
          <Button text="Dismiss message" onClick={() => setSuccess(false)} />
        </div>
      )}
    </>
  );
}

export default App;

const ListItem = ({ text }: { text: string }) => {
  return (
    <li className="flex flex-row justify-start items-start gap-2 ">
      <div className="w-5 aspect-square rounded-full bg-primary flex justify-center items-center">
        <Check />
      </div>
      <p>{text}</p>
    </li>
  );
};
