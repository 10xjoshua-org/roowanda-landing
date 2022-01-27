import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
import { AppButton } from '../buttons/Button';
import { FaBars } from 'react-icons/fa';
const links = [
  { href: '/buy', label: 'Buy' },
  { href: '/sell', label: 'Sell' },
];

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-white shadow'>
      <div className=''>
        <div className='flex p-5 justify-between container m-auto items-center'>
          <UnstyledLink
            href='/'
            className='font-bold text-xl hover:text-gray-600'
          >
            Roowanda
          </UnstyledLink>
          <nav className='w-5/6 justify-center hidden md:flex'>
            <ul className='flex items-center justify-between space-x-4'>
              {links.map(({ href, label }) => (
                <li key={`${href}${label}`} className='px-2'>
                  <UnstyledLink href={href} className='hover:text-gray-600'>
                    {label}
                  </UnstyledLink>
                </li>
              ))}
            </ul>
            <button className='text-green-500 ml-2  text-left text-sm border-2 border-green-500 p-2 py-0 flez'>
              <span></span>
              <span>
                Cypto <br /> Calculator
              </span>
            </button>
          </nav>
          <div className='flex space-x-2 hidden md:flex'>
            <AppButton variant='primary'>Login</AppButton>
            <AppButton variant='secondary'>Register</AppButton>
          </div>
          <div className='block md:hidden'>
            <FaBars size={24} />
          </div>
        </div>
      </div>
    </header>
  );
}
