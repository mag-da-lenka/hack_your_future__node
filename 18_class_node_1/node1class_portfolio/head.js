// this is head.js


const getHead = (title) => (`

  <head> 

    <link href='https://fonts.googleapis.com/css?family=Abel' rel='stylesheet'>

    <title>${title}</title> 

    <style type = "text/css">   
    
    body {
      background-image: linear-gradient(to bottom, rgb(59, 100, 95), rgb(51, 78, 75));
      color: rgb(228, 228, 228);
      font-family: 'Abel';
      margin: auto;
      margin-top: 3%;
      margin-bottom: 3%;
      padding: 2% 3% 2% 3%;
      width: 599px;
      text-align: left;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      /* border: dashed 3px rgb(194, 165, 181);
      border-radius: 20px; */
    }
    
    h1, h2, h3, p, ul, li, a {
      border: none;
      font-weight: 300;
      margin: 0;
      padding: 0;
      line-height: 1em;
      font-size: 1.12em;
      text-align: left;
      list-style-position: inside
    }
    
    h1, h2, h3 {
      text-align: center;
      font-size: xx-large;
    }
    
    h1, .no-tasks {
      color: rgb(194, 165, 181);
    }
       
    ul {
      list-style-type: none;
      margin: 0% 0% 0% 0%;
      padding: 0% 0% 0% 0%;
    }
    
    li {
      display: flex;
      list-style-type: none;
      border: solid 1px rgba(194, 165, 181, 0.596);
      border-radius: 11px;
      margin: 1% 0.7% 1% 0.7%;
      padding: 1% 1% 1% 3%;
      line-height: 1.2em;
    }
    
     
    button {
      width: 150px;
      height: 40px;
      margin: 1% 1% 1% 1%;
      padding: 0% 0% 0% 0%;
      color: rgb(228, 228, 228);
      /* font-weight: bold; */
      font-size: 1.1em;
      text-align: center;
      background-color: rgb(51, 78, 75);
      cursor: pointer;
      border: 3.0px solid rgba(228, 228, 228, 0.589);
      border-radius: 15px;
      box-shadow: 10px 10px 8px #888888;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.274);
      outline: none;
    }
    
    button:hover {
      color: rgb(51, 78, 75);
      background-color: rgb(228, 228, 228);
      outline: none;
    }
    
     
    a:link {
      margin: 0% 1% 0% 1%;
      padding: 0% 0.75% 0.25% 0.75%;
      color: rgb(228, 228, 228);
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
    }
    
    a:visited {
      color: rgba(228, 228, 228, 0.678);
    }
    
    a:hover, a:active, a:focus {
      color: rgb(255, 255, 255);
      /* background-color: orange; */
      opacity: 0.5;
    }
    
    @media only screen and (max-width: 600px) {
      body {
        background-color: ghostwhite;
        max-width: 440px;
        display: flex;
        flex-direction: column;
      }
    }
    </style>

  </ head>

`);

module.exports = getHead;