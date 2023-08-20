let url = "http://universities.hipolabs.com/search?name=";
let input = document.querySelector("input");
let button = document.querySelector("button");

button.addEventListener("click", async () => {
    let countary = input.value;
    let data = await getUniversitesDetails(countary);
    console.log(data);
    showData(data);
});

function showData(data) {
    let list = document.querySelector("ul");
    list.innerText = "";
    for (i of data) {

        let div = document.createElement("div");
        let li = document.createElement("li");
        li.innerText = i.name;
        let a = document.createElement("a");
        a.href = i.web_pages;
        a.innerText = "Official website";
        a.target = "_blank";
        div.appendChild(li);
        div.appendChild(a);
        list.appendChild(div);
    }
}

async function getUniversitesDetails(countary) {
    try {
        let res = await axios.get(url + countary);
        // console.log(res);
        return res.data;

    } catch (error) {
        console.log(error);
    }
};