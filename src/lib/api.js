
const BASE_URL =process.env.APP_MOVIEDB_BASE_URL 
const API_KEY = process.env.APP_MOVIEDB_API_KEY
const UN = process.env.APP_MOVIEDB_UN
const PW = process.env.APP_MOVIEDB_PW
let expiresAt = null;

function verifyToken(tokenTime) {
  expiresAt = new Date(tokenTime);
  let now = new Date();
  const isTokenValid = now < expiresAt;
  return isTokenValid;
}

async function createToken() {
  return callMovieAPI(`/authentication/token/new?api_key=${API_KEY}`)
}

async function createSession(request_token) {
  return postMovieAPI(`/authentication/token/validate_with_login?api_key=${API_KEY}`, {
    "username": UN,
    "password": PW,
    "request_token": request_token
  })

}

async function callMovieAPI(url) {

  const response = await fetch(`${BASE_URL}${url}`)
  if (!response.ok) throw new Error(response.statusText)
  return response.json()
}

async function postMovieAPI(url = "", data = {}) {
  const response = await fetch(`${BASE_URL}${url}`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  return response.json();
}

async function checkSessionID() {
  if (sessionID === null) {
    const { request_token, expires_at, success } = await createToken();
    expiresAt = expiresAt;

    sessionID = await createSession(request_token);
  }
  return sessionID;
}

async function favoritesList_CreateList(nameDescriptionLang) {
  sessionID = await checkSessionID();
  const { name, description, language } = nameDescriptionLang;
  return await postMovieAPI(`/list?api_key=${API_KEY}&session_id=${sessionID}`, { name, description, language })
}

async function favoritesList_GetList(listID) {
  sessionID = await checkSessionID();
  return await callMovieAPI(`/list/${listID}?api_key=${API_KEY}&session_id=${sessionID}`,)
}

async function favoritesList_AddMovie(listID, movieID) {
  sessionID = await checkSessionID();
  return await postMovieAPI(`/list/${listID}/add_item?api_key=${API_KEY}&session_id=${sessionID}`, { 'media_id': movieID })
}

async function favoritesList_RemoveMovie(listID, movieID) {
  sessionID = await checkSessionID();
  return await postMovieAPI(`/list/${listID}/remove_item?api_key=${API_KEY}&session_id=${sessionID}`, { 'media_id': movieID })
}

function getUpcomingMovies() {
  return callMovieAPI(`/movie/upcoming?api_key=${API_KEY}`);
}

function getMovieDetails(id) {
  return callMovieAPI(`/movie/${id}?api_key=${API_KEY}&append_to_response=similar`);
}
function getSimilarMoviesByMovieID(movieID) {
  return callMovieAPI(`/movie/${movieID}/similar?api_key=${API_KEY}&page=1`);
}
export {
  getUpcomingMovies,
  getMovieDetails,
  createToken,
  createSession,
  getSimilarMoviesByMovieID,
  favoritesList_CreateList,
  favoritesList_GetList,
  favoritesList_AddMovie,
  favoritesList_RemoveMovie
}
