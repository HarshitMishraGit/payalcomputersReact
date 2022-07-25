import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'flowbite-react/lib/esm/components';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { GiConfirmed } from 'react-icons/gi';
function SuccessfullyRegisteredModal(props) {
    const navigate = useNavigate();
    
   
    const goToLoginHandeler = () => {
      navigate('/');
      navigate('/auth');
    }
    // automatically redirect to the orders page 
    setTimeout(() => {
        navigate('/')
        navigate('/auth');
    }, 5000);
  return (
    <React.Fragment>
    <Modal
      show={props.show}
      size="lg"
      popup={true}
    >
      <Modal.Body>
        <div className="text-center py-5">
          <GiConfirmed className="mx-auto mb-4 h-14 w-14 text-green-400 dark:text-gray-200" />
          
                      <p className='mb-5 text-lg font-bold text-gray-900  dark:text-gray-400'>Hello {props.name} !</p>
                      <p className='mb-5 text-xs font-normal text-gray-500  dark:text-gray-400'>
                         You are Successfully Registered.
                      </p>
                      
          <div className="flex justify-center gap-4">
            <Button
              color='purple'
              onClick={goToLoginHandeler}
            >
              Login <BsFillArrowRightSquareFill className='mx-2'/>
            </Button>
         
          </div>
        </div>
      </Modal.Body>
    </Modal>
  </React.Fragment>
  )
}

export default SuccessfullyRegisteredModal