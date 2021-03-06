const APIKEY = "c02d0a877fd61476767eb6d14d069ca7";



const requests = {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_generes=28`,
    fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_generes=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_generes=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_generes=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_generes=99`,

}



 export default requests;
