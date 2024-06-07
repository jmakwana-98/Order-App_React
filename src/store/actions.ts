// Constants
export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  DELETE_ITEM = 'DELETE_ITEM',
}

// Interfaces
export interface Order {
  firstName: string;
  lastName: string;
  description: string;
  quantity: number;
}

export interface AddItemAction {
  type: ActionTypes.ADD_ITEM;
  payload: Order;
}

export interface DeleteItemAction {
  type: ActionTypes.DELETE_ITEM;
  payload: number;
}

// Union type for actions
export type OrderAction = AddItemAction | DeleteItemAction;

// Action creators
export function addItem(order: Order): AddItemAction {
  return { type: ActionTypes.ADD_ITEM, payload: order };
}

export function deleteItem(index: number): DeleteItemAction {
  return { type: ActionTypes.DELETE_ITEM, payload: index };
}
