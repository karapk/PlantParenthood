import { Prisma } from "../../server/prisma";
import 'bootstrap/dist/css/bootstrap.css';



export async function getServerSideProps() {
  const outsidePlants = await prisma.plants.findMany({where: {
    isOutdoor: true,
  },
}); 
  return {
    props: { outsidePlants: outsidePlants || [] }, 

  };
}
export default function OutdoorPage({ outsidePlants }) {
  // Safeguard to ensure outsidePlants is an array
  if (!Array.isArray(outsidePlants) || outsidePlants.length === 0) {
    return <div>No outdoor plants available</div>;
    
  }
  
  return (
  <>
  <div style={{marginTop:'100px'}}>
    <h1 className="text-3xl font-bold underline text-center">Outdoor Plants</h1>
    <p className="text-center" style={{width:'118rem'}}>
    Outdoor plants are a vital part of any garden or landscape, bringing life, color, and natural beauty to outdoor spaces. They range from vibrant flowers and lush shrubs to towering trees and delicate ground covers, each contributing to the ecosystem while enhancing the visual appeal of your environment. Outdoor plants not only improve air quality and provide habitats for wildlife but also offer a sense of tranquility and connection to nature. Whether you&apos;re cultivating a small balcony garden or a sprawling backyard, choosing the right outdoor plants can transform your space into a personal oasis. Below are examples of outdoor plants that when they bloom add color and texture to any environment they are in.</p>
  </div>
  

  <div className="card-group mx-3">
  
      {outsidePlants.map((item) => (
        
          <div key={item.id} className="card" style={{width:'31rem'}} >
            
              <div key={item.isOutdoor}>
                <img src={item.imgURL} className="card-img-top" style={{width:'19', height: '20rem'}} alt={item.name} />
                <div className='card-body'>
                  <h5 className="card-title">{item.name}</h5>
                  <h6 className='card-subtitle mb-2 text-muted'>{item.genus}</h6>
                  <p className="card-text">{item.description}</p>  
                </div>
              </div>
             
            </div> 
          
         
        
      ))}
      
    </div>  
    
  </>

    
  );}