import * as React from 'react';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import { AppButton } from '@/components/buttons/Button';
import { MdTrendingFlat } from 'react-icons/md';
import { FaAppStore, FaGooglePlay } from 'react-icons/fa';

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
        <Procedure />
        <Section5 />
        <FAQ />
        <AppDownload />
      </div>
    </Layout>
  );
}

function Section1() {
  return (
    <div className='flex items-center py-24' style={{ minHeight: '75vh' }}>
      <div className='container m-auto  flex md:items-center'>
        <div className='flex flex-col-reverse md:flex-row md:items-center w-full'>
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

          <div className='mb-10 md:mb-0 md:ml-6 hidden md:flex items-center '>
            <Image
              src={'/images/hero-eth-card.png'}
              width={610}
              height={467}
              alt='alt'
            />
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
      label: '',
      description:
        'We understood the assignment. Buy, Sell or Invest in three easy steps.',
      color: '#A9F4A9',
    },
    {
      icon: '/images/enter.png',
      label: '',
      description: 'No deleys and no hassles, we pay fast. ',
      color: '#FFF8D2',
    },
    {
      icon: '/images/shield.png',
      label: '',
      description:
        'We understood the assignment. Buy, Sell or Invest in three easy steps.',
      color: '#DBDBDB',
    },
  ];

  const Card = ({ item }: { item: ItemT }) => {
    return (
      <div className='md:w-4/12  p-8 flex-1 items-center h-full'>
        <div
          className='flex-col p-8 rounded-lg py-24'
          style={{ backgroundColor: item.color }}
        >
          <Image
            alt='image'
            src={item.icon}
            className='block relative'
            width={100}
            height={100}
          />
          <div>
            <p className='font-bold'>{item.label}</p>
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
            <div key={index} className='p-5  flex justify-between items-center'>
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
          className='p-16  rounded-xl space-y-6'
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
              <AppButton className='' variant='light'>
                About
              </AppButton>
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
            bottom={
              <AppButton className='' variant='light'>
                Explore
              </AppButton>
            }
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

function Procedure() {
  const items: { label: string; description: string }[] = [
    {
      label: 'Create Your Account',
      description:
        'If you are only trying to sell  to us, then you really do not need to burden yourself with inputing your private details, but if you’re trying to buy....you must stress this stress.',
    },
    {
      label: 'Deposit Funds',
      description:
        'Choose your preferred deposit options, you would defenitely find the one that suits, so you can add some cash to your empty wallet.',
    },
    {
      label: 'Buy/Sell whatever',
      description:
        'If Bitcion is getting you all excited and your emotions work up, then you need to avoid looking at the sweetness of Ethereum and the rest of the party.',
    },
  ];
  return (
    <div
      className='container flex items-center justify-center flex-col md:flex-row'
      style={{ minHeight: '0vh' }}
    >
      <div className='md:w-6/12'>
        <Image
          src={'/images/signup-flow.png'}
          width={492}
          height={489}
          alt='alt'
        />
      </div>
      <div className='md:w-6/12'>
        <div className='space-y-6'>
          {items.map((v, i) => {
            return (
              <div
                className='flex p-6 bg-white rounded-xl shadow-lg space-x-4'
                key={i}
              >
                <div
                  className='rounded-full border flex items-center justify-center border-green-900'
                  style={{ width: '70px', height: '70px' }}
                >
                  <h1 className='font-normal'>{i + 1}</h1>
                </div>
                <div className='flex-1 space-y-2'>
                  <h2 className='font-normal text-green-900'>{v.label}</h2>
                  <p>{v.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
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

function AppDownload() {
  const downloadBTNStyle =
    'space-x-4 flex border rounded-xl p-2 items-center border-2 border-green-900 justify-center ';
  return (
    <div
      className='container flex  flex-col md:flex-row justify-center'
      style={{}}
    >
      <div className='md:w-5/12 space-y-6'>
        <h1 className='text-green-900'>
          Creating an easy and functional app to trade and manage your crypto
          portfolios is dauting work.
        </h1>
        <p className='text-xl'>
          But we will do it anyway, because you need us to.
        </p>

        <div className='flex space-x-2'>
          <div className={downloadBTNStyle}>
            <FaAppStore size={28} />
            <div>
              <p className='text-xl'>App Store</p>
              <small>Coming Soon</small>
            </div>
          </div>
          <div className={downloadBTNStyle}>
            <FaGooglePlay size={28} />
            <div>
              <p className='text-xl'>Google Play</p>
              <small>Coming Soon</small>
            </div>
          </div>
        </div>

        <p className='md:text-center'>
          This app is in the workshop and will be coming soon to an app store
          near you.
        </p>
      </div>
      <div className='md:w-5/12'>
        <div className='space-y-6'></div>
      </div>
    </div>
  );
}
