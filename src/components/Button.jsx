import React from 'react'

const Button = ({ styles, title, handleClick }) => {
  return (
    <div>
      <button className={styles} onClick={handleClick}>
        {title}
      </button>
    </div>
  )
}

export default Button