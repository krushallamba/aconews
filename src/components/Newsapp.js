import React, { useEffect, useState } from 'react'
import Card from './Card'
import logoimage from '../aconews-high-resolution-logo-transparent.png'
const Newsapp = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null)

    const getData = async() =>{
        const response = await fetch(`https://gnews.io/api/v4/search?q=${search}&lang=en&country=us&max=10&apikey=3407b8836c91dbdd6521ba638c318a28`);
        const jsonData = await response.json();
        console.log("newsdata", jsonData.articles);
        setNewsData(jsonData.articles)
    }

    useEffect(()=>{
        getData()
    },[])

    const handleInput = (e) =>{
        console.log(e.target.value);
        setSearch(e.target.value)
        
    }
    const userInput = (event) =>{
        setSearch(event.target.value)
    }

  return (
    <div>
        <nav>
            <div className='logo'>
                <img src={logoimage}></img>
            </div>
            <ul style={{display:"flex", gap:"11px"}}>
                {/* <a style={{fontWeight:600, fontSize:"17px"}}>All News</a>
                <a style={{fontWeight:600, fontSize:"17px"}}>Trending</a> */}

            </ul>
            <div className='searchBar'>
                <input type='text' placeholder='Search News' value={search} onChange={handleInput}/>
                <button className='button' onClick={getData}>Search</button>
            </div>
        </nav>
        <div>
            <p className='head'>Latest News</p>
        </div>
        <div className='categoryBtn'>
            <button onClick={userInput} value="sports">Sports</button>
            <button onClick={userInput} value="politics">Politics</button>
            <button onClick={userInput} value="entertainment">Entertainment</button>
            <button onClick={userInput} value="health">Health</button>
            <button onClick={userInput} value="fitness">Fitness</button>
        </div>

        <div>
        {newsData?  <Card data={newsData}/> : <h1 style={{textAlign:'center'}}>No data found</h1>}
            
        </div>
        <div className='footer'>
            <p>Copyright 2024 ACONEWS</p>
        </div>
    </div>
  )
}

export default Newsapp