import React from "react";
import '../App.css'
import Carousel from 'react-bootstrap/Carousel'

class HomePage extends React.Component{
    render(){
        return(
            <>
                <Carousel controls={false} indicators={false}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={require("../storage/carousel-item-1.jpg")}
                        alt="First slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={require("../storage/carousel-item-2.jpg")}
                        alt="Second slide"
                        />

                    </Carousel.Item>
                </Carousel>
            </>
        )
    }
}

export default HomePage