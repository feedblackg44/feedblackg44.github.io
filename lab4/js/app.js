arr = ["IASA", "FICT", "RTF"];

// Функція створення головного масиву (верхня стрічка)
for(let i = 0; i < arr.length; i++){
	let newDiv = document.createElement("li");
	newDiv.className = "nav__item";
	newDiv.innerHTML = `<a class="nav__link" href="#">${arr[i]}</a>`;

	let subnav = document.querySelector('.nav__list');
	subnav.append(newDiv);
}

//Функція створення підмасиву 
function setSubnav(field, arrSubnav){
	let search = document.querySelectorAll('.nav__link');
	for(let i = 0; i < search.length; i++){
		if(search[i].textContent == field){
			console.log(search[i]);
			search[i].classList.add('has-subnav');
			let newDiv = document.createElement("ul");
			newDiv.className = "subnav";
			console.log(search[i]);
			search[i].append(newDiv);

			for(let i = 0; i < arrSubnav.length; i++){
				let newnewDiv = document.createElement("li");
				newnewDiv.innerHTML = `<a class="subnav__link" href="#">${arrSubnav[i]}</a>`;
				newDiv.append(newnewDiv);
			}
		}
	}
}

arrSubnav = ["122 spec", "123 spec"];
setSubnav("IASA", arrSubnav);

arrSubnav = ["126 spec", "121 spec", "123 spec"];
setSubnav("FICT", arrSubnav);
