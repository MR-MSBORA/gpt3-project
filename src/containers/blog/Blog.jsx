import React from 'react'
import './blog.css'
import blog01 from '../../assets/blog01.png'
import blog02 from '../../assets/blog02.png'
import blog03 from '../../assets/blog03.png'
import blog04 from '../../assets/blog04.png'
import blog05 from '../../assets/blog05.png'
import Article from '../../components/article/Article'

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id='blog'>
        <div className="gpt3__blog-heading">
          <h1 className="gradient__text">
              A lot is happening, <br /> We are blogging about it.
          </h1>
        </div>
        <div className="gpt3__blog-container">
          <div className="gpt3__blog-container_groupA">
            <Article imgurl={blog01} date="sep 26 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          </div>
          <div className="gpt3__blog-container_groupB">
          <Article imgurl={blog02} date="sep 26 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgurl={blog03} date="sep 26 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgurl={blog04} date="sep 26 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgurl={blog05} date="sep 26 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          </div>
        </div>
    </div>
  )
}

export default Blog