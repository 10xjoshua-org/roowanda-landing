import * as React from 'react';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import { AppButton, OutlineBtn } from '@/components/buttons/Button';
import { MdTrendingFlat } from 'react-icons/md';
import { FaAppStore, FaGooglePlay } from 'react-icons/fa';
import { AppProcedure } from '@/components/organisms/procedure';
import { AppDownload } from '@/components/organisms/app-downloads-section';
import { Animate, AnimateKeyframes, AnimateGroup } from 'react-simple-animate';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <div className='space-y-44'>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <AppProcedure />
        <Section5 />
        <FAQ />
        <AppDownload />
      </div>
    </Layout>
  );
}

function Section1() {
  let [active, setActive] = React.useState(0);

  const images = [
    '/images/hero-eth-card.png',
    '/images/hero-bitcoin-card.png',
    '/images/hero-tether-card.png',
  ];

  React.useEffect(() => {
    setInterval(() => {
      if (active == 0) {
        setActive(1);
      }
      if (active == 1) {
        setActive(2);
      }
      if (active == 2) {
        setActive(0);
      }
    }, 5000);
  }, []);

  return (
    <div className='flex items-center py-24' style={{ minHeight: '75vh' }}>
      <div className='container px-8  flex md:items-center'>
        <div className='flex flex-col-reverse md:flex-row md:items-center w-full justify-center'>
          <div className='space-y-4 '>
            <h1 className='text-4xl md:text-6xl '>
              We are <span className='text-green-900'>Buying</span>
              <br />
              If you are <span className='text-green-900'>Selling</span>
            </h1>

            <p className='text-xl font-normal'>
              We buy. We sell. We invest.
              <br />
              No hassles. No stress. No delays.
              <br />
              It is always a win win.
            </p>
          </div>

          <div>
            <div className='md:ml-6 hidden md:flex items-center flex-col '>
              <Animate
                play
                start={{ opacity: 0 }}
                end={{ opacity: 1 }}
                key={images[active]}
              >
                <Image
                  src={images[active]}
                  width={446}
                  height={304}
                  alt='alt'
                />
                <div className='flex flex-row space-x-2 justify-center w-full px-16 '>
                  <OutlineBtn>Buy</OutlineBtn>
                  <OutlineBtn classA='border-0'>Sell</OutlineBtn>
                </div>
              </Animate>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section2() {
  type ItemT = {
    icon: string;
    label: string;
    description: string;
    color: string;
  };
  const items: ItemT[] = [
    {
      icon: '/images/toggle.png',
      label: 'Easy',
      description:
        'We understood the assignment. Buy, Sell or Invest in three easy steps.',
      color: '#A9F4A9',
    },
    {
      icon: '/images/enter.png',
      label: 'Fast',
      description: 'No deleys and no hassles, we pay fast. ',
      color: '#FFF8D2',
    },
    {
      icon: '/images/shield.png',
      label: 'Secure',
      description:
        'We understood the assignment. Buy, Sell or Invest in three easy steps.',
      color: '#DBDBDB',
    },
  ];

  const Card = ({ item }: { item: ItemT }) => {
    return (
      <div className='md:w-4/12 p-4 md:p-8  flex-1 items-center h-full'>
        <div
          className='flex-col p-4  rounded-lg py-20 space-y-4 h-full'
          style={{ backgroundColor: item.color }}
        >
          <Image
            alt='image'
            src={item.icon}
            className='block relative'
            width={60}
            height={60}
          />
          <div className='space-y-2'>
            <h3 className='font-bold text-green-900'>{item.label}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <React.Fragment>
      <div className=' items-center' style={{ minHeight: '100vh' }}>
        <div className='container mx-auto flex flex-col md:flex-row  items-stretch '>
          {items.map((v) => {
            return <Card item={v} key={v.icon} />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

function Section3() {
  return (
    <div className='space-y-6'>
      <div className='container margin-auto'>
        <div className='text-center p-5 my-12 space-y-4'>
          <h1 className='text-green-900'>Trade on the Go</h1>
          <p>Buy or sell your cryptocurrencies with just a few clicks. Yes!</p>
        </div>
      </div>

      <div className=' container m-auto my-10 px-8'>
        {[
          { name: 'Bitcoin', label: 'bitcoin', rate: '25,000,000' },
          { name: 'Ethereum', label: 'eth', rate: '1,000,000' },
          { name: 'Tether', label: 'tether', rate: '500' },
          { name: 'Bitcoin', label: 'bitcoin', rate: '25,000,000' },
          { name: 'Ethereum', label: 'eth', rate: '1,000,000' },
          { name: 'Tether', label: 'tether', rate: '500' },
        ].map((v, index) => {
          return (
            <div
              key={index}
              className='p-5  flex justify-between items-center border-b border-green-100'
            >
              <div className='flex md:justify-between flex-col md:flex-row  md:w-100 flex-1'>
                <div className='flex space-x-2 items-center'>
                  <Image
                    alt='image'
                    src={'/images/' + v.label + '.png'}
                    className='block relative'
                    width={50}
                    height={50}
                  />
                  <p>
                    {v.name} <span className='text-gray-300'>{v.label}</span>
                  </p>
                </div>
                <div className='flex space-x-2 items-center'>
                  <p>
                    ₦{v.rate} <span className='text-gray-400'>-2%</span>
                  </p>
                </div>
              </div>
              <div className='flex space-x-2 items-center flex-1 justify-end'>
                <AppButton variant='secondary'>Buy</AppButton>
                <AppButton variant='primary'>Sell</AppButton>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Section4() {
  const Card = ({
    color,
    title,
    bottom,
    body,
  }: {
    color: string;
    bottom: React.ReactChild;
    title: React.ReactChild;
    body: React.ReactChild;
  }) => {
    return (
      <div className=''>
        <div
          className='p-8 md:p-16  rounded-xl space-y-6'
          style={{ backgroundColor: color }}
        >
          <h3 className='text-xl  text-green-900'>{title}</h3>
          <div>{body}</div>
          <div>{bottom}</div>
        </div>
      </div>
    );
  };
  return (
    <div className=' items-center py-44' style={{ minHeight: '100vh' }}>
      <div className='container flex  flex-wrap  justify-center '>
        <div className='md:w-5/12 px-4 my-12'>
          <Card
            color='#FFF8D2'
            title='The vision bursting through our veins...'
            body={
              <p>
                From helping you invest in the future of transacting, to
                building an entire ecosystem upon a blockchain that gives your
                payments, universal access.
                <br /> <br />
                Roowanda is a smart and simple financial technology, and crypto
                trading organism, on a mission to decentralize access to
                everyday crypto transacting, global remittance, and digital fund
                management for individuals and businessess across the African
                continent.
              </p>
            }
            bottom={
              <OutlineBtn classA='w-min border-4 border-yellow-400'>
                About
              </OutlineBtn>
            }
          />
        </div>
        <div className='md:w-5/12 px-4  space-y-12 my-12'>
          <h1 className='text-3xl text-green-900 font-normal'>
            This is serious business for all of us{' '}
          </h1>
          <Card
            color='#A9F4A9'
            title='We strongly beleive you
            grow by learning.'
            body={
              <p>
                Which is why we have dedicated an illuminous amount of our time,
                to helping you on your journey into and while in Crypto.
                <br /> <br />
                It is a vast space, but it’s nothing you can’t surmount. We have
                carefully created the Crypto for dummies series, which will
                introduce you to blockchain, trading and investing as well as
                NFT’s. From our hearts to yours.
              </p>
            }
            bottom={<OutlineBtn classA='w-min border-4'>Explore</OutlineBtn>}
          />
        </div>
      </div>
    </div>
  );
}

function Section5() {
  return (
    <React.Fragment>
      <div className='container '>
        <div className='p-10 flex flex-col md:flex-row justify-between md:items-center bg-green-200 mx-auto rounded-2xl space-y-2'>
          <div className='space-y-2'>
            <h1>
              Does the idea of investing <br /> in cryto tickle you?
            </h1>
            <p>
              It should!
              <br /> We do almost 100% of ROI every passing year.
            </p>
          </div>
          <AppButton>Create Portfolio</AppButton>
        </div>
      </div>
    </React.Fragment>
  );
}

function FAQ() {
  const items: { label: string; description: string }[] = [
    {
      label: 'Create Your Account',
      description: 'How do I make money from crypto?',
    },
    {
      label: 'Deposit Funds',
      description: 'How do I make money from crypto?',
    },
    {
      label: 'Buy/Sell whatever',
      description: 'How do I make money from crypto?',
    },
    {
      label: 'Buy/Sell whatever',
      description: 'How do I make money from crypto?',
    },
    {
      label: 'Buy/Sell whatever',
      description: 'How do I make money from crypto?',
    },
  ];
  return (
    <div className='container flex  flex-col md:flex-row' style={{}}>
      <div className='md:w-6/12'>
        <h1>We thought you might have some questions</h1>
        <p>So we went the extra mile</p>
      </div>
      <div className='md:w-6/12'>
        <div className='space-y-6'>
          {items.map((v, i) => {
            return (
              <div
                key={i}
                className='flex p-4 bg-white rounded-xl shadow-md space-x-4 justify-between items-center'
              >
                <div className='flex-1 space-y-2'>
                  <p>{v.description}</p>
                </div>
                <MdTrendingFlat color='green' />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
