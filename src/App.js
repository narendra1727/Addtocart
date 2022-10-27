
import './App.css';
import {useState,useEffect} from "react";
import { findByLabelText } from '@testing-library/react';


let data=[
  {
    "Id":1,
    "sale": "",
    "itemType": "Fancy Product",
    "img":"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    "starCount": 0,
    "price": {
      "oldPrice": "",
      "newPrice": "$40.00 - $80.00"
    },
    "buttonName": "View options"
  },
  {
    "sale": "sale",
    "itemType": "Special Item",
    "img":"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    "starCount": 5,
    "price": {
      "oldPrice": "$20.00",
      "newPrice": "$18.00"                                         
    },
    "buttonName": "Add to cart"
  },
  {
    "sale": "sale",
    "itemType": "Sale Item",
    "img":"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    "starCount": 0,
    "price": {
      "oldPrice": "$50.00",
      "newPrice": "$25.00"
    },
    "buttonName": "Add to cart"
  },
  {
    "sale": "",
    "itemType": "Popular Item",
    "img":"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    "starCount": 5,
    "price": {
      "oldPrice": "",
      "newPrice": "$40.00"
    },
    "buttonName": "Add to cart"
  },
  {
    "sale": "sale",
    "itemType": "Sale Item",
    "img":"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    "starCount": 0,
    "price": {
      "oldPrice": "$50.00",
      "newPrice": "$25.00"
    },
    "buttonName": "Add to cart"
  },
  {
    "sale": "",
    "itemType": "Fancy Product",
    "img":"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    "starCount": 0,
    "price": {
      "oldPrice": "",
      "newPrice": "$120.00 - $280.00"
    },
    "buttonName": "View options"
  },
  {
    "sale": "sale",
    "itemType": "Special Item",
    "img":"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    "starCount": 5,
    "price": {
      "oldPrice": "$20.00",
      "newPrice": "$18.00"
    },
    "buttonName": "Add to cart"
  },
  {
    "sale": "",
    "itemType": "Popular Item",
    "img":"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    "starCount": 5,
    "price": {
      "oldPrice": "",
      "newPrice": "$40.00"
    },
    "buttonName": "Add to cart"
  }
];


function App() {
  // let count=0;
  const [count,setCount]=useState(0);
  const [menu,setMenu]=useState(false);
  const [icon,setIcon]=useState(false);
  const [size,setSize]=useState(window.innerWidth);

  

  let styles={display : menu ? "block" : "none" }
  let styles1={ display : icon ? "flex" : "none" }

  let dimension=()=>{
    setSize(window.innerWidth);
  };

  useEffect(()=>{
    window.addEventListener('resize',dimension);
    if(size > 950 ){
      setIcon(true);
    }else if(size < 949){
      setIcon(false)
    }
  },[size]);  
  return (
    
    <div className="App">
      <nav>
        <div className="button-navbar">
          <div className="menus">
            <div className="stboot">
              <b>Start Bootstrap</b>
            </div>
            <div className="navbar" style={styles1}>
              <a>Home</a>
              <a>About</a>
              <div className="right-menu">
                <a className="menu" onClick={()=>setMenu(!menu)} >Shop</a>
                <div className="menu-items" style={styles}>
                  <a href="#">All Products</a><br />
                  <hr />
                  <a href="#">Popular Items</a><br />
                  <a href="#">New Arrivals</a>
                </div>
              </div>
              <div className="nav-button">
                <button>Cart {count}</button>
              </div>
            </div>
            
          </div>
          <div className="icon">
            <img className="menuicon" src="https://cdn1.iconfinder.com/data/icons/ionicons-outline-vol-2/512/menu-outline-512.png" alt='menuicon' onClick={()=>setIcon(!icon)}/>
          </div>
        </div>
      </nav>
      <header className="header">
        <h1 Style="font-size:45px;">Shop in style</h1>
        <p>With this shop homepage template</p>
      </header>
      <div className="card-data">
        {data.map((carddata,index)=> <Addtocard carddata={carddata} key={index} count={count} setCount={setCount} index1={index} /> )}
      </div>
      <footer>
        <div className="footer1">
          <h4>Copyright © Your Website 2022</h4>
        </div>
      </footer>
    </div>
  );
};

function Addtocard({ carddata,count,setCount }){
  const [update,setUpdate]=useState(true);
  
  let value=carddata.buttonName;
  function counter(){
    console.log(value)
    if(value !== "View options"){
      if(value === "Add to cart"){
        setCount(count + 1);
      }else{
        setCount(count - 1);
      }
      
      setUpdate(!update);
      
    }
  }
  return(
    <div className="card">
      <img className="image1" src={carddata.img} alt={carddata.itemType} />
      <br></br>
      <div className="data1" >
        <h2>{carddata.itemType}</h2>
        {carddata.starCount === 5 ? <p>⭐⭐⭐⭐⭐</p> : <p><br/></p>}
        {carddata.price.oldPrice.length > 0 ? <s>{carddata.price.oldPrice}</s> : "" }{carddata.price.newPrice.length > 0 ? <b>{carddata.price.newPrice}</b> : ""}
        <br/>
        <br/>
        
        <a className="click1" href="#" onClick={counter}>{ update  ?  value : value="Remove from Cart" }</a>
      </div>

      

    </div>
  )
}

export default App;
