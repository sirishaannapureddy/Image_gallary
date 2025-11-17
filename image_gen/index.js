
access_key = `0Q4mYn8IuW0MAfNzmWvfG7bdUi5wZQzMxnyNDli9EHs`;
let query = ""
let page = 1

let search = document.getElementById("search")
let shownbtn = document.getElementById("shownbtn")
let searchbox = document.getElementById("search-box")
let btn = document.getElementById("btn")
let gallary = document.getElementById("gallary")

let mainbox = document.getElementById("mainbox")
let mainImage = document.getElementById("mainImage");
let description = document.getElementById("description");
let closebtn = document.getElementById("closebtn")


function getimg() {
    const url = `https://api.unsplash.com/search/photos?&query=${query}&page=${page}&per_page=20&client_id=${access_key}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const results = data.results
            console.log(results)
            if (page === 1) gallary.innerHTML = "";

            results.forEach((animal) => {
                const img = document.createElement("img")
                img.src = animal.urls.small
                img.alt = animal.alt_description
                gallary.append(img)



                img.addEventListener("click", () => {
                    mainImage.src = animal.urls.regular
                    mainImage.alt = animal.alt_description
                    description.textContent = animal.alt_description
                    mainbox.style.display = "flex";
                });

            })
            search.value = "";
        })
        .catch(error => {
            console.error("Error fetching images:", error);
            gallary.innerHTML = "<p>Something went wrong. Please try again.</p>";
        })
}

shownbtn.addEventListener("click", (event) => {
    event.preventDefault()
    query = search.value
    page = 1;
    getimg()
    btn.style.display = "block";

})

btn.addEventListener("click", () => {
    page++;
    getimg()

})
closebtn.addEventListener("click", () => {
    mainbox.style.display = "none";
});
