const content = document.getElementById("quotes");
// const apiUrl = "";
const data = { menuGroups: [] };

// Running ajax

dataQuery.done((res) => {
  for (var i = 0; i < res.length; i++) {
    quotesData.quotes.push(res[i]);
  }

  let src = document.getElementById("quotes-template").innerHTML,
    template = Handlebars.compile(src),
    html = template(quotesData);

  content.innerHTML = html;
});
