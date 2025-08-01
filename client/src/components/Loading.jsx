import React from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

const Loading = () => {
  const {nextUrl} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if(nextUrl) {
      setTimeout(() => {
        navigate('/' + nextUrl);
      }, 8000)
    }
  },[]) 

  return (
    <div className='flex justify-center items-center h-[100vh]'>
       <div className='animate-spin rounded-full h-15 w-15 max-md:h-13 max-md:w-13 border-2 border-t-primary'>
       </div>
    </div>
  )
}

export default Loading
