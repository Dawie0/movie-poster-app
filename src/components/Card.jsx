/* eslint react/prop-types: 0 */
import './card.css'

const Card = ({ movie }) => {
    const releaseYear = movie.Released.split(' ')[2]

    return (
        <div className='col-xs-8 col-md-8'>
            <div className="row r1 glass-morph ">
                <div className="col-4 d-flex justify-content-center align-items-center p-2">
                    <img className='image' src={movie.Poster} />
                </div>
                <div className="col-8 d-flex justify-content-center align-items-center">
                    <div className='row'>
                        <div className="col-12">
                            <h3>{movie.Title}</h3>
                        </div>
                        <div className="col-12">
                            <h5>{movie.Actors}</h5>
                        </div>
                        <div className="col-12">
                            <h5>{`Directed by ${movie.Director} and Released ${releaseYear}`}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}

export default Card