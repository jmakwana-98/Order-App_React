import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../store/actions'; 

interface Order {
  id: number;
  firstName: string;
  lastName: string;
  description: string;
  quantity: number;
}

interface AppState {
  orders: Order[];
}

const Home = () => {
  const dispatch = useDispatch(); 
  const orders: Order[] = useSelector((state: AppState) => state.orders);// get the orders from the state
  const handleDelete = (id: number) => {
    dispatch(deleteItem(id));
  };

  return (
    <div>
      <h1>Order List</h1>
      <ul>
        {orders.map((order: Order) => {
          if ('id' in order && typeof order === 'object') { // type guard: check if order has an 'id' property and is an object
            const { id, firstName, lastName, description, quantity } = order; // destructure the Order properties
            return (
              <li key={id}>
                <span>{firstName} {lastName}</span>
                <span> - {description}</span>
                <span> - {quantity}</span>
                <button onClick={() => handleDelete(id)}>Delete</button>
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
    </div>
  );
};

export default Home;
