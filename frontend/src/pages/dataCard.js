import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  picture: PropTypes.string,
  japanese_name: PropTypes.string
}

const ContainerStyle = styled.nav`
  
  .content{
    text-align: center;
    font-size: 30px;
    position: relative;
  }
    .link:hover{
    color: #f90;
    text-decoration: underline;
    }
    
`

const DataCard = ({ id, name, picture, japanese_name, baseLink }) => (
  <ContainerStyle>
  <div className='content'>
  <div className='card-wrapper'>
    <div className='card-inner'>
      <h2 className='link'><Link to={{pathname: `${baseLink}/${id}/`, state: id,}}>
      <div className='card-title'>{name}</div>
      </Link></h2>
      <div className='card-description'>
        {japanese_name}
      </div>
    </div>
  </div>
  </div>
  </ContainerStyle>
)

DataCard.propTypes = propTypes
export default DataCard