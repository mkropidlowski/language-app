import { NextPage } from 'next'
import Head from 'next/head'
import Button from '../components/atoms/Button'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Language App</title>
      </Head>
     <Button
        color='tertiary'
        buttonSize='medium'

      >
      Button
     </Button>
     
    
    </div>
  )
}

export default Home
