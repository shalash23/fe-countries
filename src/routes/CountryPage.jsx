import React from 'react'
import { countriesContext } from '../store/CountriesContext'
import {
    Container,Typography
    
} from '@mui/material'
import {useParams} from 'react-router-dom'

const CountryPage = () => {
  const [_, allCountries] = React.useContext(countriesContext)
  const {name} = useParams()
  return (
    <Container fixed>
      <Typography variant="h1" color="initial">{name}</Typography>
    </Container>
  )
}

export default CountryPage