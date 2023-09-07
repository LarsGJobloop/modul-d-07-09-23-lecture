import { useState, useEffect } from "react"

export function PokemonList(properties) {
  const {pokemonList} = properties

  return (
    <ul>
      {
        pokemonList.map(pokemon => {
          return (
            <li key={pokemon.name}>
              <PokemonCard name={pokemon.name} url={pokemon.url} />
            </li>     
          )
        })
      }
    </ul>
  )
}

function PokemonCard(properties) {
  const {name, url} = properties
  const [pokemonDetails, setPokemonDetails] = useState(null)

  useEffect(
    () => {

      async function getPokemonDetails() {
        const response = await fetch(url)
        const data = await response.json()

        setPokemonDetails(data)
      }

      getPokemonDetails()

    },
    []
  )
  
  return (
    <article>
      <h2>{name}</h2>
      {
        !pokemonDetails ? <LoadingSpinner /> : (
          <img src={pokemonDetails.sprites.front_default} alt="" />
        )
      }
    </article>
  )
}