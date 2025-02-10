import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      {/* a태그 사용시 index.html 파일이 재실 행 --> 권장x */}
      <a href="/about">About으로 이동</a>
      <br />
      <Link to="/about">About으로 이동2</Link>
    </div>
  )
}

export default Home