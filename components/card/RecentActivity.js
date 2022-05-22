import Link from "next/link";

const RecentActivity = () => {
  return (
    <div className='bg-sidebar max-h-max pb-4'>
      <div className='flex items-center justify-between p-4'>
        <div>
          <p className='font-black text-md text-white'>Recent Activity</p>
          <p className='text-xs text-custom-blue text-white'>
            Activity mu hari ini
          </p>
        </div>
        <div>
          <button>
            <p className='text-xs  text-white'>Lihat Semua</p>
          </button>
        </div>
      </div>
      <div className='px-2'>
        <div className='bg-white rounded-md flex flex-col  gap-y-1 p-1'>
          <div className='flex flex-row items-center justify-between w-full px-2 gap-x-2 border-2 border-gray-500 rounded-md p-1 shadow-md'>
            <div className='flex flex-row gap-x-2 items-center'>
              <div className='bg-blue-500 w-2 h-2 rounded-full' />
              <div className='flex flex-col'>
                <p className='text-sm'>Kamu sudah melakukan presensi hadir</p>
                <p className='text-xs'>Type activity : Absen</p>
              </div>
            </div>
            <p className='text-xs'>05.44</p>
          </div>

          <div className='flex flex-row items-center justify-between w-full px-2 gap-x-2 border-2 border-sidebar rounded-md p-1 shadow-md'>
            <div className='flex flex-row gap-x-2 items-center'>
              <div className='bg-blue-500 w-2 h-2 rounded-full' />
              <div className='flex flex-col'>
                <p className='text-sm'>Kamu melakukan presensi pulang</p>
                <p className='text-xs'>Type activity : Absen</p>
              </div>
            </div>
            <p className='text-xs'>05.44</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
