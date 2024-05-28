const cat = 'https://catfact.ninja/fact'

export   const getRandomFact = async () => {
    const res = await fetch(cat)
    const data = await res.json()
    const { fact } = data
    return (fact)
  }
