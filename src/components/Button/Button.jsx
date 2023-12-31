import PropTypes from 'prop-types'
import css from './Button.module.css'

export const Button = ({onClick})  => {
    return (
      <button className={css['button']} type='button' onClick={onClick}>
        Load more
      </button>
    )
  }

//-------------------
export default Button;
//--------------------

Button.propTypes = {
  onClick: PropTypes.string.func
}