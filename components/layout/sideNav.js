import Link from "next/link";
import fetchJson, { FetchError } from "lib/fetchJson";

import { useRouter } from "next/router";

import { useContext, useState, useEffect, useMemo } from "react";
import { GlobalContext } from "context/global";

const SideNav = ({ children }) => {
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

  const { globalCtx, globalAct } = useContext(GlobalContext);
  const router = useRouter();

  const Loggedout = async () => {
    const body = {
      uri: "bo/logout",
    };
    try {
      const lg = await fetchJson("/api/prot/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      router.push("/administration");
    } catch (error) {
      if (error instanceof FetchError) {
        globalAct.setErrorMsg(error.data.message);
      } else {
        globalAct.setErrorMsg("An unexpected error happened");
      }
    }
  };
  return (
    <div className='w-full h-full '>
      <div
        onClick={() => globalAct.setSideBar(false)}
        className={`lg:hidden ${
          globalCtx.sideBar ? "" : "hidden"
        } bg-black bg-opacity-60 absolute z-30 w-full h-screen`}
      />

      <div className='w-full flex flex-row h-screen'>
        <div
          className={`z-30 fixed md:absolute lg:relative h-screen bg-sidebar flex flex-col select-none duration-500 ${
            globalCtx.sideBar
              ? "w-10/12 md:w-80 lg:w-80 translate-x-0"
              : "w-0 left-0 -translate-x-full"
          }`}
        >
          <div className='w-full h-16 flex justify-start items-center'>
            <div className='w-20 h-16 p-4'>
              <div className='w-full h-full relative flex items-center rounded-full '>
                <button
                  onClick={() => globalAct.setSideBar(!globalCtx.sideBar)}
                  className={`duration-500 ${
                    globalCtx.sideBar
                      ? "bg-white"
                      : "bg-gradient-to-tr from-green-500 to-green-400"
                  } w-10 h-10 rounded-xl flex items-center justify-center shadow-md`}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className={`h-5 w-5 duration-500 ${
                      globalCtx.sideBar ? "text-darkBlue" : "text-white"
                    }`}
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    {globalCtx.sideBar ? (
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4 6h16M4 12h16M4 18h16'
                      />
                    ) : (
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4 6h16M4 12h16M4 18h16'
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div
            className={`overflow-hidden w-full h-full flex flex-col items-center justify-between p-2 space-y-2 duration-500 ${
              globalCtx.sideBar ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className='flex flex-col gap-y-2 w-full'>
              <Link href={"/home/bantuan"} passHref>
                <div className='bg-white w-full p-2 rounded-md flex items-center gap-x-2 border-l-4  border-gray-500 shadow-md'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-blue-500'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <p>Bantuan</p>
                </div>
              </Link>
            </div>
            <div className='flex flex-col gap-y-2 w-full'>
              <div className='bg-red-500/50 w-full p-2 rounded-md flex items-center gap-x-2 border-l-4  border-red-500 shadow-md'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 text-red-500'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z'
                    clipRule='evenodd'
                  />
                </svg>
                <p className='text-white'>Logget out</p>
              </div>
              <div className='bg-white w-full p-2 rounded-md flex items-center gap-x-2 border-l-4  border-gray-500 shadow-md'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 text-blue-500'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                    clipRule='evenodd'
                  />
                </svg>
                <p>Bantuan</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-full h-full ${
            globalCtx.sideBar
              ? "overflow-y-hidden fixed md:fixed lg:relative md:overflow-auto"
              : "relative"
          }`}
        >
          <div
            className={`w-full h-16 duration-500 fixed top-0 backdrop-blur-sm flex items-center justify-center px-4${
              scrolling ? "bg-white/50" : "bg-white"
            }`}
          >
            <div className='w-full h-full gap-2 text-sm font-semibold flex items-center justify-end'>
              <div>
                <img src='/img/sidebar.svg' />
              </div>
            </div>
          </div>
          <div className='w-full h-full pt-16'>
            <div>{children}</div>
          </div>
          {useMemo(() => {
            return (
              <div
                className={`bg-white h-20 fixed bottom-0 w-full flex-row flex justify-around rounded-t-3xl`}
              >
                <Link href={"/home"} passHref>
                  <div
                    className={`duration-150 ease-in flex items-center justify-center flex-col ${
                      router.asPath === "/home"
                        ? "-translate-y-4"
                        : "translate-y-0"
                    }`}
                  >
                    <div className='bg-white w-10 h-10 rounded-xl flex items-center justify-center shadow-md'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-8 w-8 text-green-500'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
                      </svg>
                    </div>
                    <p className='text-xs text-green-500 font-bold'>Home</p>
                  </div>
                </Link>
                <Link href={"/home/tugas"} passHref>
                  <div
                    className={`duration-150 flex items-center justify-center flex-col  ${
                      router.asPath === "/home/tugas"
                        ? "-translate-y-4"
                        : "translate-y-0"
                    }`}
                  >
                    <div className='bg-white w-10 h-10 rounded-xl flex items-center justify-center shadow-md'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-8 w-8 text-blue-500'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path d='M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z' />
                      </svg>
                    </div>

                    <p className='text-xs text-blue-500 font-bold'>Tugas</p>
                  </div>
                </Link>
                <Link href={"/home/aktivitas"} passHref>
                  <div
                    className={`duration-150 flex items-center justify-center flex-col  ${
                      router.asPath === "/home/aktivitas"
                        ? "-translate-y-4"
                        : "translate-y-0"
                    }`}
                  >
                    <div className='bg-white w-10 h-10 rounded-xl flex items-center justify-center shadow-md'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-8 w-8 text-orange-500'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path d='M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z' />
                      </svg>
                    </div>
                    <p className='text-xs text-orange-500 font-bold'>
                      Aktivitas
                    </p>
                  </div>
                </Link>
                <Link href={"/home/profile"} passHref>
                  <div
                    className={`duration-150 flex items-center justify-center flex-col  ${
                      router.asPath === "/home/profile"
                        ? "-translate-y-4"
                        : "translate-y-0"
                    }`}
                  >
                    <div className='bg-white w-10 h-10 rounded-xl flex items-center justify-center shadow-md'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-8 w-8 text-violet-500'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                    <p className='text-xs text-violet-500 font-bold'>Profile</p>
                  </div>
                </Link>
              </div>
            );
          }, [router.asPath])}
        </div>
      </div>
    </div>
  );
};

export const getLayout = (page) => <SideNav>{page}</SideNav>;

export default SideNav;
