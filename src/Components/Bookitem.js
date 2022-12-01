function BookItem(prop) {
    const { updateFavorites, favorites, item, update, setUpdate } = prop;
    
    const handleClick = () => {
        item.favorites = true;
        favorites.set(item.name, item);
        updateFavorites(favorites);
        setUpdate(!update)
        console.log(favorites);
    }

    const removeClick = () => {
        item.favorites = false;
        favorites.delete(item.name);
        updateFavorites(favorites);
        setUpdate(!update);
        console.log(favorites);

    }


    return (
        <div className="items">
            <img className="image" src={item.img}></img>
            <h3>{item.name}</h3>
            <div className="book-info">
                <div>{item.author}</div>
                <div>{item.genre}</div>
                <div>{item.price}</div>
                <div>{item.age}</div>
            </div>
            
            <button onClick={handleClick}>Add to Favorites</button>
            <button onClick={removeClick}>Remove from Favorites</button>
        </div>
    );
  }
  
export default BookItem;