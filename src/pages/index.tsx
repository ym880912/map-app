import React, { useEffect, useState } from 'react'
import { Map } from '../components/Map'
import { Layout } from '../components/Layout'
import { GetServerSideProps } from 'next'
import { getAllDesk } from '../mocks/mocks'
import { SEARCHBAR_HEIGHT } from '../components/SearchBar'
import { HEADERBAR_HEIGHT } from '../components/HeaderBar'

export const getServerSideProps: GetServerSideProps = async context => {
  const allDesk = getAllDesk()
  return {
    props: {
      allDesk
    }
  }
}

export default function Home ({ allDesk }) {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  })
  function handleResize () {
    // Set window width/height to state
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize

      // Add event listener
      window.addEventListener('resize', handleResize)

      // Call handler right away so state gets updated with initial window size
      handleResize()

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize)
    }
  }, []) // Empty array ensures that effect is only run on mount

  return (
    <Layout>
      <Map
        // desks={allDesk}
        height={windowSize.height - SEARCHBAR_HEIGHT - HEADERBAR_HEIGHT}
        width={windowSize.width}
      />
    </Layout>
  )
}
