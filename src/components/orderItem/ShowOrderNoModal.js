import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'flowbite-react/lib/esm/components';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { GiConfirmed } from 'react-icons/gi';
function ShowOrderNoModal(props) {
    const navigate = useNavigate();
    
   
    const goToLoginHandeler = () => {
      navigate('/myorders');
    }
    // automatically redirect to the orders page 
    setTimeout(() => {
        navigate('/myorders');
    }, 5000);
  return (
    <React.Fragment>
    <Modal
      show={props.show}
      size="lg"
      popup={true}
    >
      {/* <Modal.Header /> */}
      <Modal.Body>
        <div className="text-center py-5">
          <GiConfirmed className="mx-auto mb-4 h-14 w-14 text-green-400 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
           Your Order Successfully recived
                      </h3>
                      <p className='mb-5 text-lg font-bold text-gray-900  dark:text-gray-400'>Order Id : {props.orderId}</p>
                      <p className='mb-5 text-xs font-normal text-gray-500  dark:text-gray-400'>
                          Please check your <strong>email</strong>  for further queries . Thank You!
                      </p>
                      
          <div className="flex justify-center gap-4">
            <Button
              color='purple'
              onClick={goToLoginHandeler}
            >
              My Orders <BsFillArrowRightSquareFill className='mx-2'/>
            </Button>
         
          </div>
        </div>
      </Modal.Body>
    </Modal>
  </React.Fragment>
  )
}

export default ShowOrderNoModal