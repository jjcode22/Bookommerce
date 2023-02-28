import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://ebatesville.com/wp-content/uploads/2019/02/March-Book-Sale-Banner.png"
          alt="Second slide"
          height='400px'
        />
    
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/hand-drawn-literature-facebook-cover_23-2149721058.jpg?w=2000"
          alt="Second slide"
          height='400px'
        />

      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="https://ebatesville.com/wp-content/uploads/2019/02/March-Book-Sale-Banner.png"
          alt="Second slide"
          height='400px'
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;