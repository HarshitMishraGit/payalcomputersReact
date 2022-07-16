import React from 'react';
import { Spinner } from 'flowbite-react';

function Loadingcomp() {
  return (
      <div className='flex flex-row justify-center items-center z-10 fixed inset-0 bg-black bg-opacity-25 '>
          
        <p className='text-lg text-orange-400 text-center'>Loading ...</p>
          <Spinner
              className=''
        aria-label="Extra large spinner example"
        size="xl"
    />
    </div>
  )
}

export default Loadingcomp