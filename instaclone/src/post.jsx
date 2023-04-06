import React, { useState, useEffect } from 'react'
import './post.css'
import { Link } from 'react-router-dom'
const Post = () => {
  const [data, setData] = useState([])
  console.log(new Date().toLocaleDateString())
  useEffect(() => {
    fetch("https://instaclone-app-9rno.onrender.com/posts")
      .then((res) => { return res.json() })
      .then((val) => {
        console.log(val)
        setData(val)
      }).catch(err => {
        alert("data catch error")
      })
  }, [])


  if (data === null) {
    return (
      <h1>Loading...</h1>
    )
  }
  return (
    <div className='back'>

      <section className='header'>
        <div className='instalogo'><img className='instaLogo' src={require('./Images/circle.jpg')} alt='instaclone logo' /><p>Instaclone</p></div>
        <Link to='/post/add'><img className='camara' src={require('./Images/camera.jpg')} alt='camera Icon' /></Link>
      </section>
      {data.map((val, index) => {

        return (
          <div key={index} className='main-container'>
            <div className='name-container'>
              <section className='name Section'>
                <h4>{val.name}</h4>
                <p>{val.location}</p>
              </section>
          
            </div>
            <section>
              <img className='postImage' src={`https://instaclone-app-9rno.onrender.com/posts/${val.PostImage}`} alt="" />
            </section>
            <div>
              <h4 className='foot'>{val.description}</h4>
            </div>
            <section className='Fav-container'>
              <div>
                <img src={require('./Images/heart.png')} alt='heart' />
                <img src={require('./Images/rocket.jpg')} alt='rocket' />
              </div>
              <p>{new Date().toLocaleDateString()}</p>

            </section>
            <p className='likes'>0 likes</p>

          </div>
        )
      })
      }

    </div>
  )
}
export default Post
