import PropTypes from 'prop-types'

const Cards = ({ children, bg = 'red' }) => {
  //red is the default if any colour is passed then it overwrites
  // console.log(bg)

  return (
    <div className={`bg-${bg}-100 p-6 rounded-lg shadow-md`}>{children}</div>
  )
}

Cards.propTypes = {
  children: PropTypes.node.isRequired,
  bg: PropTypes.string.isRequired,
}

export default Cards
