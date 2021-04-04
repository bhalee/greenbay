import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../actions/itemsActions';
import Input from '../../components/Input/Input';

function AddItemForm() {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      setShowMessage(false);
    };
  }, []);

  const getResponse = (response) => {
    setMessage(response);
    setShowMessage(true);
  };

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [price, setPrice] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const userToken = localStorage.getItem('token');

  const submit = async (e) => {
    e.preventDefault();
    try {
      const postUser = await fetch(`${process.env.REACT_APP_BACKENDURL}/api/items`, {
        method: 'POST',
        body: JSON.stringify({ name, description, photoUrl, price }),
        headers: { 'Content-Type': 'application/json', authorization: `Bearer ${userToken}` },
      });
      if (postUser.status === 201) {
        const response = await postUser.json();
        dispatch(addItem(response));
        getResponse('Your item added to marketplace');
        return;
      }
      const response = await postUser.json();
      getResponse(response.message);
    } catch (error) {
      console.log(error.message);
      getResponse('Connection failed.');
    }
  };

  return (
    <div>
      <form id="add-item-form" onSubmit={submit}>
        <h1>Sell Your Item</h1>
        <div>
          <Input
            divClass="add-item-input"
            labelClass="form-label"
            inputClass="form-input"
            title="Item Name"
            id="input-item-name"
            type="text"
            required="required"
            value={name}
            whenChange={(e) => {
              setName(e.target.value);
            }}
          />

          <Input
            divClass="add-item-input"
            labelClass="form-label"
            inputClass="form-input"
            title="Description"
            id="input-item-description"
            type="text"
            required="required"
            value={description}
            whenChange={(e) => {
              setDescription(e.target.value);
            }}
          />

          <Input
            divClass="add-item-input"
            labelClass="form-label"
            inputClass="form-input"
            title="Image URL"
            id="input-item-photo-url"
            type="url"
            required="required"
            value={photoUrl}
            whenChange={(e) => {
              setPhotoUrl(e.target.value);
            }}
          />
          <Input
            divClass="add-item-input"
            labelClass="form-label"
            inputClass="form-input"
            title="Price"
            id="input-item-price"
            type="number"
            required="required"
            value={price}
            whenChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div id="register-button-div">
          {showMessage ? <div id="register-form-message">{message}</div> : <div> </div>}
          <button id="register-button" type="submit">
            ADD ITEM
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddItemForm;
