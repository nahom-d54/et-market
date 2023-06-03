import { useState } from "react";
import './search.css'
const Search = () => {
    const [input,setInput] = useState("")
    function handleSearch() {
        console.log(input)
    } 
    return ( <>
        <div className="not-form">
            <input value={input}
             onChange={(e) => setInput(e.target.value)}
             type="text" placeholder="I'm searching for ... "/>
            <button onClick={handleSearch} type="button" className="btn">Search</button>
        </div>
    </> );
}
 
export default Search;