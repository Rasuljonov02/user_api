import "./main.css";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/users";
const contener: HTMLDListElement = document.querySelector(".con")!;
const a: any[] = [];

async function searchVideos() {
	try {
		const response = await axios.get(`${URL}`);
		a.push(response.data);
		console.log(a);
		UserMalumot(a[0]);
	} catch (error) {
		console.error(error);
	}
}

function UserMalumot(data: any[]) {
	for (let i = 0; i < data.length; i++) {
		const ele = data[i];

		const tr: HTMLTableRowElement = document.createElement("tr");
		const name: HTMLTableCellElement = document.createElement("td");
		const email: HTMLTableCellElement = document.createElement("td");
		const tel: HTMLTableCellElement = document.createElement("td");
		const id: HTMLTableCellElement = document.createElement("td");
		const imgg: HTMLImageElement = document.createElement("img");
		const imgg2: HTMLImageElement = document.createElement("img");
		const span: HTMLSpanElement = document.createElement("span");
		tr.className = `${i + 1}`;
		name.innerText = `${ele.name}`;
		name.className = "nametd";
		id.innerText = `${i + 1}`;
		id.className = "idtd";

		email.innerText = `${ele.email}`;
		email.className = "emailtd";

		tel.innerText = `${ele.phone}`;
		tel.className = "teltd";
		imgg.src = "https://www.freeiconspng.com/thumbs/eye-icon/eyeball-icon-png-eye-icon-1.png";
		imgg.className = "img";
		imgg2.src = "https://cdn-icons-png.flaticon.com/512/1345/1345874.png";
		imgg2.className = "img1";

		contener.appendChild(tr);
		tr.appendChild(id);
		tr.appendChild(name);
		tr.appendChild(email);
		tr.appendChild(tel);
		tr.appendChild(span);

		span.appendChild(imgg);
		span.appendChild(imgg2);
	}
	remov();
}

let p: number;

function remov() {
	const imgremove: NodeListOf<HTMLElement> = document.querySelectorAll(".img1")!;
	console.log(imgremove);

	imgremove.forEach((element, index: number) => {
					element.addEventListener("click", () => {
									p = parseInt(`${index + 1}`);
									console.log(`${index + 1}`);

								});
							});

							const classP: HTMLElement  = document.querySelector(`.${p}`)!;

							
									classP.remove();

}

searchVideos();
