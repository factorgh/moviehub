import { useEffect,useState  } from "react"


export default function MovieDetails({ selectedId,handleCancel }) {
    const [movie, setSelectedMovie] = useState({});
    
    useEffect(function () {
        async function fetchMovieDetail() {
            const res = await fetch(`http://www.omdbapi.com/?apikey=12a93dfa&i=${selectedId}`);
            const data = await res.json();
            console.log(data)
            setSelectedMovie(data)
        }
        fetchMovieDetail();
    }, [selectedId])
    
    useEffect(function () {
        if (!movie.Title) return;
        document.title = `Movie | ${movie.Title}`
        return function () {
            document.title = "Moviehub"
        }
    },[movie.Title])
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection:"column",
            padding: '10px',
            width: "28rem",
            
        }}>
            <div style={{width:"100%",display:"flex",borderRadius:"5px",padding:"10px",height:"10rem",backgroundColor:"black"}}>
                <img src={movie.Poster} alt={movie.Title} style={{
                    width: "10rem",
                    height: "10rem",
                    objectFit:"cover"
                }}/>
                <div style={{
                    color: "white",
                    fontFamily: "roboto",
                    justifyContent: "center",
                    marginLeft:"20px"
                }}>
                    <h3>{movie.Title }</h3>
                    <p>{movie.Released}</p>
                    <p>{movie.genre}</p>
                    <p><span>⭐️</span>
                        
                        {movie.imdbRating}
                    </p>
                    
                </div>
            </div>
            <section style={{
                backgroundColor: "black",
                color: "white",
                width: "28rem",
                padding: "10px",
                marginTop: "20px",
                borderRadius:"10px"
            }}>
                <p><em>
                    {movie.Plot}
                </em></p>
                <h5>Starring : {movie.Actors}</h5>
                <h5>Director : { movie.Director}</h5>
            </section>
            <button onClick={handleCancel}
                style={{
                width: "2rem",
                height: "2rem",
                backgroundColor: "blue",
                borderRadius: "10px",
                color:"white"
            }}>&larr;</button>
        </div>
    )
}