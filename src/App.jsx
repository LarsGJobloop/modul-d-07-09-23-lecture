import { useEffect, useState } from 'react'
import {LoadingSpinner} from './components/LoadingSpinner/LoadingSpinner'
import { PokemonList } from './components/PokemonList/PokemonList'
import './App.css'

const POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon"

function App() {
  const [pokemonList, setPokemonList] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(POKEMON_API_URL)
      const data = await response.json()

      setPokemonList(data.results)
    }

    fetchData()
  }, [])

  return (
    <>
     {
      !pokemonList ? <LoadingSpinner /> : <PokemonList pokemonList={pokemonList} />
     }
    </>
  )
}

export default App
