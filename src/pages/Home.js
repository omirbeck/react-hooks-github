import React from 'react'
import Card from '../components/Card'
import Search from '../components/Search'

const Home = () => {
  const cards = new Array(12).fill('');
  return (
    <>
      <Search />
      <div className="row">
        {cards.map((card) => {
          return (
            <div className="col-sm-4 mb-4" key={card}>
          <Card />
        </div>
          )
        })}
      </div>
    </>
  )
}

export default Home
