import React, { useState } from "react"

const Tour = (props) => {
  const [readMore, setReadMore] = useState(true)
  return (
    <article className="single-tour">
      <img src={props.image} alt={props.name} />
      <footer>
        <div className="tour-info">
          <h4>{props.name}</h4>
          <h4 className="tour-price">{props.price}</h4>
        </div>
        <p>
          {readMore ? `${props.info.substring(0, 200)}...` : props.info}
          <button
            onClick={() => {
              setReadMore((prevState) => {
                return !prevState
              })
            }}
          >
            {readMore ? "Read More" : "Show Less"}
          </button>
        </p>
        <button
          className="delete-btn"
          onClick={() => {
            props.removeTour(props.id)
          }}
        >
          Not Interested
        </button>
      </footer>
    </article>
  )
}

export default Tour
