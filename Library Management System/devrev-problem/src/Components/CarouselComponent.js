import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

function CarouselComponent(){
    return(
        <div>
            <div className='container-fluid' style={{width:910,height:525,marginTop:'5px',border:"2px dotted black"}}>
            <Carousel variant="dark">

                <Carousel.Item interval={1500}>
                    <img className="d-block w-100" src="/images/image-1.png" alt="Image_Not_Found - 1" />
                    <Carousel.Caption style={{color:"black"}}>
                        <h1 >Library Management System</h1>
                        <p>Helps libraries with their data management process. It <b style={{color:'blue'}}>automates</b> many of the tasks that are usually done by a <b style={{color:"blue"}}>Librarian</b></p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={1500}>
                    <img className="d-block w-100" src="/images/image-3.png" alt="Image_Not_Found - 2"/>
                    <Carousel.Caption style={{color:"Black"}}>
                        <h2>Importance of Library Management System</h2>
                        <p>It eases the work of Librarian and Users. Library Management System not only improves <b style={{color:'blue'}}>data accuracy</b> but also develops maintainability and <b style={{color:'blue'}}>productivity</b></p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={1500}>
                    <img className="d-block w-100" src="/images/image-4.png" alt="Image_Not_Found - 3"/>
                    <Carousel.Caption style={{color:"black"}}>
                        <h1>Benefits of Library Management System</h1>
                        <p>1. Simple and Easy to use 2. Access to Online and Offline Storage 3.Increased Efficieny and <b style={{color:'blue'}}>Record Maintenance</b> </p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
            </div>

            <center style={{marginTop:"10px"}}>
                <a className="btn btn-primary btn-lg" href="/Library">Search Book</a>
            </center>
        </div>
        
        
    )
}

export default CarouselComponent;
