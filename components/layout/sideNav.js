import Link from "next/link";
import fetchJson, { FetchError } from "lib/fetchJson";

import { useRouter } from "next/router";

import { useContext } from "react";
import { GlobalContext } from "context/global";

const SideNav = ({ children }) => {
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
          <div className='w-full h-auto flex justify-start items-center'>
            <div className='w-20 h-20 p-4'>
              <div className='w-full h-full relative flex items-center rounded-full'>
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
          {/* <div className='w-full h-full bg-darkBlue'>
            {faqs.map((item, key) => (
              <Item q={item.name} a={item.menu} key={key} r={router.asPath} />
            ))}
          </div> */}
          <div className='overflow-hidden w-full h-full flex flex-col items-center'>
            <div>Profile</div>
            <div>Profile</div>
            <div>Profile</div>
            <div>Profile</div>
          </div>
        </div>
        <div
          className={`w-full h-full ${
            globalCtx.sideBar
              ? "overflow-y-hidden fixed md:fixed lg:relative md:overflow-auto"
              : "relative"
          }`}
        >
          <div className='w-full h-20 fixed top-0 bg-white bg-opacity-50 backdrop-blur-sm flex items-center justify-center px-4'>
            {/* <div className='w-full flex flex-row items-center gap-4'>
              <div className='w-full pl-10 h-auto flex items-center text-sm capitalize'>
                <Link href='/dashboard/admn' passHref>
                  <button>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6 text-blue-500'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
                    </svg>
                  </button>
                </Link>
                &nbsp;• {router.asPath.split("/").at(-2)} •{" "}
                {router.asPath.split("/").at(-1)}
              </div>
            </div> */}
            <div className='w-full h-full gap-2 text-sm font-semibold flex items-center justify-end'>
              {/* <div className='flex flex-row items-center justify-end gap-2 w-full '>
                <p className='text-right pr-8'>Hi, {globalCtx.fullname}</p>
                <button
                  onClick={() =>
                    globalCtx.modal === ""
                      ? globalAct.setModal("openProfileModal")
                      : globalAct.setModal("")
                  }
                  className={`w-6 h-6 rounded-full   flex justify-center items-center border-2 border-white duration-500 shadow-md absolute z-50 ${
                    globalCtx.modal !== ""
                      ? "scale-125 rotate-180 bg-red-500"
                      : "scale-100 bg-blue-500"
                  }`}
                >
                  {globalCtx.modal == "" ? (
                    <svg
                      className='w-4 h-4 stroke-white'
                      fill='none'
                      stroke='white'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M13 5l7 7-7 7M5 5l7 7-7 7'
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4 text-white'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  )}
                </button>
              </div> */}
              <div>
                <img src='/img/sidebar.svg' />
              </div>
            </div>
          </div>
          <div className='w-full h-full pt-20'>
            <div>{children}</div>
          </div>
          <div className='bg-white bg-opacity-50 backdrop-blur-sm h-14 fixed bottom-0 w-full'>
            <div className=''></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getLayout = (page) => <SideNav>{page}</SideNav>;

export default SideNav;
