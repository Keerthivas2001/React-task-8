import { Badge, Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function Task2() {
  //state hook
  const data = [
    {
      productImage:
      "https://images.squarespace-cdn.com/content/v1/58b045e1725e25829e8a701c/1550878312553-EZJM6RAT86BETQ3K61ST/deep-work-cal-newport-cover.jpg",
      productName: "Deep Work",
      price: 450,
      rating: 4.3,
    },
    {
      productImage:
        "https://leoberrygifts.com/wp-content/uploads/2022/06/Atomic-Habits-by-James-Clear.jpg",
      productName: "Atomic Habits",
      price: 500,
      rating: 4.5,
    },
    {
      productImage:
        "https://rochizalani.com/wp-content/uploads/2021/04/psychology-of-money-930x620.jpg",
      productName: "The Psychology of Money",
      price: 350,
      rating: 3.9,
    },
    {
      productImage:
        "https://1.bp.blogspot.com/-aUoOct8TnYs/XyEaerfZHEI/AAAAAAAAAk4/G8vSOXpYDI88SDcZRe5SZCtyMxkJ_14KgCLcBGAsYHQ/s1302/20200729_121145.jpg",
      productName: "The Secret",
      price: 600,
      rating: 4.5,
    },
    {
      productImage:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81tEgsxpNZS.jpg",
      productName: "As A Man Thinketh",
      price: 400,
      rating: 3.5,
    },
    {
      productImage:
        "https://www.adorebooks.in/wp-content/uploads/2022/01/Ikigai.png",
      productName: "Ikigai",
      price: 350,
      rating: 3.5,
    },
    {
      productImage:
        "https://i0.wp.com/mrusbooksnreviews.com/wp-content/uploads/2021/09/Think-Again-Cover.jpg?fit=1500%2C1383&ssl=1",
      productName: "Think Again",
      price: 500,
      rating: 4,
    },
    {
      productImage:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71H9cA7MvxS.jpg",
      productName: "The Art of War",
      price: 600,
      rating: 4.5,
    },
    {
      productImage:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/813uPMOnskL.jpg",
      productName: "You Can",
      price: 450,
      rating: 3,
    },
    {
      productImage:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41SfgtP0qGL.jpg",
      productName: "Think Straight",
      price: 400,
      rating: 4.5,
    },

  ];

  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <div className="cart-value">
      <Badge bg="primary">
      🛒CART {count}
      </Badge>
      </div>

     <div className="card-container">
      {data.map((prod, idx)=> <Cards
      idx = {idx}
      prod = {prod}
      setCount= {setCount}
      count = {count}
      />)}

      </div>
    </div>
  );
}

export default Task2;

function Cards({prod, idx, setCount, count}){
  const [show, setShow] = useState(false);

  function addToCart(){
    setShow(!show)
    setCount(count + 1)
  }

  function removeFromCart(){
    setShow(!show)
    setCount(count - 1)
  }

  return (
      <Card key = {idx} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={prod.productImage} />
        <Card.Body>
          <Card.Title>{prod.productName}</Card.Title>
          <Card.Text> Price: {prod.price}Rs</Card.Text>
          <Card.Text>Rating: {prod.rating} ⭐</Card.Text>
      

         {!show ? <Button
           variant="primary"
           onClick={addToCart}
           >Add cart</Button> : ""} 


            {show ? <Button 
           variant="danger"
           onClick={removeFromCart}
           >remove cart</Button> : ""}

        </Card.Body>
      </Card>
  )
}