import React, { useState} from 'react';
import { Modal, Button } from 'flowbite-react/lib/esm/components';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

function Modalcomp(props) {
    const [show, setshow] = useState(true);
  
    const onCloseShowHandeler = () => {
       props.dismiss({logout:false})
    }
    const onLogoutHandeler = () => {
        props.dismiss({logout:true})
    }

  return (
    <React.Fragment>
  {/* <Button onClick={onClickShowHandeler}>
    Toggle modal
  </Button> */}
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
          Are you sure you want to Logout?
        </h3>
        <div className="flex justify-center gap-4">
          <Button
            color="red"
            onClick={onLogoutHandeler}
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

export default Modalcomp