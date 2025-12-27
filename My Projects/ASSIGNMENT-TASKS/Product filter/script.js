// 1. Select things
const allBtn = document.getElementById("filter-all");
const elecBtn = document.getElementById("filter-electronics");
const clothBtn = document.getElementById("filter-clothing");
const bookBtn = document.getElementById("filter-books")
const searchInput = document.getElementById("searchinput");
const products = document.querySelectorAll(".product-item");
const noResults = document.getElementById("no-result");

// 2. Function to filter by category
function filterCategory(category) {
  products.forEach(item => {
    let itemCat = item.dataset.category;

    if (category === "all" || itemCat === category) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });

  checkNoResults();
}

// 3. Function for search filter
function filterSearch() {
  let text = searchInput.value.toLowerCase();

  products.forEach(item => {
    let name = item.textContent.toLowerCase();

    if (name.includes(text)) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });

  checkNoResults();
}

// 4. Show "No results" message if nothing is visible
function checkNoResults() {
  const anyVisible = [...products].some(item => !item.classList.contains("hidden"));
  noResults.hidden = anyVisible;
}

// 5. Add button click events
allBtn.addEventListener("click", () => filterCategory("all"));
elecBtn.addEventListener("click", () => filterCategory("electronics"));
clothBtn.addEventListener("click", () => filterCategory("clothing"));
bookBtn.addEventListener("click",() =>filterCategory("books"));

// 6. Search event (bonus)
searchInput.addEventListener("input", filterSearch);
