import React from "react"
import "./category.css"

const Category = () => {
  return (
    <div className="category">
      <ul className="tabList">
        <li className="tab">
          <a href="/">All</a>
        </li>
        <li className="tab">
          <a href="">React</a>
        </li>
        <li className="tab">
          <a href="">Web</a>
        </li>
        <li className="tab">
          <a href="">Dev</a>
        </li>
        <li className="tab">
          <a href="">Diary</a>
        </li>
      </ul>
    </div>
  )
}

export default Category
