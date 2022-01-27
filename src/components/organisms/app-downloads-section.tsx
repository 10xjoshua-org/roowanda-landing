import { MdTrendingFlat } from 'react-icons/md';
import { FaAppStore, FaGooglePlay } from 'react-icons/fa';

export function AppDownload() {
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
