function fetch(url, id) {
  d3.request(url, resp => {
    if (resp && resp.status === 200) {
      const elem = document.getElementById(id)
      if (elem !== null) {
        elem.innerText = resp.responseText
        hljs.highlightBlock(elem)
      }
    }
  })
}
