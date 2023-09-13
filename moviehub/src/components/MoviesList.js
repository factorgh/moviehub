import MoviesListItem from "./MoviesListItem";
import Loader from "./Loader";


export default function MoviesList({ movies, loading,handleClick,selectedId,handleCancel }) {
    

    return (
        <div>
        
            {loading?<Loader/>: movies.map(movie => <MoviesListItem
                movie={movie}
                key={movie.imdbID}
                onClick={handleClick}
                selectedId={selectedId}
                handleCancel={handleCancel}
        
            />)}
      </div>      
    )
} 