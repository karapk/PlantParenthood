import { prisma } from "../server/prisma";

export async function getServerSideProps() {
  const outsidePlants = await prisma.plants.findMany(); 
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
          {outsidePlants.filter(item => item.isOutdoor).map(item => (
            <div key={item.plants} className='item'>
              <div className="item-names">{item.name}</div>
              <div className="item-names">{item.genus}</div>
              <div className='item-description'>{item.description}</div>
              {/* Uncomment and use the following line if you have an image URL */}
              {/* <img src={item.imageUrl} alt={item.itemName} className='item-img' /> */}
              
            </div>
          ))}
        </div>
        <div class="outdoor-col">
            <div class="col">
              <div class="card shadow-sm">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: صورة مصغرة" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Picture goes here?</text></svg>
                <div class="card-body">
                  <p class="card-text">test</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: صورة مصغرة" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">صورة مصغرة</text></svg>
                <div class="card-body">
                  <p class="card-text">هذه بطاقة أوسع مع نص داعم أدناه كمقدمة طبيعية لمحتوى إضافي. هذا المحتوى أطول قليلاً.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">عرض</button>
                      
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card shadow-sm">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: صورة مصغرة" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">صورة مصغرة</text></svg>
                <div class="card-body">
                  <p class="card-text">هذه بطاقة أوسع مع نص داعم أدناه كمقدمة طبيعية لمحتوى إضافي. هذا المحتوى أطول قليلاً.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">عرض</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">تعديل</button>
                    </div>
                    <small class="text-body-secondary">9 دقائق</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: صورة مصغرة" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">صورة مصغرة</text></svg>
                <div class="card-body">
                  <p class="card-text">هذه بطاقة أوسع مع نص داعم أدناه كمقدمة طبيعية لمحتوى إضافي. هذا المحتوى أطول قليلاً.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">عرض</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">تعديل</button>
                    </div>
                    <small class="text-body-secondary">9 دقائق</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: صورة مصغرة" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">صورة مصغرة</text></svg>
                <div class="card-body">
                  <p class="card-text">هذه بطاقة أوسع مع نص داعم أدناه كمقدمة طبيعية لمحتوى إضافي. هذا المحتوى أطول قليلاً.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">عرض</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">تعديل</button>
                    </div>
                    <small class="text-body-secondary">9 دقائق</small>
                  </div>
                </div>
          </div>    
          </div>
        </div>
      </div>
    
    );
  }
  //ones above my function place holders should give me bunch of boxes, but researching. page should be broke.
//these would be with self made database. need to research if bootstrap cards or something else would work here.
  export default OutdoorPlants;