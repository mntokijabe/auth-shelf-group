import ShelfForm from '../ShelfForm/ShelfForm';
import React, {useEffect} from 'react';
import useReduxStore from '../../hooks/useReduxStore';
import { useDispatch } from 'react-redux';

function ShelfPage() {
  const dispatch = useDispatch()
  const store = useReduxStore()

useEffect (() => {
    dispatch({ type: 'GET_ITEMS'})
},[]);

  const handleDelete =(itemId) => {
    dispatch({ type: 'DELETE_ITEM', payload:itemId})
  }

  const handleEdit = (object) => {
    dispatch({
      type: 'EDIT_ITEM',
      payload: object
    })
  }

  return (
    <div className="container">
      <ShelfForm />
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <ul>
        {store.shelfItems.map((shelfItems) => {
          return (
            <li key={shelfItems.id}>
              {/* <input value={shelfItems.description}></input> */}
              <img className="itemImage" src={shelfItems.image_url}></img>
              <button type="submit" onClick={() => {handleEdit({id: shelfItems.id, description: shelfItems.description})}}>EDIT</button>
              <button type="submit" onClick={() => {handleDelete(shelfItems.id)}}>Delete</button>
              </li> 
          )
        })}
      </ul>
    </div>
  );
}

export default ShelfPage;

