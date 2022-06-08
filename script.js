const giphy_api_key = "MgjKkCgXXDZ3DkN0pu4Nwi8LBxaDit5V";

/* GIPHY - Search Endpoint(Search GIFs using a keyword)*/

function getGifs() {
  /* GIPHY API Key */
  const gif = document.getElementById("gifs").value;
  const search_endpoint = `https://api.giphy.com/v1/gifs/search?q=${gif}&api_key=${giphy_api_key}`;

  /* Fetching Data from the API */
  fetch(search_endpoint)
    .then(api_res => api_res.json())
    .then(api_output => {
      const gif_array = api_output.data.map(gif => gif.images.fixed_width.url);

      /* Outputing a <img> element for every GIFs */
      const gifs = gif_array
        .map(
          gif => `<div class="flex-fill">
                                                    <img src=${gif}>
                                                    </div>`
        )
        .join();
      /* Displaying the output */
      document.getElementById("display_gif").innerHTML = gifs;
    })
    .catch(err => console.log(err));
}

document.getElementById("search_gif").addEventListener("click", getGifs);

/*  GIPHY -Trending Endpoint (Fetch GIFs currently trending online) */

const trending_endpoint = `https://api.giphy.com/v1/gifs/trending?api_key=${giphy_api_key}&limit=6`;

fetch(trending_endpoint)
  .then(api_res => api_res.json())
  .then(api_output => {
    const trending_gifs_array = api_output.data.map(
      gif => gif.images.fixed_width.url
    );
    const trending_gifs = trending_gifs_array
      .map(gif => `<img src=${gif}>`)
      .join();
    document.getElementById("trending_gifs").innerHTML = trending_gifs;
  })
  .catch(err => console.log(err));
