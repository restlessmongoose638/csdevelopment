import logo from './logo.svg';
import './App.css';
import React from "react";
import { useEffect, useState } from "react";
import BookItem from "./Components/Bookitem"; 

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


// const adultBooks = BookItem => {
//   // all items should be shown when no filter is selected
//   if(=== "All") { 
//     return true
//   } else if ("Adult" === BookItem.age) {
//     return true
//   } else {
//     return false
//   }
// }

function App() {
  
  const [favorites, setFavorites] = useState([]);
  const [total, setTotal] = useState(0);
  const [age, setAge] = useState("All");
  const [currentBooks, setCurrentBooks] = useState(BookData);
  // const [sortedData, setSortedData] = useState([currentBooks]);
  
  const updatePrice = () => {
    let sum = 0;
      favorites.forEach( i => sum += i.price);
      setTotal(sum);
  }

  useEffect(() => {
      updatePrice();
      loadBooks();
  })

  function stackFilters() {
    function filterAge() {
      const filteredAge = currentBooks.filter(i => matchesAge(i));
        // console.log("type");
        // console.log(i.age);
      currentBooks = filteredAge;
      console.log(filteredAge);
    }
  }

  function sortTitle() {
    setCurrentBooks(currentBooks.sort(function(a,b){
      return a.name.localeCompare(b.name);
  }))
  }

  function sortAuthor() {
    setCurrentBooks(currentBooks.sort(function(a,b){
      return a.author.localeCompare(b.author);
  }))
  }

  function loadBooks () {
    {currentBooks.map((item, index) => ( 
      <BookItem item={item} key={index} favorites={favorites} updateFavorites={setFavorites} total={total} setTotal={setTotal}/>
      ))}
  }

  function selectFilterType() {
    return null;
  }

  function matchesAge(prop) {
    if (age === "All") {
      return true;
    }
    else if (age === prop.age) {
      return true;
    }
    else {
      return false; 
    }
  } 

  // function matchesGenre(prop) {
  //   if (type === "All") {
  //     return true;
  //   }
  //   else if (type === prop.genre) {
  //     return true;
  //   }
  //   else {
  //     return false; 
  //   }
  // } 



  // function filterGenre() {
  //   currentBooks.filter(i => matchesAge(i.genre));
  // }
    
  return (
    <div className="App">
      <h1>Best Books!!!!</h1>
      <div class="wrapper">
        {currentBooks.map((item, index) => ( 
        <BookItem item={item} key={index} favorites={favorites} updateFavorites={setFavorites} total={total} setTotal={setTotal}/>
        ))}
      </div>
      
      <div class="favorites">
      <h2>Favorites</h2>
      {favorites.map((e, i) => <p key={i}>{e.name}</p>)}
      <h4>Total: $
        {total}</h4>
      </div>
    
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
          <input type="checkbox" name = "filter" onClick={() => {setAge("Children"); console.log(age); stackFilters()}}/>
          Children
      </label>     
      <label>
          <input type="checkbox" name = "filter" onClick={() => {setAge("YA"); console.log(age); stackFilters()}}/>
          YA
      </label> 
      <label>
          <input type="checkbox" name = "filter" onClick={() => {setAge("Adult"); console.log(age); stackFilters()}}/>
          Adult
      </label> 
      <label>
          <input type="checkbox" name = "filter" onClick={() => {setAge("All"); console.log(age); stackFilters()}}/>
          All
      </label> 
    </div>
    
    </div>
  );
}

export default App;
