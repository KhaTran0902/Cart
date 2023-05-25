import { useContext } from "react";
import "./Home.css";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { AppConText } from "../../AppConText";
import ProductCard from "../../components/ProductCard";
export default function Home() {
  const { productData } = useContext(AppConText);

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Row className="justify-content-center">
          {productData &&
            productData.map((item, index) => (
              <ProductCard data={item} key={index} />
            ))}
        </Row>
      </Row>
    </Container>
  );
}
