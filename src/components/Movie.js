import PropTypes from 'prop-types';
import {Link} from "react-router-dom"

function Movie({ id, Cover_image, title, summary, genres }){
    return (
        <div>
            <img src={Cover_image} alt="movie_image"/>
            <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    )
}

Movie.propTypes = {
    id:PropTypes.string.isRequired,
    Cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.sting).isRequired,
}

export default Movie;