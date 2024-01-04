import React, { useEffect } from 'react'
import { View, FlatList } from 'react-native'

import { CardCharacter, Loading, ViewError } from '../../components'
import useCharactersStore from '../../store/characters'
import { Container } from './styles'


const Home = (): JSX.Element => {
  const { fetchCharacters, data, loading, error } = useCharactersStore()
  
  useEffect(() => {
    fetchCharacters()
  }, [data]);

  const handleEndReached = () => fetchCharacters();

  if(error) {
    return <ViewError />
  }
  
  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <FlatList 
          style={{ alignSelf: "center", marginLeft: 8 }}
          numColumns={2}
          data={data}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <CardCharacter {...item} /> }
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.1}
          ListFooterComponent={() =>
            loading ? <Loading /> : null
          }
        />
      ) }
    </Container>
  )
}

export default Home