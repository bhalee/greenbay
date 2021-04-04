import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { removeItem } from '../../actions/itemsActions';
import { ReductionWallet } from '../../actions/updateUserData';
import './Item.css';

function Item({ match }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const itemId = match.params.id;
  const [item, setItem] = useState({});
  const [activeItem, setActiveItem] = useState(false)
  const [canBuyIt, setCanBuyIt] = useState(false)
  const user = useSelector((state) => state.userData);

  const userToken = localStorage.getItem('token');
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKENDURL}/api/items/${itemId}`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if(data[0] !== undefined){
          setActiveItem(true)
          setItem(data[0]);
          if(user.wallet >= data[0].price){
            setCanBuyIt(true)
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [itemId, userToken, user.wallet]);

  function buyItem(itemId) {
    fetch(`${process.env.REACT_APP_BACKENDURL}/api/buying`, {
      method: 'POST',
      body: JSON.stringify({ itemId }),
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${userToken}`,
      },
    })
      // .then((response) => response.json())
      .then((response) => {
        if(response.ok){
          dispatch(ReductionWallet(item))
          dispatch(removeItem(item));
          history.push('/market');
        } 
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="the-item">
     {activeItem ?  <div className="the-item-inside" key={`item-${item.item_id}`} id={`item-${item.item_id}`}>
        <h1>{item.name}</h1>
        <div className="the-item-info">
          <img src={item.photo_url} alt={item.name}></img>
          <div className="the-item-disc">
              <p>Seller: {item.username}</p>
            <h3>{item.description}</h3>
            <div className="the-item-bottom">
              <p>GB$ {item.price}</p>
              {canBuyIt ? <button onClick={() => buyItem(item.item_id)}>Buy</button> : <div>(You don't have enough credit to buy this item)</div>}
            </div>
          </div>
        </div>
      </div>
      : <div className="the-item-inside"><h1>Item Not Found</h1><h3>Item are not available anymore. </h3></div>}
    </div>
  );
}
export default Item;
