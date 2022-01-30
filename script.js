const pokeContainer = document.getElementById("poke-container");
const pokemon_count = 20;

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
  flying: `#F5F5F5`,
  fighting: `#E6E0D4`,
  normal: `#F5F5F5`,
};

const fetchPokemon = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};
const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
  console.log(data);
};

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");
  const name =
    pokemon.name[0].toUpperCase() + pokemon.name.slice(1).toLowerCase();

  const pokemonInnerHtml = `
    <div class="pokemon">
      <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png"
          alt=""/>
      </div>
      <div class="info">
        <span class="number">#001</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>grass</span></small>
      </div>
    </div>
  `;
  pokemonEl.innerHTML = pokemonInnerHtml;
  pokeContainer.appendChild(pokemonEl);
};

fetchPokemon();
