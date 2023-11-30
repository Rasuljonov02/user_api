import axios from "axios";

const contener1: HTMLDivElement = document.querySelector(".contener1")!;
const con1: HTMLDivElement = document.querySelector(".con1")!;
const contener: HTMLDivElement = document.querySelector(".contener")!;
const nazat: HTMLImageElement = document.querySelector(".nazat")!;
let URL = "https://jsonplaceholder.typicode.com/users";

nazat.addEventListener("click", () => {
	contener1.style.display = "none";
	contener.style.display = "inline";
});

removlar();

export function removlar() {
	const rows: NodeListOf<HTMLImageElement> = document.querySelectorAll(".imgkoz")!;
	console.log(rows);

	rows.forEach((qtelir, ine: number) => {
		qtelir.addEventListener("click", async (e) => {
			console.log("img id =>", ine + 1);
			const userURL = `${URL}/${ine + 1}`;
			odamcha(userURL);

			contener1.style.display = "flex";
		});
	});
}

async function odamcha(userURL: string) {
	try {
		const response = await axios.get(userURL);
		danilar(response.data);
	} catch (error) {
		console.error(error);
	}
}

function danilar(data: any) {
	console.log(data);

	const tr: HTMLTableRowElement = document.createElement("tr");
	const tel: HTMLTableCellElement = document.createElement("td");
	const name: HTMLTableCellElement = document.createElement("td");

	tr.classList.add("dataa");
	name.innerText = `${data.name}`;
	tel.innerText = `${data.phone}`;

	name.className = "nametd";

	// con1.appendChild(tr);
	// tr.appendChild(name);
	// tr.appendChild(tel);
	con1.innerHTML = `
    <table>

<tbody>
    <tr>
    <td class="surlar">Name</td>
    <td class="sur">${data.name}</td>
  </tr>
  <tr>
  <td class="surlar">Username</td>
  <td class="sur">${data.username}</td>
</tr>

<tr>
  <td class="surlar">email</td>
  <td class="sur">${data.email}</td>
</tr>
<tr>
<td class="surlar">phone</td>
<td class="sur">${data.phone}</td>
</tr>
<tr>
<td class="surlar">website</td>
<td class="sur">${data.website}</td>
</tr>
<tr>
<td class="surlar">address</td>
<td class="sur">${data.address.city}</td>
</tr>
<tr>
<td class="surlar">company</td>
<td class="sur">${data.company.name}</td>
</tr>


</tbody>
</table>





    `;
}
