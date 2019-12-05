export const endpointURL = (phrase, weirdness) => `https://api.giphy.com/v1/gifs/translate?api_key=${process.env.REACT_APP_API_KEY}&s=${phrase}&weirdness=${weirdness}`;


export const getRequestedGif = async (phrase, weirdness) => {
  const res = await fetch(endpointURL(phrase, weirdness));
  const json = await res.json();
  // console.log(json)
  return gifFromJSON(json);
}

export const gifFromJSON = json => {
  const {jsonData} = json
  console.log(jsonData)
  return {
    url: jsonData.image.original.url,
    title: jsonData.title,
  }
}
