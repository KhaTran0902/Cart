import { Children, useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { AppConText } from "../../AppConText";
import "./Cart.css";
import { useCart } from "react-use-cart";
export default function Cart() {
  const { cart } = useContext(AppConText);
  


return (
  <Table responsive="sm" striped bordered hover variant="dark">
    <tbody>
      {cart.map((item, index) => {
        return (
          <tr key={index}>
            <td>
              <div
                style={{
                  background: "#333333",
                  height: "8rem",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{ padding: ".5rem" }}>
                  <img
                    className="image_cart"
                    src={item.image}
                    style={{ width: "4rem" }}
                    alt={item.id}
                  />
                  {item.price}
                </div>
                <h1>{item.title}</h1>
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  </Table>

 
);
}