import fetch from 'isomorphic-fetch'
import * as React from 'react';

const BASE_URL = 'http://localhost:8000/api'

function fetchResponseByURL(relativeURL, queryString) {
    return fetch(`${BASE_URL}/${relativeURL}/?${queryString}`)
      .then(res =>
        res.json()
        .then(console.timeEnd())
      )
      .catch(error => console.error(error))
  }
  
  export function fetchObjectById(resource, id) {
    return fetchResponseByURL(`${resource}/${id}`).then(res => {
      console.log("fetchObjectById",`${resource}/${id}/`, res);
      return {
        data: res
      }
    })
  }
  
  export function fetchObjects(resource, queryParams = {}) {
    const queryString = Object
      .keys(queryParams)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
      .join('&')
    return fetchResponseByURL(resource, queryString).then(res => {
      return {
        data: res
      }
    })
  }