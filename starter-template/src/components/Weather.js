import React from 'react'

export default function Weather({currentTemp, userCity}) {

    const coldCloudImage = 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/main/cold_cloud.png?raw=true';
    const hotCloudImage = 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/main/hot_cloud.png?raw=true';
    const happyCloudImage = 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/main/happy_cloud.png?raw=true';

    let currentImage;

    if(currentTemp){
        if(currentTemp > 80){
            currentImage = hotCloudImage;
        }
        else if(currentTemp < 60){
            currentImage = coldCloudImage;
        }
        else{
            currentImage = happyCloudImage
        }
    }
    else{
        currentImage = happyCloudImage
    }

    // let currentImage = currentTemp && currentTemp > 80 ? hotCloudImage : currentTemp && currentTemp < 60 ? coldCloudImage : happyCloudImage;

  return (
    <div className="weatherCloud">
    <img src={currentImage} className="App-logo" alt="logo" />
    <div>{currentTemp && userCity ? `Currently ${currentTemp}\u00B0 in ${userCity}` : null }
    </div>
  </div>
  )
}