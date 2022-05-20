import Link from "next/link";
import Image from "next/image";
import fetchJson, { FetchError } from "lib/fetchJson";

import { useRouter } from "next/router";
import { useContext } from "react";

import { GlobalContext } from "context/global";

const ChildMenu = ({q, a, r}) => (
  <Link href={q}>
    <button className={`w-full h-10 flex items-center border-b border-gray-300 pl-8 text-xs ${r === q ? "text-blue-700" : "text-gray-700"} font-bold`}>
      {a}
    </button>
  </Link>
)

const Item = ({ q, a, r }) => (
  <div className="relative overflow-hidden border-b-2 border-white">
    <input type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer" />
    <div className="h-12 w-full pl-5 flex items-center text-gray-600">
        {q}
    </div>
    <div className="absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:-rotate-90">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
    </div>
    <div className="overflow-hidden bg-white transition-all duration-500 max-h-0 peer-checked:max-h-64">
      {a.map((item, key) => <ChildMenu q={item.link} a={item.name} r={r} key={key} />)}
    </div>
  </div>
);

const SideNav = ({ children }) => {

  const { globalCtx, globalAct } = useContext(GlobalContext);

  const router = useRouter();
  const { query } = router;

  const faqs = [
      {
        name: 'Ala Merchant',
        menu: [
          {
            link: '/config/merchant/dashboard',
            name: 'Dashboard'
          },
          {
            link: '/config/merchant/merchant',
            name: 'Merchant'
          },
          {
            link: '/config/merchant/member',
            name: 'Member'
          },
          {
            link: '/config/merchant/transaction',
            name: 'Transaction'
          },
          {
            link: '/config/merchant/log',
            name: 'Log'
          }
        ],
      },
      {
        name: 'Ala Carte',
        menu: [
          {
            link: '/config/carte/dashboard',
            name: 'Dashboard'
          },
          {
            link: '/config/carte/member',
            name: 'Member'
          },
          {
            link: '/config/carte/status',
            name: 'Status'
          },
          {
            link: '/config/carte/log',
            name: 'Log'
          }
        ],
      },
      {
        name: 'Ala Driver',
        menu: [
          {
            link: '/config/driver/dashboard',
            name: 'Dashboard'
          },
          {
            link: '/config/driver/member',
            name: 'Member'
          },
          {
            link: '/config/driver/status',
            name: 'Status'
          },
          {
            link: '/config/driver/log',
            name: 'Log'
          }
        ],
      },
  ];

  const logout = async () => {
    const body = {
      uri: 'bo/logout'
    };
    try {
      const lg = await fetchJson("/api/prot/post", {method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body)})
      router.push("/administration")
    } catch (error) {
      if (error instanceof FetchError) {
        globalAct.setErrorMsg(error.data.message);
      } else {
        globalAct.setErrorMsg("An unexpected error happened");
      }
    }
  }

  return (
    <div className="w-full h-screen flex flex-row">
      <div className="w-80 h-full bg-gray-50 flex flex-col select-none">
        <div className="w-full h-auto flex justify-center items-center">
          <div className="w-52 h-52 p-4">
            <div className="w-full h-full relative rounded-full overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dzfqihfnf/image/upload/v1649379859/nextjs-boilerplate-logo_xdf6ed.png"
                blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                alt="Picture of the author"
                layout='fill'
                objectFit='cover'
                placeholder="blur"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-full overflow-scroll">
          {faqs.map((item, key) => <Item q={item.name} a={item.menu} key={key} r={router.asPath} />)}
        </div>
      </div>
      <div className="w-screen h-full relative">
        <div className="w-full h-20 p-6 absolute top-0 bg-gray-50 border-b shadow flex justify-between">
          <div className="w-full h-auto flex items-center text-sm capitalize">
            <Link href="/config/dashboard">
            <svg className="w-6 h-6 stroke-amber-200 fill-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            </Link>
            &nbsp;• {router.asPath.split("/").at(-2)} • {router.asPath.split("/").at(-1)}
          </div>
          <div className="w-full h-full flex items-center justify-end gap-2 text-xs font-semibold">
            {globalCtx.fullname}
            <div onClick={() => logout()} className="w-6 h-6 rounded-full bg-amber-500  flex justify-center items-center border-2 border-white shadow">
              <svg className="w-4 h-4 stroke-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
            </div>
          </div>
        </div>
        <div className="w-full h-full pt-20">
          {children}
        </div>
      </div>
    </div>
  )
}

export const getLayout = page => <SideNav>{page}</SideNav>;

export default SideNav;
