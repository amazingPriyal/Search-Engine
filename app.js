const API_KEY = "AIzaSyCnhfvH2Cu3gOKIbi1YOFlRTgpsuVAzrAw";

async function search_it() {
  if (document.getElementById("results").innerHTML !== "") {
    document.getElementById("results").innerHTML = "";
  }
  var search_query = document.getElementById("search").value;

  const res = await axios.get(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=017576662512468239146:omuauf_lfve&q=${search_query}`
  );

  if(!res.data.items){
    document.getElementById('results').innerHTML =' <h1 style="color:white;">No results found</h1>'
    return;
  }

  for (var i = 0; i < res.data.items.length; i++) {
    var title = res.data.items[i].title;
   var htmlTitle = res.data.items[i].htmlTitle;
   var link = res.data.items[i].link;
   var displayLink = res.data.items[i].displayLink;
   var snippet=res.data.items[i].snippet;
   

    document.getElementById("results").innerHTML += "<br>" + `
    <div class="jsclsdetails">
    <div><h2>${title}</h1></div>
    <br> <div>${htmlTitle}</div>
    <br> <div><a href="url">${link}</a></div>
    <br> <div><a href="url">${displayLink}</a></div>
    <br> <div>${snippet}</div>
    <div>
    `;
   
  }

  console.log(res.data.items);
}


