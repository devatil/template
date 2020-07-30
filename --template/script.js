const quoteContainer = document.getElementById('.quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');

// Get Quote form Api

async function getQuote() {
	const proxyUrl = 'https://rocky-retreat-13655.herokuapp.com/';
	const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

	try {
		const response = await fetch(proxyUrl + apiUrl);
		const data = await response.json();

		quoteText.innerText = data.quoteText;
		quoteAuthor.innerText = data.quoteAuthor;
	} catch (error) {
		getQuote();
		console.log('upps doenst working this quote generator', error);
	}
}

getQuote();
