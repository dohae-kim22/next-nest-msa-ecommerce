import React from "react";

const OrderDetails = async ({ params }) => {
  const { id } = await params;

  return <div>OrderDetails {id}</div>;
};

export default OrderDetails;
