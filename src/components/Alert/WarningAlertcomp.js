import React from 'react'
import {Alert} from 'flowbite-react'
function WarningAlertcomp(props) {
   // sending this value to the parent to close the alert
    const onDismiss = () => {
        props.dismiss(false)   
  }
  setTimeout(() => {
    onDismiss();
  }, 2000);
  return (
      <div>
          <Alert
            color="yellow"
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
  )
}

export default WarningAlertcomp