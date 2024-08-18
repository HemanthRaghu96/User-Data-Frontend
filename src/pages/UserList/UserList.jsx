import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { api } from '../../api/api'

const UserList = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    getUserData()
  }, [])

  const getUserData = async () => {
    try {
      const token = localStorage.getItem('token')
      const email = localStorage.getItem('email')
      const response = await axios.get(`${api}/users/users`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      const userData = response.data.find(user => user.email === email)
      setUser(userData)
      console.log(userData)
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen ">
      {user ? (
        <div className="max-w-sm  bg-white shadow-md rounded-lg p-6 w-[300px]">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 bg-white">User Details</h2>
          <div className="mb-2 bg-white">
            <span className="font-medium text-gray-600 bg-white">First Name:</span>
            <span className="text-gray-800 ml-2 bg-white">{user.firstName}</span>
          </div>
          <div className="mb-2 bg-white">
            <span className="font-medium text-gray-600 bg-white">Last Name:</span>
            <span className="text-gray-800 ml-2 bg-white">{user.lastName}</span>
          </div>
          <div className="mb-2 bg-white">
            <span className="font-medium text-gray-600 bg-white">Email:</span>
            <span className="text-gray-800 ml-2 bg-white">{user.email}</span>
          </div>
          <div className="mb-2 bg-white">
            <span className="font-medium text-gray-600 bg-white">Mobile:</span>
            <span className="text-gray-800 ml-2 bg-white">{user.mobile}</span>
          </div>
        </div>
      ) : (
        <div className="text-gray-700">No user found</div>
      )}
    </div>
  )
}

export default UserList
