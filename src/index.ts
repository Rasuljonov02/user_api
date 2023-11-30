import "./main.css";
import "./data.ts";
import { removlar as dataRemov } from "./data";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/users";
const contener: HTMLDListElement = document.querySelector(".con")!;
let a: any[] = [];
const contener2: HTMLDivElement = document.querySelector(".contener2")!;


async function searchUser() {
	try {
		const response = await axios.get(`${URL}`);

		a.push(response.data);
		// console.log(a);

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
		// const span: HTMLSpanElement = document.createElement("span");
		tr.id = `row-${i + 1}`;
		tr.classList.add("data-row");
		name.innerText = `${ele.name}`;
		name.className = "nametd";
		id.innerText = `${i + 1}`;
		id.className = "idtd";

		email.innerText = `${ele.email}`;
		email.className = "emailtd";

		tel.innerText = `${ele.phone}`;
		tel.className = "teltd";
		imgg.src = "https://www.freeiconspng.com/thumbs/eye-icon/eyeball-icon-png-eye-icon-1.png";
		imgg.className = "imgkoz";
		imgg.id = "img";
		imgg2.src = "https://cdn-icons-png.flaticon.com/512/1345/1345874.png";
		imgg2.className = "img1";

		contener.appendChild(tr);
		tr.appendChild(id);
		tr.appendChild(name);
		tr.appendChild(email);
		tr.appendChild(tel);
		// tr.appendChild(span);

		tr.appendChild(imgg);
		tr.appendChild(imgg2);
	}
	remov();
}

function remov() {
	const rows: NodeListOf<HTMLImageElement> = document.querySelectorAll(".img1")!;
	// console.log(rows);

	rows.forEach((rowi) => {
		rowi.addEventListener("click", () => {
			const parentRow = rowi.parentElement;
			if (parentRow && parentRow.nodeType === Node.ELEMENT_NODE) {
				parentRow.remove();

			}
		});
	});
	 dataRemov(); // data fayil
}




searchUser();
