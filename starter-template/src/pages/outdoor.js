import { Prisma } from "@prisma/client";

export async function getServerSideProps() {
  const outsidePlants = await Prisma.OutdoorPlants.findMany(); 
  return {
    props: { outsidePlants }, 
  };
}

const OutdoorPlants = ({ outsidePlants = []}) => {
    // Setting up the function with the call out for outdoor plants. 
    return (
      <div>
        <h1>Outdoor Plants</h1>
        <p>
          Outdoor plants are a vital part of any garden or landscape, bringing life, color, and natural beauty to outdoor spaces.
          They range from vibrant flowers and lush shrubs to towering trees and delicate ground covers, each contributing to the
          ecosystem while enhancing the visual appeal of your environment. Outdoor plants not only improve air quality and provide
          habitats for wildlife but also offer a sense of tranquility and connection to nature. Whether you're cultivating
          a small balcony garden or a sprawling backyard, choosing the right outdoor plants can transform
          your space into a personal oasis.
        </p>
        
        <div className='item-container'>
          {outsidePlants.map(item => (
            <div key={item.id} className='item'>
              <div className="item-names">{item.itemName}</div>
              <div className='item-description'>{item.description}</div>
              {/* Uncomment and use the following line if you have an image URL */}
              {/* <img src={item.imageUrl} alt={item.itemName} className='item-img' /> */}
              
            </div>
          ))}
        </div>
      </div>
    );
  }
  //ones above my function place holders should give me bunch of boxes, but researching. page should be broke.
//these would be with self made database. need to research if bootstrap cards or something else would work here.
  export default OutdoorPlants;