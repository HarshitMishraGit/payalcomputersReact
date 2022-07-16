import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'flowbite-react/lib/esm/components';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
function LoginToOrderModal(props) {
  const navigate = useNavigate();
  const [show, setshow] = useState(true);
  
  const onCloseShowHandeler = () => {
    props.dismiss(true);
  }
  const goToLoginHandeler = () => {
    navigate('/auth');
  }

  return (
    <React.Fragment>
    <Modal
      show={props.show}
      size="md"
      popup={true}
      onClose={onCloseShowHandeler}
    >
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
           Please Login To Continue ...
          </h3>
          <div className="flex justify-center gap-4">
            <Button
              color="red"
              onClick={goToLoginHandeler}
            >
              Yes, I'm sure
            </Button>
            <Button
              color="dark"
              onClick={onCloseShowHandeler}
            >
              No, cancel
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  </React.Fragment>
  )
}

export default LoginToOrderModal