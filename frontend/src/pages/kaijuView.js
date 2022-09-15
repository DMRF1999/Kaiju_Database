import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { fetchObjectById } from '../Utils/fetchUtils'

const propTypes = {
  id: PropTypes.string
}

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
          <div className='KaijuCard'>
            <img src={kaiju.picture} alt=''></img>
            <audio controls src={kaiju.noise} alt=''></audio>
            <h1>{kaiju.name}</h1>
            <h3>{kaiju.japanese_name}</h3>
            <h2>Species: {kaiju.species}</h2>
            <h2>Height: {kaiju.height}</h2>
            <h2>Weight: {kaiju.length}</h2>
            <h2>Length: {kaiju.weight}</h2>
            <p>{kaiju.description}</p>
          </div>
    )
  }
}

KaijuContainer.propTypes = propTypes
export default KaijuContainer
