import * as A from "./style"
import Code from '../../assets/Poster.png'

const poster = import.meta.env.VITE_IMG

function Movie({movie}) {

  return (
    

        <>
          {movie.status_code === 34 || movie.adult == true ?(
            <A.BoxError>
            <img src={Code} alt="Foto de Dev" />
            <p className="textBoxError">Ops, hoje não é dia de assistir filme. Bora codar!!</p>
            </A.BoxError>            
          ) 
        : (<A.ContainerMovie>
        <img src={poster + movie.poster_path} alt="Foto do Filme" />
    <div>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
    </div>
    </A.ContainerMovie>)} 
    
    </>

  )
}

export default Movie