import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { fetchObjectById } from '../Utils/fetchUtils'
import App from '../App';
import { Link, useParams, useLocation } from 'react-router-dom'
import styled from 'styled-components'


const propTypes = {
  id: PropTypes.string
}

const KaijuContainerStyle = styled.nav`
    padding: 8px;
    *{
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    h1{
      text-align: center;
      font-size: 50px;
      position: relative;
      bottom: 60px
    }
    h2{
      text-align: center;
      position: relative;
      bottom: 140px;
    }
    h3{
      text-align: center;
      font-size: 30px;
      position: relative;
      bottom: 110px;
    }
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      border-radius: 50%;
    }
    p{
      text-align: center;
      font-size: 2.0vw;
      position: relative;
      bottom: 150px;
    }
`

class KaijuContainer extends Component {


  constructor(props) {
    super(props)
    this.state = {
      loading: undefined,
      kaiju: {},
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.handleFetch()
  }

  handleFetch() {
    this.setState( { loading: true })
    console.log("window.location", window.location.pathname.split('/')[2])
    fetchObjectById('kaijus', window.location.pathname.split('/')[2])
    .then(res => this.setState({
      kaiju: res.data,
      loading: false
  }))
  }

  render() {
    const {kaiju} = this.state
    return (
          <KaijuContainerStyle>
          <div className='KaijuCard'>
            <img src={kaiju.picture} alt=''></img>
            <audio controls src={kaiju.noise} alt=''></audio>
            <h1>{kaiju.name}</h1>
            <h3>{kaiju.japanese_name}</h3>
            <h2>SPECIES: {kaiju.species}</h2>
            <h2>HEIGHT: {kaiju.height}</h2>
            <h2>WEIGHT: {kaiju.length}</h2>
            <h2>LENGTH: {kaiju.weight}</h2>
            <p>{kaiju.description}</p>
          </div>
          </KaijuContainerStyle>
    )
  }
}

KaijuContainer.propTypes = propTypes
export default KaijuContainer
