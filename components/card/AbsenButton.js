import Link from "next/link";

const AbsenButton = () => {
  return (
    <div className='bg-sidebar max-h-max pb-4'>
      <div className='flex items-center justify-between p-4'>
        <div>
          <p className='font-black text-md text-white'>Presence</p>
          <p className='text-xs text-custom-blue text-white'>
            Lo harus absen coy
          </p>
        </div>
        <div>
          <button>
            <p className='text-xs text-white'>Detail</p>
          </button>
        </div>
      </div>
      <div className='px-2'>
        <div className='bg-white p-4 rounded-md flex flex-row justify-around gap-x-2'>
          <Link href={"/home/camera"} passHref>
            <div className='flex flex-col items-center gap-y-1'>
              <div className='bg-green-500 w-14 h-14 rounded-md' />
              <p className='text-xs'>Masuk</p>
            </div>
          </Link>
          <Link href={"/home/camera"} passHref>
            <div className='flex flex-col items-center gap-y-1'>
              <div className='bg-green-500 w-14 h-14 rounded-md' />
              <p className='text-xs'>Pulang</p>
            </div>
          </Link>
          <div className='flex flex-col items-center gap-y-1'>
            <div className='bg-green-500 w-14 h-14 rounded-md' />
            <p className='text-xs'>Under dev</p>
          </div>
          <div className='flex flex-col items-center gap-y-1'>
            <div className='bg-green-500 w-14 h-14 rounded-md' />
            <p className='text-xs'>Under dev</p>
          </div>
          <div className='flex flex-col items-center gap-y-1'>
            <div className='bg-green-500 w-14 h-14 rounded-md' />
            <p className='text-xs'>Under dev</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbsenButton;
