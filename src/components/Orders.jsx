import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {

  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/orders/user-orders");
      setOrders(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Orders</h2>

      {orders.length === 0 ? (
        <p>No Orders Found</p>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            style={{
              border: "1px solid #ccc",
              marginBottom: "15px",
              padding: "10px",
            }}
          >
            <h4>Order ID: {order._id}</h4>
            <p>Status: {order.status}</p>

            <h5>Products:</h5>

            {order.products.map((item, index) => (
              <div key={index}>
                <p>{item.name}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;