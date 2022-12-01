import logo from './logo.svg';
import './App.css';
import React from "react";
import { useEffect, useState } from "react";
import BookItem from "./Components/Bookitem"; 
import { Aggregator } from './Components/Aggregator';

const BookData = [
  {name: "Anna Karenina", author: "Tolstoy", 
  genre: "Fiction", age: "Adult", price: 12.99, img: "./images/annakarenina.jpeg", favorites: false}, 
  {name: "Moby Dick", author: "Melville", 
  genre: "Fiction", age: "Adult", price: 16.99, img: "./images/mobydick.jpeg", favorites: false}, 
  {name: "Olivia", author: "Falconer", 
  genre: "Fiction", age: "Children", price: 8.99, img: "./images/olivia.jpeg", favorites: false}, 
  {name: "The Hunger Games", author: "Collins", 
  genre: "Fiction", age: "YA", price: 9.99, img: "./images/hungergames.jpeg", favorites: false}, 
  {name: "Devotions", author: "Oliver", 
  genre: "Poetry", age: "Adult", price: 10.99, img: "./images/devotions.jpeg", favorites: false}, 
  {name: "Ways of Seeing", author: "Berger", 
  genre: "Nonfiction", age: "Adult", price: 9.99, img: "./images/waysofseeing.jpeg", favorites: false},
  {name: "Harold and the Purple Crayon", author: "Johnson", 
  genre: "Fiction", age: "Children", price: 8.99, img: "./images/harold.jpeg", favorites: false}, 
  {name: "The Fault in Our Stars", author: "Green", 
  genre: "Fiction", age: "YA", price: 9.99, img: "./images/tfios.jpeg", favorites: false}, 
  {name: "All About Love", author: "hooks", 
  genre: "Nonfiction", age: "Adult", price: 10.99, img: "./images/allaboutlove.jpeg", favorites: false}, 
  {name: "Bluets", author: "Nelson", 
  genre: "Poetry", age: "Adult", price: 10.99, img: "./images/bluets.jpeg", favorites: false}, 
  {name: "The Color Purple", author: "Walker", 
  genre: "Fiction", age: "Adult", price: 12.99, img: "./images/colorpurple.jpeg", favorites: false},
  {name: "Zami", author: "Lorde", 
  genre: "Nonfiction", age: "Adult", price: 12.99, img: "./images/zami.jpeg", favorites: false}, 
]

const sortOptions = [
  {value: "By Title"}, 
  {value: "By Author"}
]

