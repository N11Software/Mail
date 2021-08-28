import { useEffect, useState } from 'react'
import Link from 'next/link'

let Mail = props => {
  let [isMenuShown, setIsMenuShown] = useState(true)
  let page = '/index'
  useEffect(()=>{
    document.body.classList.add("bg-white")
    window.onresize = event => {
      window.innerWidth < 1366 ? setIsMenuShown(false) : setIsMenuShown(true)
    }
    window.innerWidth < 1366 ? setIsMenuShown(false) : setIsMenuShown(true)
  },[])
  return <>
    <div className="flex bg-white">
      <div className={`flex flex-col w-1/8 h-screen bg-white transition-all ${isMenuShown ? '' : 'hide transform -translate-x-56'}`}>
        <div className={`overflow-y-auto overflow-x-hidden h-full opacity-1 ${isMenuShown ? '' : 'opacity-0'}`}>
          <div className="px-6 py-4">
            <Link href="/compose">
              <a className="bg-rose-500 rounded-md text-white px-4 py-2 flex flex-row space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                <span>Compose</span>
              </a>
            </Link>
          </div>

          <div className="flex flex-col mt-10 space-y-6 px-6">
            <Link href="/inbox">
              <a className={`${page == '/index' ? 'font-bold' : 'text-gray-400'} flex flex-row space-x-3`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Inbox</span>
              </a>
            </Link>
            <Link href="/important">
              <a className={`${page == '/important' ? 'font-bold' : 'text-gray-400'} flex flex-row space-x-3`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Important</span>
              </a>
            </Link>
            <Link href="/drafts">
              <a className={`${page == '/drafts' ? 'font-bold' : 'text-gray-400'} flex flex-row space-x-3`}>
                <div className="w-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="w-full">Drafts</span>
                <span className="w-full text-right">9</span>
              </a>
            </Link>
            <Link href="/sent">
              <a className={`${page == '/sent' ? 'font-bold' : 'text-gray-400'} flex flex-row space-x-3`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <span>Sent</span>
              </a>
            </Link>
            <Link href="/trash">
              <a className={`${page == '/trash' ? 'font-bold' : 'text-gray-400'} flex flex-row space-x-3`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <span>Trash</span>
              </a>
            </Link>
          </div>

          <hr className="border-none bg-gray-100 mt-10" style={{height: '2px'}}/>

          <div className="px-6 py-4">
            <div className="flex flex-row">
              <span className="uppercase text-gray-400 font-medium w-full">Labels</span>
              <div className="w-full">
                <Link href="/labels">
                  <a className="border rounded-full p-1 w-6 float-right text-gray-400 hover:text-blue-300 hover:border-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col px-6 mt-2 space-y-6">
            <div className="flex flex-row space-x-4">
              <div className="border-4 h-4 w-4 rounded-full border-red-400 mt-1"></div>
              <span className="text-gray-400">Saved</span>
            </div>

            <div className="flex flex-row space-x-4">
              <div className="border-4 h-4 w-4 rounded-full border-emerald-400 mt-1"></div>
              <span className="text-gray-400">Clients</span>
            </div>

            <div className="flex flex-row space-x-4">
              <div className="border-4 h-4 w-4 rounded-full border-sky-400 mt-1"></div>
              <span className="text-gray-400">Websites</span>
            </div>

            <div className="flex flex-row space-x-4">
              <div className="border-4 h-4 w-4 rounded-full border-indigo-400 mt-1"></div>
              <span className="text-gray-400">Internal</span>
            </div>
          </div>
        </div>
        <div className="p-4 flex flex-col space-y-4">
          <div className="transition-all flex flex-col space-y-4 p-4 rounded-lg shadow-sm">
            <span className="text-gray-400">Loading...</span>
            <div className="h-1 bg-gray-200">
              <span className="h-full block bg-rose-400 relative rounded-full transition-all" style={{width: "100%"}}></span>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="text-gray-400 w-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div onClick={()=>setIsMenuShown(false)} className="text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-1/3 h-screen bg-true-gray-100 p-4">
        <form className="flex flex-row bg-gray-200 rounded-md px-4 py-2 outline-none search-active-form">
          <input type="text" placeholder="Search" className="w-full bg-gray-200 text-gray-400 px-1 rounded-md outline-none search-active-input"/>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mx-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </form>
      </div>

      <div className="flex flex-col w-full h-screen bg-white">
        test
      </div>
    </div>

    {!isMenuShown ? <div onClick={()=>setIsMenuShown(true)} className="p-1 text-gray-400 fixed bottom-4 left-4 shadow rounded bg-white">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
      </svg>
    </div> : <></>}

    <style jsx>{`
    .hide {
      animation-duration: .25s;
      animation-name: hide;
      display: inherit;
      width: inherit;
      animation-fill-mode: forwards;
    }

    @keyframes hide {
      0% {
        display: flex;
      }
    
      99.9% {
        display: none;
        width: 0;
      }
    
      100% {
        display: none;
        width: 0;
      }
    }
    `}</style>
  </>
}

export default Mail