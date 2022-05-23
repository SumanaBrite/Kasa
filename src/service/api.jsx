import React, { useState, useEffect } from 'react'

export default function Housing() {
  const [Users, fetchUsers] = useState([])

  const getData = () => {
    fetch('http://localhost:8080/housing')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        fetchUsers(res)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <h2>React Fetch API Example</h2>
      <ul>
        {Users.map((item, i) => {
          return <li key={i}>{item.name}</li>
        })}
      </ul>
    </>
  )
}