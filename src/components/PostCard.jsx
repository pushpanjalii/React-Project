import React from 'react'
import appwriteService from '../appwrite/config.js';
import {Link} from 'react-router-dom';

function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
      <div className='border p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300'>
        <div className='mb-4'>
            <img
              src={appwriteService.getFilePreview(featuredImage)}
              alt={title}
              className='w-full h-48 object-cover rounded-md' />
            </div>
            </div>

    </Link>
  )
}

export default PostCard