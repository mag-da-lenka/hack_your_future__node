const updateMeal = (id) => {
  const title = document.getElementById('meal-title').value
  const price = document.getElementById('meal-price').value

}

window.handleMealRequest = params => {
  document.body.innerHTML = `
        <header>
          <ul>
            <a href="/" data-navigo>Home</a>
            <a href="meals" data-navigo>Meals</a>
            <a href="picture" data-navigo>Picture</a>
          </ul>
        </header>

        <h1>Meal info for meal.title</h1>
        <input value='meal.title' id='meal-title'>
        <button></button>
        <input value='meal.price' id='meal-price'>
        <button onClick="updateMeal(
          meal.id
        )">Save</button>
      `

  // if any links are added to the dom, use this function
  // make the router handle those links.
  router.updatePageLinks()
}
