import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  picture: PropTypes.string,
  japanese_name: PropTypes.string
}

const DataCard = ({ id, name, picture, japanese_name, baseLink }) => (
  <div className='content'>
  <div className='card-wrapper'>
    <div className='card-inner'>
      <Link to={{pathname: `${baseLink}/${id}/`, state: id,}}>
      <div className='card-title'>{name}</div>
      </Link>
      <div className='card-description'>
        {japanese_name}
      </div>
    </div>
  </div>
  </div>
)

DataCard.propTypes = propTypes
export default DataCard