import { useEffect } from "react"
import Link from "next/link"

let Mail = props => {
  let page = '/index'
  useEffect(()=>{
    document.body.classList.add("bg-white")
  },[])
  return <>
    <div className="flex bg-red-500">
      <div className="flex flex-col w-1/8 h-screen bg-white">
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
  </>
}

export default Mail