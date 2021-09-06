import React from "react"
import Tour from "./Tour"

const Tours = (props) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      {props.tours.map((tour) => {
        return (
          <Tour
            key={tour.id}
            id={tour.id}
            name={tour.name}
            info={tour.info}
            image={tour.image}
            price={tour.price}
            removeTour={props.removeTour}
          />
        )
      })}
    </section>
  )
}

export default Tours
