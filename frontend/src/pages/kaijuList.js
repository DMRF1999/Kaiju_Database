import React, { Component, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import DataCard from './dataCard'
import { fetchObjects } from '../Utils/fetchUtils'

const propTypes = {
  page: PropTypes.number,
}

const defaultProps =
{
page: 1
}


class kaijuList extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      loading: undefined,
      kaijus: [],
      page: 1,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    window.scrollTo(0, 0)
    this.handleFetch(nextProps.page, nextProps.term)
    // console.log("UNSAFE_componentWillReceiveProps")
  }

  componentDidMount() {
    this.handleFetch(this.state.page, this.props.term)
    // console.log("componentDidMount", this.state.page, this.props.term)
  }

  handlePageChange(pageNumber) {
    // console.log(`?page=${pageNumber}`)
    this.props.setPage(pageNumber)
    this.props.history(`?page=${pageNumber}`)
  }


  handleChange(event) {
    this.setState({inputTerm: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.history(`?query=${this.state.inputTerm}`)
  }

  handleFetch() {
    this.setState( { loading: true })
    fetchObjects('kaijus')
    .then(res => this.setState({
      kaijus: res.data,
      loading: false
    },console.log(res.data)))
  }

  render() {
    const {kaijus, loading } = this.state
    return (
      <div>
        <h1>Kaiju List</h1>
          {kaijus.map(({id, name, picture, japanese_name}, i) => (
              <DataCard
                key={i}
                id={id}
                name={name}  
                picture={picture}
                japanese_name={japanese_name}
                baseLink={'/kaijus'}
              />
          ))}
      </div>
    )
  }

}

kaijuList.propTypes = propTypes
kaijuList.defaultProps = defaultProps
export default kaijuList