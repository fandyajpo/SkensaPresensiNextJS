import { useRouter } from "next/router";
import Link from "next/link";
const Camera = () => {
  const router = useRouter();
  return (
    <div className='w-full h-screen overflow-hidden'>
      <div className='bg-white h-16 flex items-center px-4 gap-x-2'>
        <div
          onClick={() => router.back()}
          className='w-10 h-10 bg-sidebar flex items-center justify-center rounded-xl shadow-md'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 text-white'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
              clipRule='evenodd'
            />
          </svg>
        </div>
        <p className='text-sm font-bold'>Back</p>
      </div>
      <div className='w-full h-full bg-black'></div>
      <div className='bg-white/30 w-full h-24 fixed bottom-0 flex items-center justify-center shadow-md'>
        <Link href={"camera/detail"} passHref>
          <div className='border border-white p-1 w-fit rounded-full'>
            <div className='bg-white rounded-full w-14 h-14 ' />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Camera;
