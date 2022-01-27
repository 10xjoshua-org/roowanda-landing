import Image from 'next/image';
import React from 'react';

export function AppProcedure() {
  let [active, setActive] = React.useState(0);
  const items: { label: string; description: string; image: string }[] = [
    {
      label: 'Create Your Account',
      image: '/images/signup-flow.png',
      description:
        'If you are only trying to sell  to us, then you really do not need to burden yourself with inputing your private details, but if you’re trying to buy....you must stress this stress.',
    },
    {
      label: 'Deposit Funds',
      image: '/images/deposit-ill.png',
      description:
        'Choose your preferred deposit options, you would defenitely find the one that suits, so you can add some cash to your empty wallet.',
    },
    {
      label: 'Buy/Sell whatever',
      image: '/images/signup-flow.png',
      description:
        'If Bitcion is getting you all excited and your emotions work up, then you need to avoid looking at the sweetness of Ethereum and the rest of the party.',
    },
  ];
  return (
    <div
      className='container flex items-center justify-center flex-col md:flex-row'
      style={{ minHeight: '0vh' }}
    >
      <div className='md:w-6/12' id='procedure'>
        <Image src={items[active].image} width={492} height={489} alt='alt' />
      </div>
      <div className='md:w-6/12'>
        <div className='space-y-6'>
          {items.map((v, i) => {
            const cardActive =
              'flex p-6 bg-white rounded-xl items-center  space-x-4 bg-green-100';
            const cardInactive =
              'flex p-6 bg-white rounded-xl items-center shadow-lg space-x-4 hover:bg-green-50';

            return (
              <div
                className={i == 1 ? 'md:pl-20' : 'md:pr-20'}
                style={{}}
                onClick={() => {
                  setActive(i);
                }}
              >
                <div
                  className={i == active ? cardActive : cardInactive}
                  key={i}
                >
                  <div
                    className='rounded-full border flex items-center justify-center border-green-900'
                    style={{ width: '70px', height: '70px' }}
                  >
                    <h1 className='font-bold'>{i + 1}</h1>
                  </div>
                  <div className='flex-1 space-y-2'>
                    <h2 className='font-normal text-green-900'>{v.label}</h2>
                    <p>{v.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
