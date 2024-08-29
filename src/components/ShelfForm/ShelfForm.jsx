import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function ShelfForm () {

    const dispatch = useDispatch();

    //fetches the user object from redux
    //The object keys are id and username
    const user = useSelector((store) => store.user )

    let [itemToAdd, setItemToAdd] = useState({description: '', image_url: '', user_id: user.id })

    
    //This function sets the description key in the itemToAdd variable
    const handleDescriptionChange = (event) => {
        setItemToAdd({
            ...itemToAdd,
            description: event.target.value
        });
    }

    //This function sets the image_url key in the itemToAdd variable
    const handleImageChange = (event) => {
        setItemToAdd({
            ...itemToAdd,
            image_url: event.target.value
        });
    }

    //The addItem function is called when the submit button is clicked
    const addItem = (event) => {
        event.preventDefault();

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