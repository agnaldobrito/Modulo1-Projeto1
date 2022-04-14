export async function fetchApi(name) {
  const nameTrim = name.trim();
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=dpPu1kIHwa3fxoQiH9lzTfmUkMgEjtuS&limit=1&q=${nameTrim}`
    );
    const responseJson = await response.json();
    console.log(responseJson.data);
    console.log('NAME', responseJson.data[0].title);
    console.log('META', responseJson.meta);
    if (responseJson.meta.msg === 'OK') {
      const fig = document.createElement('figure');
      const gif = document.createElement('img');
      const fc = document.createElement('figcaption');
      gif.src = responseJson.data[0].images.downsized.url;
      gif.alt = responseJson.data[0].title;
      fc.textContent = responseJson.data[0].title;
      document.body.appendChild(fig);
      fig.appendChild(gif);
      fig.appendChild(fc);
    } else {
      throw new Error('algo deu errado');
    }
  } catch (error) {
    console.log(error.message);
  }
}
