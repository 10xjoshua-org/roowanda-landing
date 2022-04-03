import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
import { AppButton } from '../buttons/Button';
import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
const links = [
  { href: '/buy', label: 'Buy' },
  { href: '/sell', label: 'Sell' },
];

export default function Header() {
  const [showMobileMeb, updateShowMobile] = React.useState(false);

  return (
    <header className='sticky top-0 z-50 bg-white shadow'>
      {showMobileMeb == true ? (
        <MobileMenu
          update={() => {
            updateShowMobile(false);
          }}
        />
      ) : (
        <div></div>
      )}
      <div className=''>
        <div className='flex p-5 justify-between container m-auto items-center'>
          <UnstyledLink
            href='/'
            className='font-bold text-xl hover:text-gray-600'
          >
            <img src='/images/logo.png' width={200} />
          </UnstyledLink>
          <nav className='w-4/6 justify-center hidden md:flex'>
            <ul className='flex items-center justify-between space-x-4'>
              {links.map(({ href, label }) => (
                <li key={`${href}${label}`} className='px-2'>
                  <UnstyledLink href={href} className='hover:text-gray-600'>
                    {label}
                  </UnstyledLink>
                </li>
              ))}
            </ul>
            <img src='/images/calculator.png' width={130} />
          </nav>
          <div className='flex space-x-2 hidden md:flex'>
            <AppButton variant='primary'>Signin</AppButton>
            <AppButton variant='secondary'>Get Started</AppButton>
          </div>
          <div
            className='block md:hidden'
            onClick={() => {
              updateShowMobile(true);
            }}
          >
            <FaBars size={24} />
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ update }: { update: () => void }) {
  return (
    <div className='fixed w-full top-0 left-0 bg-white h-full'>
      <div>
        <div className='flex p-5 justify-between container m-auto items-center'>
          <UnstyledLink
            href='/'
            className='font-bold text-xl hover:text-gray-600'
          >
            <img src='/images/logo.png' width={200} />
          </UnstyledLink>
          <div className='block md:hidden text-xl'>
            <MdClose
              onClick={() => {
                update();
              }}
            />
          </div>
        </div>
      </div>

      <div style={{ flex: 1 }} className='p-12'>
        <div className='text-center'>
          {links.map(({ href, label }, index) => (
            <div className='p-4 py-3 font-bold' key={index}>
              <UnstyledLink href={href} className='hover:text-gray-600'>
                {label}
              </UnstyledLink>
            </div>
          ))}
          <img src='/images/mobile-cal.png' style={{ width: '100%' }} />
        </div>
        <div className='flex  flex-col space-y-4'>
          <AppButton variant='primary'>Signin</AppButton>
          <AppButton variant='secondary'>Get Started</AppButton>
        </div>
      </div>
    </div>
  );
}
