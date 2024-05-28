import { useCatImage } from './hooks/iseCatImage'
import { useCatFact } from './hooks/usecatFacts'

function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })


  const hadleClick = async () => {
    refreshFact()
  }

  return (
    <>
      <main>
        <h1>app de gatitos</h1>
        <button onClick={hadleClick}> get new  fact </button>
        {fact && <p> {fact} </p>}
        {imageUrl && <img src={`${imageUrl}`} alt={`image extracted using the first three words for ${fact}`} />}
      </main>

    </>
  )
}

export default App
