import React from 'react'

function Card(props) {
  return (
      
      <div class="p-12 flex flex-col items-start ">
          <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">{ props.lable}</span>
          <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">{ props.title}</h2>
          <p class="leading-relaxed mb-8">{ props.content}</p>
        
        
      </div>
  )
}

export default Card