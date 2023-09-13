import "../features/menuItem.css"

const style = {
    width: "25rem",
    height: "120px",
    border:"1px solid #888888",
    borderRadius: "5px",
    marginTop:"10px",
    boxShadow: " 3px 3px white",
    display: "flex",
    padding: "15px",
}
const style2 = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "10px",
    marginLeft: "5px",
}

export default function MoviesListItem({ movie ,onClick,selectedId,handleCancel}) {
    
    return (
        <div style={style} id="menuItem"
            className={`${selectedId === movie.imdbID ? 'active' : ""}`}
            onClick={() =>selectedId=== movie.imdbID ?handleCancel():  onClick(movie.imdbID)
        } >
            <img src={movie.Poster} alt="No movie poster" style={{
                width: "100px",
                height: "110px",
                objectFit:"cover"
                
            }} />
            <div style={style2}>
                <h3 style={{
                    color: "white",
                    fontFamily:"robot"
                }}>{movie.Title}</h3>
                <h3 style={{color:"rgb(100,80,100)" ,fontFamily:"roboto"}} >{movie.Year }</h3>
            </div>
        </div>
    )
}