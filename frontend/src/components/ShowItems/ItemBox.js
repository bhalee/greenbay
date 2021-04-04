import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ItemBox() {
  const availableItems = useSelector((state) => state.item.items);
  const user = useSelector((state) => state.userData.userId);

  function descRedaction(description) {
    if (description.length > 160) {
      return description.substring(0, 160) + '...';
    }
    return description;
  }
  return (
    <div id="show-items-box">
      {availableItems.map((item) => {
        if(item.owner_id !== user){
          return (
            <div className="item-box" key={`item-${item.item_id}`} id={`item-${item.item_id}`}>
              <div className="items-photo">
                <img src={item.photo_url} alt={item.name}></img>
              </div>
              <div className="items-desc">
                <Link to={`/market/${item.item_id}`}>
                  <h1>{item.name}</h1>
                </Link>
                <div className="items-info">
                  <p>GB$ {item.price}</p>
                  <p>Seller: {item.username}</p>
                </div>
                <h3>{descRedaction(item.description)}</h3>
              </div>
            </div>
          );
        }
        // eslint-disable-next-line array-callback-return
        return;
      })
    }
    </div>
  );
}

export default ItemBox;
