import { useRouter } from "next/router";
import { useState, useEffect } from "react";
const Activity = () => {
  const router = useRouter();
  const [scrolling, setScrolling] = useState(false);
  const Scrolled = (event) => {
    if (window.scrollY > 80) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", Scrolled);
  }, []);
  const [shouldFetch, setShouldFetch] = useState(true);
  return (
    <div className='bg-sidebar p-4 rounded-tl-3xl h-screen'>
      <div className='flex items-center justify-between pt-2 pb-4'>
        <div className='space-y-2'>
          <p className='font-black text-md text-white'>Hari Ini</p>
          <p className='text-xs text-white'>Senin, 21 Februari 2022</p>
        </div>
      </div>

      <div className='flex flex-row items-center w-full py-2 rounded-md'>
        <div className='flex flex-row gap-2 items-center w-full'>
          <div className='w-full flex flex-col items-center'>
            <div className='flex flex-col items-center gap-x-2 w-full'>
              <div className='bg-white/30 h-14 w-14 rounded-xl flex items-center justify-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-10 w-10 text-green-500'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z' />
                  <path
                    fillRule='evenodd'
                    d='M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
            </div>
            <div>
              <p className='text-white'>08.22</p>
            </div>
          </div>
          <div className='w-full flex flex-col items-center'>
            <div className='flex flex-col items-center gap-x-2 w-full'>
              <div className='bg-white/30 h-14 w-14 rounded-xl flex items-center justify-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-10 w-10 text-red-500'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M8 2a1 1 0 000 2h2a1 1 0 100-2H8z' />
                  <path d='M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z' />
                </svg>
              </div>
            </div>
            <div>
              <button className='bg-white rounded-full'>
                <p className='text-custom-skensaBlue font-bold shadow-md px-4 py-1 text-sm'>
                  Absen
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
