import SearchBar from "../features/SerachBar";


export default function Menu({query,setQuery,movies}) {

    const style = {
        backgroundColor: "rgb(100,225,100)",
        display: "flex",
        flexDirection: "row",
        margin:"20px",
        justifyContent: "space-between",
        padding:"10px"
        
        
    }
    return (
        <>
            <nav style={style}>
                <h1><span>🏂 </span>MovieHub</h1>
                <SearchBar setQuery={setQuery} query={query} />
                <h3 style={{color:"white"}}><span>found  </span> {!movies? 0:movies.length } <span>results</span></h3>
         </nav>
        </>
    );
}