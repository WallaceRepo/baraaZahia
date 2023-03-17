import React from 'react'

const BUTTON_TYPE = {
    incoming: 'incoming-btn',
    order: 'order-btn',
    settings: 'play-again-btn',
    close:'close-btn',
    addproduct: 'add-prod-btn'
}

export default function CustomButton({children, buttonType, ...otherProps}) {
  return (
    <div>
      <button className= {`${BUTTON_TYPE[buttonType]}`}
       {...otherProps}>{children}</button>
    </div>
  )
}
