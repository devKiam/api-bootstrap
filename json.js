document.getElementById('btn').addEventListener('click', function (){
    let inputText = document.getElementById('input-id').value
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`)
        .then(response => response.json())
        .then(data => showDataUI(data.meals))

})

function showDataUI(data)
{
    let inputText = document.getElementById('input-id').value = ''
    // console.log(data)
    for (let i of data)
    {
        // console.log(i.strMeal)
        let col = document.createElement('div')
        col.classList.add('col')
        col.innerHTML = `
        <div class="card">
            <img src="..." class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${i.strMeal}</h5>
                <p class="card-text">This is a longer card with supporting text below 
                as a natural lead-in to additional content. 
                This content is a little bit longer.</p>
            </div>
        </div>`
        let row = document.getElementById('row')
        row.appendChild(col)
    }
}
