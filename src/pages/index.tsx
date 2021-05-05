import {Map} from '../components/map'
import { GetServerSideProps } from 'next'
import {getAllDesk} from '../mocks/mocks'

export const getServerSideProps: GetServerSideProps = async context => {
  const allDesk = getAllDesk()
  return {
    props: {
      allDesk
    }
  }
}

export default function Home({ allDesk }) {
  return (
    <div className="container">
      <Map desks={allDesk}/>
      <style jsx>{`
        .container {
          width: 600px;
          margin: 100px auto;
        }
      `}</style>
    </div>
  )
}
