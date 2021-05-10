import React, { useEffect, useState } from 'react'
import { ArtistInformation } from '../components/ArtistInformation'
import { Layout } from '../components/Layout'
import { GetServerSideProps } from 'next'
import { getAllArtist } from '../mocks/mocks'

export const getServerSideProps: GetServerSideProps = async context => {
  const allArtist = getAllArtist()
  return {
    props: {
      allArtist
    }
  }
}

export default function Home ({ allArtist }) {
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
      <ArtistInformation artist={allArtist[0]} />
      <ArtistInformation artist={allArtist[1]} />
    </Layout>
  )
}
