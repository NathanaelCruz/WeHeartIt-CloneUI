import React from 'react'
import { Search } from '../../styles/components/Header/search'

const SearchBar: React.FC = () => {
  return (
    <Search
      type="search"
      placeholder="Busque por coisas que você ama ..."
      className="u-icon__search"
    />
  )
}

export default SearchBar
