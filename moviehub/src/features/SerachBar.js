const style = {
    width: "15rem",
    height: "2rem",
    marginTop:"20px"
    
}

export default function SearchBar({query,setQuery}) {
    return (
        <input type="text"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            style={style}
            placeholder="Search movies ..."
        />
    )
}