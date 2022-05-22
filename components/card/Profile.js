const Profile = () => {
  return (
    <div className='bg-sidebar p-4'>
      <div className='bg-white/90 w-full rounded-md px-4 py-2 shadow-md'>
        <div className='relative'>
          <div className='absolute -right-2'>
            <div className='bg-green-500 w-4 h-4 rounded-full shadow-md' />
          </div>
        </div>
        <div className='flex items-center gap-x-2 h-20'>
          <div className='bg-black/50 w-14 h-14 rounded-md shadow-md' />
          <div>
            <p className='text-blue-500 text-xs font-bold'>Username</p>
            <p className='text-black text-xs'>Fandy Ahmad Januar Pratama</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