const App = () => {
  
  const [favorites, setFavorites] = useState(new Map());
  const [age, setAge] = useState(["Children", "YA", "Adult"]);
  const [genre, setGenre] = useState(["Fiction", "Poetry", "Nonfiction"]);
  const [currentBooks, setCurrentBooks] = useState(BookData);
  const [update, setUpdate] = useState(false);
  
  const getPrice = () => {
    let sum = 0;
    favorites.forEach((val, key) => sum += val.price);
    return sum;
  }

  function sortTitle() {
    let sortedBooks = currentBooks.sort(function(a,b){
      return a.name.localeCompare(b.name);
  })
    setCurrentBooks([...sortedBooks])
}

  function sortAuthor() {
    let sortedBooks = currentBooks.sort(function(a,b){
      return a.author.localeCompare(b.author);
  })
  setCurrentBooks([...sortedBooks])
  }

  function matchesGenre(prop, g) {
    if (g === prop.genre) {
      return true;
    }
    return false; 
  } 

  function matchesAge(prop, a) {
    if (a === prop.age) {
      return true;
    }
    return false; 
  } 

  function getBooks() {

    const newList = [];

    currentBooks.forEach((book) => {
      let alreadyAdded = false;
      genre.forEach((g) => {
        age.forEach((a) => {
          if (matchesAge(book, a) && matchesGenre(book, g) && !alreadyAdded) {
            alreadyAdded = true;
            newList.push(book);
          };
        })
        
      })
    })

    return newList.map((item, index) => ( 
      <BookItem item={item} key={index} setUpdate={setUpdate} update={update} favorites={favorites} updateFavorites={setFavorites}/>
    ))
  }

  function updateAgeFilterList(filter) {
    if (age.includes(filter)) {
      const filterIndex = age.indexOf(filter);
      age.splice(filterIndex, 1);
      setAge(age);
      setUpdate(!update);
    } else {
      const newList = age.concat([filter]);
      setAge(newList);
      setUpdate(!update);
    }
  }

  function ageFilterAll() {
    if (age.length === 3) {
      setAge([]);
      setUpdate(!update);
    } else {
      setAge(["Children", "YA", "Adult"]);
      setUpdate(!update)
    }
  }



  function updateGenreFilterList(filter) {
    if (genre.includes(filter)) {
      const filterIndex = genre.indexOf(filter);
      genre.splice(filterIndex, 1);
      setGenre(genre);
      setUpdate(!update);
    } else {
      const newList = genre.concat([filter]);
      setGenre(newList);
      setUpdate(!update);
    }
  }
    
  function genreFilterAll() {
    if (genre.length === 3) {
      setGenre([]);
      setUpdate(!update);
    } else {
      setGenre(["Fiction", "Poetry", "Nonfiction"]);
      setUpdate(!update)
    }
  }

  function getFavorites() {
    const favoritesList = [];
    console.log(favorites)
    favorites.forEach((val, key) => {
      favoritesList.push(<p key={key}>{key} | ${val.price}</p>)
    })
    console.log(favoritesList)
    return favoritesList
  }

  return (
    <div className="App">
      <div className="page-left">
        <h1>Best Books!!!!</h1>
        <div class="items-wrapper">
          {getBooks()}
        </div>
      </div>
      <div className="page-right">
      <h2>Filters</h2> 

    <div class="radiobuttons">
      <label>
          <input type="radio" name = "sort" onClick={() => {sortTitle(); console.log(currentBooks)}}/>
          By Title 
      </label>     
      <label>
          <input type="radio" name = "sort" onClick={() => {sortAuthor(); console.log(currentBooks)}}/>
          By Author 
      </label>  
    </div>

    <div class="checkboxes">
      <p>By Age </p>
      <label>
          <input type="checkbox" checked={age.includes("Children")} name = "filter" onClick={() => {updateAgeFilterList("Children"); console.log(age);}}/>
          Children
      </label>     
      <label>
          <input type="checkbox" checked={age.includes("YA")} name = "filter" onChange={() => {updateAgeFilterList("YA"); console.log(age);}}/>
          YA
      </label> 
      <label>
          <input type="checkbox" checked={age.includes("Adult")} name = "filter" onChange={() => {updateAgeFilterList("Adult"); console.log(age);}}/>
          Adult
      </label> 
      <label>
          <input type="checkbox" checked={age.length === 3} name = "filter" onChange={() => {ageFilterAll(); console.log(genre);}}/>
          All
      </label> 
      <p>By Genre </p>
    <label>
          <input type="checkbox" checked={genre.includes("Fiction")} name="filter" onChange={() => updateGenreFilterList("Fiction")}/>
          Fiction
      </label>     
      <label>
          <input type="checkbox" checked={genre.includes("Poetry")} name="filter" onChange={() => updateGenreFilterList("Poetry")}/>
          Poetry
      </label> 
      <label>
          <input type="checkbox" checked={genre.includes("Nonfiction")} name="filter" onChange={() => updateGenreFilterList("Nonfiction")}/>
          Nonfiction
      </label> 
      <label>
          <input type="checkbox" checked={genre.length === 3} name = "filter" onChange={() => genreFilterAll()}/>
          All
      </label> 
    </div>
    <Aggregator getFavorites={getFavorites} getPrice={getPrice}/>

      </div>

      
      
      
    
    </div>
  );
}

export default App;
