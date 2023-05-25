import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { AppConText } from "../AppConText";
export default function ProductCard(props) {
  let { price, title, image,id } = props.data;
  const { addToCart } = useContext(AppConText);
   const addCart = () => {
    addToCart(props.data)
   }

  return (
    <Card
      style={{ width: "18rem", height: "auto" }}
      className={`text-center p-0 overflow-hidden shadow mx-auto mb-4`}
    >
      <div
        style={{
          height: "15rem",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "15rem" }}>
          <Card.Img variant="top" src={image} className="img-fluid" />
        </div>
      </div>
      <Card.Body>
        <Card.Title
          style={{
            textOverflow: "elipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {title}
          
        </Card.Title>
        <Card.Title>
          $ <span className="h3">{price}</span>
        </Card.Title>

        <Button onClick={() => addCart(id)}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}
