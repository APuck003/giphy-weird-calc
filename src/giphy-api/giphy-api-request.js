export const endpointURL = (phrase, weirdness) => `https://api.giphy.com/v1/gifs/translate?api_key=${process.env.REACT_APP_API_KEY}&s=${phrase}&weirdNum=${weirdness}`;


export const getRequestedGif = async (phrase, weirdness) => {
  const res = await fetch(endpointURL(phrase, weirdness));
  const json = await res.json();
  return gifFromJSON(json);
};

export const gifFromJSON = json => {
  const {jsonData} = json
  return {
    url: data.image.original.url,
    title: data.title,
  }
}
