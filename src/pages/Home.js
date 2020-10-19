import React, {useContext} from 'react'
import Card from '../components/Card'
import Search from '../components/Search'
import { GithubContext } from './../context/github/githubContext';

const Home = () => {
  const { loading, users } = useContext(GithubContext)

  return (
    <>
      <Search />
      <div className="row">

        {loading
          ? <p className="text-center">Загрузка...</p>
          : users.map((user, index) => (
            <div className="col-sm-4 mb-4" key={`${user.id}-${index}`}>
              <Card user={user} />
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Home
