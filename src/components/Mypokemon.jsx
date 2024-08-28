import React from 'react';
import '../components/pokemon.css'

function Mypokemon({pokemons}) {
    return (
         <div id='pokemons'>
         {pokemons.map((pokemon,index)=>(
            <div className='indiv-pk'>
            <div className='text'>
            <h2 className={`name ${pokemon.color}`}>{pokemon.name}</h2>
            <p className='type'>{pokemon.type}</p>
            </div>
            <div className='pk-img-div'><img src={pokemon.imgUrl} alt="" /></div>
            </div>
         ))}
         </div>
    )}
export default Mypokemon;