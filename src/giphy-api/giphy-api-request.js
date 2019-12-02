export const endpointURL = (query, weirdNum) => `https://api.giphy.com/v1/gifs/translate?api_key=${process.env.REACT_APP_API_KEY}&s=${query}&weirdNum=${weirdNum}`;


export const getRequestedGif = async (query, weirdNum) => {
  const res = await fetch(endpointURL(query, weirdNum));
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
