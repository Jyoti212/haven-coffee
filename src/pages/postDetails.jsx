import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function PostDetails() {
  const { id } = useParams()
  const { data: post, loading, error } = useFetch(id ? `https://jsonplaceholder.typicode.com/posts/${id}` : null)

  const userUrl = post?.userId ? `https://jsonplaceholder.typicode.com/users/${post.userId}` : null
  const { data: author, loading: authorLoading } = useFetch(userUrl)

  if (loading || authorLoading) return <div style={{ padding: 40 }}>Loading post...</div>
  if (error) return <div style={{ padding: 40, color: 'red' }}>Error: {error}</div>
  if (!post) return <div style={{ padding: 40 }}>Post not found</div>

  return (
    <div style={{ padding: 40 }}>
      <div className="container">
        <h1 style={{ color: '#3e2723' }}>{post.title}</h1>
        <p style={{ color: '#3e2723' }}>{post.body}</p>
        {author && (
          <div style={{ marginTop: 20, padding: 16, border: '1px solid #e5e4e7', borderRadius: 8 }}>
            <h3>Author</h3>
            <p><strong>Name:</strong> {author.name}</p>
            <p><strong>Email:</strong> {author.email}</p>
            <p><strong>Phone:</strong> {author.phone}</p>
            <p><strong>Company:</strong> {author.company?.name}</p>
            <p><strong>Address:</strong> {author.address?.suite}, {author.address?.street}, {author.address?.city} ({author.address?.zipcode})</p>
          </div>
        )}
      </div>
    </div>
  )
}
