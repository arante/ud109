/* Writing the fetch request */
/* Will cause a CORS request error */
/* Load this via DevTools console instead */
// fetch('https://api.unsplash.com/search/photos?page=1&query=flowers');

let searchedForText = 'flowers';
fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
	headers: {
		Authorization: 'Client-ID abc123'
	}
});