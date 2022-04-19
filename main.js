//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch);
const spellName = document.querySelector('h2');
const className = document.querySelector('h3');
const subclass = document.querySelector('ul');

function getFetch() {
	const choice = document.querySelector('input').value;
	const url = `https://www.dnd5eapi.co/api/spells/${choice}`;

	fetch(url)
		.then(res => res.json()) // parse response as JSON
		.then(data => {
			console.log(data);
			spellName.textContent = data.name;
			className.textContent = `Class: ${data.classes[0].name}`;

			// clear the previous list of subclasses
			while (subclass.firstChild) {
				subclass.removeChild(subclass.firstChild);
			}

			data.subclasses.forEach(obj => {
				let li = document.createElement('li');
				li.textContent = obj.name;
				subclass.appendChild(li);
			});
		})
		.catch(err => {
			console.log(`error ${err}`);
		});
}
