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

  return (
    <div className="container">
      <ShelfForm />
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <ul>
        {store.shelfItems.map((shelfItems) => {
          return (
            <li key={shelfItems.id}>{shelfItems.description}<img className="itemImage" src={shelfItems.image_url}></img></li> 
          )
        })}
      </ul>
    </div>
  );
}

export default ShelfPage;

