import { Box, Heading, Input, SimpleGrid, Text, Image, Spinner, Center } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { fetchPopularMovies, searchMovies } from './services/api'

function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  // Load popular movies on first render
  useEffect(() => {
    const getPopularMovies = async () => {
      const popularMovies = await fetchPopularMovies()
      setMovies(popularMovies)
      setLoading(false)
    }
    getPopularMovies()
  }, [])

  // Handle search input
  const handleSearch = async (e) => {
    const query = e.target.value
    setSearchQuery(query)
    
    if (query.length > 2) { // Only search after 3 characters
      setLoading(true)
      const searchResults = await searchMovies(query)
      setMovies(searchResults)
      setLoading(false)
    } else if (query.length === 0) {
      // If search is cleared, show popular movies again
      setLoading(true)
      const popularMovies = await fetchPopularMovies()
      setMovies(popularMovies)
      setLoading(false)
    }
  }

  return (
    <Box p={5}>
      <Heading as="h1" size="2xl" textAlign="center" mb={10} color="teal.500">
        Movie Finder
      </Heading>
      
      <Input 
        placeholder="Search for movies..." 
        size="lg" 
        mb={10}
        variant="filled"
        value={searchQuery}
        onChange={handleSearch}
      />
      
      {loading ? (
        <Center h="300px">
          <Spinner size="xl" color="teal.500" />
        </Center>
      ) : (
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={10}>
          {movies.map(movie => (
            <Box key={movie.id} bg="gray.100" borderRadius="md" overflow="hidden">
              <Image 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title}
                width="100%"
                height="300px"
                objectFit="cover"
                fallbackSrc="https://via.placeholder.com/500x750?text=No+Image"
              />
              <Box p={4}>
                <Heading as="h3" size="md" noOfLines={1}>{movie.title}</Heading>
                <Text mt={2}>Rating: {movie.vote_average}/10</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  )
}

export default App

