document.getElementById('loading').style.display = 'none';

const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    document.getElementById('search-result').textContent = '';
    document.getElementById('loading').style.display = 'block';

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals));
}

const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    // searchResult.innerHTML ='';
    // searchResult.textContent = '';
    document.getElementById('loading').style.display = 'none';
    if (meals == null || document.getElementById('search-field').value == '') {
        const div = document.createElement('div');
        searchResult.classList.remove('row-cols-md-3');
        div.innerHTML = `
        <h1>No content found matching your interest</h1>
        `
        searchResult.appendChild(div);
    }


    else {
        searchResult.classList.add('row-cols-md-3');
        meals.forEach(meal => {
            // console.log(meal);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div class="card h-100">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
                    </div>
                </div>
            `;
            searchResult.appendChild(div);
        });
    }
    document.getElementById('search-field').value = '';
}


// console.log(`00${7+1+2}`)