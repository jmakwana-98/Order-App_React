import { addItem, deleteItem } from './actions';
import { Order } from './actions';

interface OrderState {
  orders: Order[];
}

const initialState: OrderState = {
  orders: [],
};

const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

export const orderReducer = (state = initialState, action: { type: string; payload: Order | number }) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, orders: [...state.orders, action.payload] };
    case DELETE_ITEM:
      return { ...state, orders: state.orders.filter((_, index) => index !== action.payload) };
    default:
      return state;
  }
};