import React from 'react';
import Mypokemon from './Mypokemon';
import '../components/gallery.css'

function Pokegallery(props) {
    let pokemons =[{name:"Charizard",type:"Fire",imgUrl:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png",color:"orange"},
        {name:"Gengar",type:"Poison",imgUrl:"https://assets.pokemon.com/assets/cms2/img/pokedex/full//094.png" ,color:"purple"},
        {name:"Arcanine",type:"Fire",imgUrl:"https://img.pokemondb.net/artwork/large/arcanine.jpg" ,color:"orange"},
        {name:"Bulbasaur",type:"Grass",imgUrl:"https://assets.pokemon.com/assets/cms2/img/pokedex/full//001.png",color:"green"},
        {name:"Squirtle",type:"Water",imgUrl:"https://assets.pokemon.com/assets/cms2/img/pokedex/full//007.png" ,color:"blue"},
    ]
    return (
        <div id='container'>
            <div className='sec' id='title-div'>
            <div><img id='icon' src="https://i.pinimg.com/originals/5a/9b/9d/5a9b9d580cef8ecfe154ae5a0e789949.png" alt="" /></div>
            <h1>Pokemon Gallery</h1>
            </div>
            <div className='sec'>
            <Mypokemon pokemons={pokemons}/>
            </div>
        </div>
    );
}

export default Pokegallery;  