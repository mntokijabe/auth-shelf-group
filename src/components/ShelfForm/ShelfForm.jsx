import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function ShelfForm () {

    const dispatch = useDispatch();

    let [itemToAdd, setItemToAdd] = useState({description: '', image_url: '', user_id: 0 })

    const user = useSelector((store) => store.user )

    const handleDescriptionChange = (event) => {
        setItemToAdd({
            ...itemToAdd,
            description: event.target.value
        });
    }

    const handleImageChange = (event) => {
        setItemToAdd({
            ...itemToAdd,
            image_url: event.target.value
        });
    }

    const addItem = (event) => {
        event.preventDefault();

        setItemToAdd({
            ...itemToAdd,
            user_id: user.id
        });
        console.log('in the addItem function and our payload is: ', itemToAdd, user.id)

        dispatch({
            type: 'ADD_ITEM',
            payload: itemToAdd
        })
    }



    return (
        <div>
            <h2>Add Item to Shelf:</h2>
            <form onSubmit={(event) => addItem(event)}>
                <input 
                    onChange={handleDescriptionChange}
                    type = 'text'
                    placeholder = 'Item Description'
                    value = {itemToAdd.description}
                />

                <input 
                    onChange={handleImageChange}
                    type = 'text'
                    placeholder = 'Item Image URL'
                    value = {itemToAdd.image_url}
                />

                <button type='submit'>Submit</button>
            </form>
        </div>

    )

}

export default ShelfForm;