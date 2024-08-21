import { prisma } from "../server/prisma";

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
  if (!Array.isArray(outsidePlants)) {
    return <div>No outdoor plants available</div>;
  }
  
  return (
    <div>
    {outsidePlants.map((item) => (
      item.isOutdoor && (  // Only render if the plant is outdoor
        <div key={item.id} className='item'>
          {/* <div className="item-names">{item.name}</div>
          <div className="item-names">{item.genus}</div>
          <div className='item-description'>{item.description}</div> */}
          {/* Uncomment and use the following line if you have an image URL */}
          {/* <img src={item.imageUrl} alt={item.itemName} className='item-img' /> */}
        </div>
      )
    ))}
  </div>

    
  )}