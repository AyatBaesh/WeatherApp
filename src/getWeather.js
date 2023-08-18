export async function getWeather(location){
    try{
        let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=cc2785c69424465cbda213523231808&q=${location}`);
        let weather =  await response.json();
        // console.table(weather)
        console.log(weather);
        return weather;
        
    }catch(error){
        console.log('Error in fetching data');
    }
    
}