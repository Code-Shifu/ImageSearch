const accesskey = 'krf67e0PST9z4EFFCHmE4e3WA8qu4iKsQUE7zx5_ft8';

const showForm = document.getElementById("searchForm");
const showBox = document.getElementById("searchBox");
const showResult = document.getElementById("searchResult");
const showBtn = document.getElementById("showmoreBtn");



let keyword = "";
let page = 1;

async function searchImages(){
    keyword = showBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    if(page === 1){
        showResult.innerHTML ="";
    }
    const results = data.results;

    results.map((result) =>{
        const image = document.createElement("img")
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        showResult.appendChild(imageLink);
    })
    showmoreBtn.style.display = "block";
}

showForm.addEventListener("submit", (e) =>{
   e.preventDefault(); 
    page = 1;
    searchImages();
});

showBtn.addEventListener("click", () => {
    page++;
    searchImages();
})
