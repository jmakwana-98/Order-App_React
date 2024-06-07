import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/actions';
import { useNavigate } from 'react-router-dom';

const NewItem: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isValid = () => {
    return (
      lastName.length > 0 &&
      lastName.length <= 20 &&
      description.length > 0 &&
      description.length <= 100 &&
      quantity >= 1 &&
      quantity <= 20 &&
      firstName.length <= 20
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid()) {
      dispatch(addItem({ firstName, lastName, description, quantity }));
      navigate('/');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name (Optional)</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          maxLength={20}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          maxLength={20}
          required
        />
      </div>
      <div>
        <label>Order Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={100}
          required
        />
      </div>
      <div>
        <label>Quantity</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min={1}
          max={20}
          required
        />
      </div>
      <button type="submit" disabled={!isValid()}>Submit</button>
    </form>
  );
};

export default NewItem;
