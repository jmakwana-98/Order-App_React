// src/components/common/OrderList.tsx
import React, { Fragment } from 'react';

interface Order {
  id: number;
  fullName: string;
  description: string;
  quantity: number;
}

interface OrderListProps {
  orders: Order[];
}

const OrderList = ({ orders }: { orders: any[] }) => {
  return (
    <Fragment>
      {orders.map((order) => (
        <div key={order.id}>{order.fullName} - {order.description} ({order.quantity})</div>
      ))}
    </Fragment>
  );
};

export default OrderList;
