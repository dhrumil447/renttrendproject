import React from 'react'
import ImageSlider from './ImageSlider'
import { Card, Col, Container, Row } from 'react-bootstrap'
// import Homee from '/src/assets/images/img1.jpg'
// import Footer from './Footer'


  const images = [
    {url:"./src/assets/images/product.jpg",text: "acs"},
    {url:"./src/assets/images/product1.jpg",text: "img2"},
    {url:"./src/assets/images/product2.jpg",text: "img3"},
    ]



const Home = () => {
  return (
    <>
      <ImageSlider/>
      <Container  className='mt-5 mb-4 d-flex justify-content-center' style={{backgroundColor:""}}>

        <Row className='mt-5'>
          <Col xs={6} md={2}>
            <Card style={{width:"150px",height:"150px",borderRadius:"50%",backgroundColor:"",marginBottom:"60px"}}>
              <Card.Img variant='top' src='src/assets/images/img2.jpg' style={{borderRadius:"50%"}}/>
                <Card.Body>
                  <Card.Title className='text-center fs-6'>New Arivals</Card.Title>
                </Card.Body>
              </Card>
          </Col>

          <Col xs={6} md={2}>
            <Card style={{width:"150px",height:"150px",borderRadius:"50%",backgroundColor:"",marginBottom:"60px"}}>
              <Card.Img variant='top' src='src/assets/images/img3.jpg' style={{borderRadius:"50%"}}/>
                <Card.Body>
                  <Card.Title className='text-center fs-6'>Lehengas</Card.Title>
                </Card.Body>
              </Card>
          </Col>

          <Col xs={6} md={2}>
            <Card style={{width:"150px",height:"150px",borderRadius:"50%",backgroundColor:"",marginBottom:"60px"}}>
              <Card.Img variant='top' src='src/assets/images/img4.jpg' style={{borderRadius:"50%"}}/>
                <Card.Body>
                  <Card.Title className='text-center fs-6'>Ready To Wear</Card.Title>
                </Card.Body>
              </Card>
          </Col>

          <Col xs={6} md={2}>
            <Card style={{width:"150px",height:"150px",borderRadius:"50%",backgroundColor:"",marginBottom:"60px"}}>
              <Card.Img variant='top' src='src/assets/images/img5.jpg' style={{borderRadius:"50%"}}/>
                <Card.Body>
                  <Card.Title className='text-center fs-6'>Kurtis</Card.Title>
                </Card.Body>
              </Card>
          </Col>

          <Col xs={6} md={2}>
            <Card style={{width:"150px",height:"150px",borderRadius:"50%",backgroundColor:"",marginBottom:"60px"}}>
              <Card.Img variant='top' src='src/assets/images/img6.jpg' style={{borderRadius:"50%"}}/>
                <Card.Body>
                  <Card.Title className='text-center fs-6'>Bottems</Card.Title>
                </Card.Body>
              </Card>
          </Col>

          <Col xs={6} md={2}>
            <Card style={{width:"150px",height:"150px",borderRadius:"50%",backgroundColor:"",marginBottom:"60px"}}>
              <Card.Img variant='top' src='src/assets/images/img7.jpg' style={{borderRadius:"50%"}}/>
                <Card.Body>
                  <Card.Title className='text-center fs-6'>Accessories</Card.Title>
                </Card.Body>
              </Card>
          </Col>
        </Row>
      </Container>

      <h1 className='mt-5 text-center'>Explore Collection</h1>

      <Container fluid>
      <Row className='mt-4 d-flex justify-content-center gap-5'>
      {images.map((img,index)=>(
          <Col xs={6} md={2} key={index} style={{marginRight:"100px"}}>
            <img style={{width:"350px", height:"450px"}} src={img.url}></img>
          </Col>
         
           ))
          }
           </Row>
        </Container>
    </>
  )
}

export default Home
