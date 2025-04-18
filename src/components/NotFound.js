import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center dark:bg-slate-700 duration-700">
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
           <div className="max-w-md">
              <div className="text-5xl font-dark font-bold dark:text-gray-200 ">404</div>
                <p
                  className="text-2xl md:text-3xl font-light leading-normal dark:text-gray-200 "
                >Sorry we couldn't find this page. </p>
              <p className="mb-8 dark:text-gray-200 ">But dont worry, you can find plenty of other things on our homepage.</p>
              
              <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700" onClick={()=>{navigate('/')}}>back to homepage</button>
        </div>
          <div className="max-w-lg">
          <img src={process.env.PUBLIC_URL + "notfound.png"} className="w-[70%] md:w-[100%] h-[50%] cursor-pointer duration-1000 "></img>
        </div>
        
      </div>
    </div>
  )
}

export default NotFound