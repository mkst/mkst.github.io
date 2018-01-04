function fetch(url, id) {
  d3.request(url, function(x) {
    var d = document.getElementById(id);
    d.innerText = x.responseText;
    hljs.highlightBlock(d);
  })
}
