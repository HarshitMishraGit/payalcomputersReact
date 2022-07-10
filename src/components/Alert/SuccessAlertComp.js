import React from 'react'
import {Alert} from 'flowbite-react'

function SuccessAlertComp(props) {
    // sending this value to the parent to close the alert
    const onDismiss = () => {
        props.dismiss(false)   
    }
  return (
      <div>
            <div>
          <Alert
           color="green"
           withBorderAccent={true}
            onDismiss={onDismiss}
            >
            <span>
                <span className="font-medium">
                {props.exclamation}!
                </span>
                {' '}{props.message}
            </span>
            </Alert>
    </div>
    </div>
  )
}

export default SuccessAlertComp