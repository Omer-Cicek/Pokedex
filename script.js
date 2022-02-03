const searchInput = document.querySelector('#poke-input');
const searchBtn = document.querySelector('.btn-search');
const pokeContainer = document.querySelector('.poke-container');
const pokeCount = 151;

const colors = {
  fire: `#FDDFDF`,
  grass: `#DEFDE0`,
  electric: `#FCF7DE`,
  water: `#DEF3FD`,
  ground: `#f4e7da`,
  rock: `#d5d5d4`,
  fairy: `#fceaff`,
  poison: `#98d7a5`,
  bug: `#f8d5a3`,
  dragon: `#97b3e6`,
  psychic: `#eaeda1`,
  flying: `#e4e4c1`,
  fighting: `#E6E0D4`,
  normal: `#F5F5F5`,
};
//CALLING EVERY POKEMON
const initPokemon = async () => {
  for (let i = 1; i <= pokeCount; i++) {
    await getPokemon(i);
  }
};
//GETTING DATA FOR EVERY POKEMON
const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const getUrl = await fetch(url);
  const getData = await getUrl.json();
  createPokemonBox(getData);
};
//RENDERING AND USING OUR CARD WİTH POKEMONS OWN PROPERTIES
const createPokemonBox = (data) => {
  //render data
  const name = data.name[0].toUpperCase() + data.name.slice(1);
  const id = data.id.toString().padStart(3, '0');
  const weight = data.weight;
  const type = data.types[0].type.name;
  const color = colors[type];

  //using data and creating cards with poke's own properties
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('poke-box');
  pokemonEl.style.backgroundColor = `${color}`;
  pokemonEl.innerHTML = `
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png"
          alt="${name}"
        />
        <h4 class="poke-name">${name}</h4>
        <p class="poke-id">#${id}</p>
        <p class="poke-weight">${weight} kg</p>
        <p class="poke-type">Type: ${type}</p>
  `;
  pokeContainer.appendChild(pokemonEl);
};
//Search Bar
searchInput.addEventListener('input', function () {
  const pokeNames = document.querySelectorAll('.poke-name');
  const search = searchInput.value.toLowerCase();
  pokeNames.forEach((pokeName) => {
    pokeName.parentElement.style.display = 'block';
    if (!pokeName.innerHTML.toLowerCase().includes(search))
      pokeName.parentElement.style.display = 'none';
  });
});

initPokemon();
