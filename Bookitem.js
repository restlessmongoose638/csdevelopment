function BookItem(prop) {
    const updateFavorites = prop.updateFavorites;
    const favorites = prop.favorites;
    const item = prop.item;
    // const author = prop.author;
    // const genre = prop.genre;
    // const age = prop.age;
    // const image = prop.img;
    
    const handleClick = () => {
        item.favorites = true;
        updateFavorites([...favorites, item]);
        console.log(favorites);
    }

    const removeClick = () => {
        item.favorites = false;
        const filteredFavorites = favorites.filter(item => item.favorites);
        console.log(favorites);
        updateFavorites([filteredFavorites]);
        console.log(favorites);

    }


    return (
        <div class ="items">
            <img src={item.img}></img>
            <h3>{item.name}</h3>
            <p>{item.author}</p>
            <p>{item.genre}</p>
            <p>{item.price}</p>
            <p>{item.age}</p>
            <button onClick={handleClick}>Add to Favorites</button>
            <button onClick={removeClick}>Remove from Favorites</button>
        </div>
    );
  }
  
export default BookItem;