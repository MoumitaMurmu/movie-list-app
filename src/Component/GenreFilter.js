import React from 'react'

const GenreFilter = (props) => {
  return (
    <div className='table-head'>
      <h2 className='genre-heading'>Filter by Genre</h2>
      <div className='genre-button'>
            {props.genres.map((genre) => (
                <button  key={genre} onClick={() => console.log('Filtering by'+" " + genre)}>
                {genre}
                </button>
             ))}
      </div>
      
    </div>
  )
}

export default GenreFilter;