import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import backgroundImage from './css/City_Landscape_Background.webp'

const AboutStyle = styled.nav`
p {
    text-align: center;
    font-size: 50px;
    position: relative;
    bottom: 15px;
    color: black;
    font-weight: bold;
}
.home{
    color: black;
    font-size: 1.5vw;
    font-size: 30px;
    text-decoration: none;
    position: fixed;
    left: 0%;
    top: 0%;
  }
  .home:hover
{
    color: #f90;
    text-decoration: underline;         
}
img{
    position: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
  }
`

class About extends Component {

  render() {
    return (
    <AboutStyle>
      <div>
        <h2><Link to='/' className='home'>Home</Link></h2>
       <p>This database was put together by the Earth Defense Force / Global Defense Force in order to document known kaiju information.  We have publicized this data in order to further inform and protect citizens of our planet Earth, so that they may better be prepared if under threat of a kaiju disaster.</p>
      </div>
    </AboutStyle>
    )
  }

}

export default About