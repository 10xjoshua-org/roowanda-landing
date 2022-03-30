import React from 'react';
import { FaInstagram, FaLinkedin, FaSlack, FaTwitter } from 'react-icons/fa';

export default function Screen() {
  return (
    <div>
      <div className='border mt-24'>
        <footer className='container m-auto py-16 px-5 md:px-0'>
          <div className='flex flex-col md:flex-row '>
            <div className='md:w-4/12'>
              <h1 className='text-green-900'>Roowanda</h1>
              <div>
                At Rooowanda, we want to help everyone, easily start a journey
                into the world of Cryptocurenccies.
              </div>
              <div>That is not a simple Dream.</div>
            </div>

            <div className='md:w-8/12 mt-6 md:space-y-0 md:mt-0'>
              <div className='flex flex-col md:flex-row justify-around  space-y-4'>
                <div className=''>
                  <div className='text-green-700 font-bold mb-2'>Product</div>
                  <div className='space-y-2'>
                    <div>Buy</div>
                    <div>Sell</div>
                    <div>Invest</div>
                  </div>
                </div>

                <div className=''>
                  <div className='text-green-700 font-bold mb-2'>Company</div>
                  <div className='space-y-2'>
                    <div>About us</div>
                    <div>Careers</div>
                    <div>Blog</div>
                  </div>
                </div>

                <div className=''>
                  <div className='text-green-700 font-bold mb-2'>Legal</div>
                  <div className='space-y-2'>
                    <div>Privacy policy</div>
                    <div>Terms & Conditions</div>
                  </div>
                </div>
              </div>

              <div className='md:px-12'>
                <div className=' bg-green-900 my-6' style={{ height: 1 }}></div>
              </div>

              <div>
                <div className='flex flex-col md:flex-row justify-around space-y-6 md:space-y-0'>
                  <div className=''>
                    <div className='text-green-700 font-bold mb-2'>
                      Contact Us
                    </div>
                  </div>

                  <div className=''>
                    <div className='space-y-2 text-green-900'>
                      <div>hello@roowanda.co</div>
                      <div>204, Gumroad, Lagos,Nigeria.</div>
                    </div>
                  </div>

                  <div className=''>
                    <div className='space-x-2 flex text-green-900 text-xl'>
                      <FaInstagram />
                      <FaTwitter />
                      <FaSlack />
                      <FaLinkedin />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
