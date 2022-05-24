import { useRouter } from "next/router";
import Link from "next/link";
import { Photo } from "./index";
const Detail = () => {
  const takePhoto = () => {
    const width = 414;
    const height = width / (16 / 9);

    let video = videoRef.current;
    let photo = photoRef.current;

    photo.width = width;
    photo.height = height;

    let ctx = photo.getContext("2d");
    ctx.drawImage(video, 0, 0, width, height);
    globalAct.setPresentPhoto(true);
  };

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
      <div className='w-full h-full bg-sidebar p-4 flex flex-col items-center gap-y-2'>
        <div className={`w-full h-full absolute `}>
          <canvas ref={Photo} className={`w-full h-auto`}></canvas>
        </div>
        <div className='w-full'>
          <div className='bg-white w-full h-24 rounded-md p-2 shadow-md space-y-2'>
            <p className='text-sm font-bold text-green-500'>Presensi Datang</p>
            <div className='flex flex-row items-center gap-x-24'>
              <div>
                <p className='text-xs font-bold'>Jam</p>
                <p className='text-xs'>03.55</p>
              </div>
              <div>
                <p className='text-xs font-bold'>Tempat</p>
                <p className='text-xs'>SMKN 1 DENPASAR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white w-full h-24 fixed bottom-0 flex items-center justify-center shadow-md px-4 gap-x-2'>
        <Link href={"/home/camera"} passHref>
          <div className='bg-blue-500 w-full h-10 rounded-full flex items-center justify-center'>
            <p className='text-sm font-bold text-white'>Kembali</p>
          </div>
        </Link>
        <Link href={"/home"} passHref>
          <div className='bg-green-500 w-full h-10 rounded-full flex items-center justify-center'>
            <p className='font-bold text-sm text-white'>Simpan</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Detail;
