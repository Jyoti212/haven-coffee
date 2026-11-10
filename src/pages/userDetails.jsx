import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function UserDetails() {
  const { id } = useParams()
  const { data: user, loading, error } = useFetch(id ? `https://jsonplaceholder.typicode.com/users/${id}` : null)

  if (loading) return <div style={{ padding: 40 }}>Loading user...</div>
  if (error) return <div style={{ padding: 40, color: 'red' }}>Error: {error}</div>
  if (!user) return <div style={{ padding: 40 }}>User not found</div>

  return (
    <div style={{ padding: 40 }}>
      <div className="container">
        <h1 style={{ color: '#3e2723' }}>{user.name}</h1>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
        <p><strong>Company:</strong> {user.company?.name}</p>
        <p><strong>Address:</strong> {user.address?.suite}, {user.address?.street}, {user.address?.city} ({user.address?.zipcode})</p>
      </div>
    </div>
  )
}
