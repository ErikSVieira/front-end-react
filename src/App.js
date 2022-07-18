
import React from 'react'
import Layout from './components/layout'
import NoSearch from './components/no-search' 
import Profile from './components/profile'
import Repositories from './components/repositories'
import useGibhub from './hooks/github-hooks'

const App = () => {
  const { githubState } = useGibhub()
  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  )
}

export default App
