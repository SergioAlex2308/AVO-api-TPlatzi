/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app');

const formatPrice = (price) => {

	const newPrice = new window.Intl.NumberFormat('es', {
		style: 'currency',
		currency: "USD"
	}).format(price);

	return newPrice;
}

//Web API
async function fetchAll(url) {
	const response = await fetch(`${url}/api/avo`);
	const responseJSON = await response.json();
	
	const allItems = [];

	responseJSON.data.forEach((item) => {
		// Crear imagen
		const image = document.createElement('IMG');
		image.src = `${url}${item.image}`;
		image.className = 'w-48 rounded-full';

		// Crear titulo

		const title = document.createElement("H2");
		title.textContent = item.name;
		title.className = 'font-bold text-2xl';

		// Crear precio

		const price = document.createElement("DIV");
		price.textContent = formatPrice(item.price);
		price.className = 'text-xl text-indigo-600 font-semibold italic';

		const container = document.createElement("DIV");
		container.append(image, title, price);
		container.className = 'w-80 flex items-center flex-col border-4 border-indigo-50 rounded-lg pb-4 px-4 pt-4 hover:bg-indigo-100';

		allItems.push(container);
	});

	appNode.className = 'grid lg:grid-cols-3 md:grid-cols-2 justify-items-center auto-cols-auto gap-4';
	appNode.append(...allItems);
}

const result = fetchAll(url);

//Conectar al servidor
/* window
	.fetch(url)
	//Procesar respuesta y convertirla en JSON
	.then((response) => response.json())
	//JSON -> Data -> Renderizar info browser
	.then((responseJSON) => {
		responseJSON.data.forEach(item => {
			console.log(item.name)
		})
	}); */