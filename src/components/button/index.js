import React from 'react'
import PropTypes from 'prop-types'
import styles from './button.module.css'

const Button = ({ children }) => (<div className={styles.button}>
  {children}
</div>
)

export default Button

Button.propTypes = {
  children: PropTypes.node
}
