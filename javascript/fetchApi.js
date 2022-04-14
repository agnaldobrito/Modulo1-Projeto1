export async function fetchApi(name) {
  const nameTrim = name.trim();
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=dpPu1kIHwa3fxoQiH9lzTfmUkMgEjtuS&limit=1&q=${nameTrim}`
    );
    const responseJson = await response.json();
    console.log('META', responseJson.meta);
    if (responseJson.meta.msg === 'OK') {
      const fig = document.createElement('figure');
      const gif = document.createElement('img');

      gif.src = responseJson.data[0].images.downsized.url;

      document.body.appendChild(fig);
      fig.appendChild(gif);

      setTimeout(() => {
        fig.remove();
      }, 4250);
    } else {
      throw new Error('algo deu errado');
    }
  } catch (error) {
    console.log(error.message);
  }
}
