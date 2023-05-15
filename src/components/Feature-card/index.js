import { useEffect, useState } from "react"
import Card from "../Card"

function FeatureCard (){
  let [featureCard, setFeatureCard] = useState({})
  
    useEffect(()=>{
      async function fetchRandomCard(){
        let randomNumber = Math.floor(Math.random()*151)
        const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=nationalPokedexNumbers:${randomNumber}`) 
        const data = await response.json()
        let featureCardNumber = Math.floor(Math.random()*(data.data.length))
        setFeatureCard(data.data[featureCardNumber])
    }fetchRandomCard()},[])
    console.log(featureCard)
return (<>
  <div>
  {featureCard.images && featureCard.images.small && (
          <Card src={featureCard.images.small} alt={featureCard.name} key={featureCard.id} />
        )}
  </div>
</>)
}




export default FeatureCard