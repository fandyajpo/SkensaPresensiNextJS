const Statistic = ({}) => {
  return (
    <div className='bg-sidebar max-h-max pb-28'>
      <div className='flex items-center justify-between p-4'>
        <div>
          <p className='font-black text-md text-white'>Statistik</p>
          <p className='text-xs text-custom-blue text-white'>
            Yok lihat statistik loe
          </p>
        </div>
        <div>
          <button>
            <p className='text-xs text-white'>Detail</p>
          </button>
        </div>
      </div>
      <div className='px-2'>
        <div className='bg-white p-4 rounded-md'>
          <div className='flex flex-row items-center gap-x-2 px-2 pb-4'>
            <p className='text-black'>Status</p>
            <p className='text-black'>:</p>
            <p className='px-2 text-green-500'>Jelek</p>
          </div>
          <div className='space-y-2 divide-y'>
            <div className='flex flex-row divide-x w-full justify-between'>
              <div className='w-2/4 px-2 flex flex-row items-center justify-between'>
                <p className='text-xs'>Hadir</p>
                <p className='text-xl font-bold'>9</p>
              </div>
              <div className='w-2/4 px-2 flex flex-row items-center justify-between'>
                <p className='text-xs'>Terlambat</p>
                <p className='text-xl font-bold'>9</p>
              </div>
            </div>
            <div className='flex flex-row divide-x w-full justify-between pt-2'>
              <div className='w-2/4 px-2 flex flex-row items-center justify-between'>
                <p className='text-xs'>Tidak Hadir</p>
                <p className='text-xl font-bold'>9</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
