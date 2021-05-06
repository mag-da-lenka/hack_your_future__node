window.handlePictureRequest = () => {
  document.body.innerHTML = `
    <header>
      <ul>
        <a href="/" data-navigo>Home</a>
        <a href="meals" data-navigo>Meals</a>
        <a href="picture" data-navigo>Picture</a>
      </ul>
    </header>

    <img src="./unnamed.gif" alt="illusion">
  `

  // if any links are added to the dom, use this function
  // make the router handle those links.
  router.updatePageLinks()
}
