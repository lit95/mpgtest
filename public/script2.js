// Script for all businesses page
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }


fetch('/sql', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((fromServer) => {
      fromServer.text().then(data => {
        let list = JSON.parse(data);
        let response = document.getElementById("response");
        while(response.firstChild){
          response.removeChild(response.firstChild);
        }
        list = shuffle(list);
        for (x of list){
          console.log(x)
          let div = document.createElement("div")
          div.setAttribute("class","biz")
          let ul = div.appendChild(document.createElement("ul"));
          ul.setAttribute("class","biz_name");
          ul.innerHTML = x.biz_name;

          let li = document.createElement("li");
          li.setAttribute("class","address1");
          ul.appendChild(li).innerHTML = x.biz_addr;

          li = document.createElement("li");
          li.setAttribute("class","address2");
          ul.appendChild(li).innerHTML = x.biz_city + " " + x.biz_state + " " + x.biz_zip;
          
          response.appendChild(div);
        }
      })
      
    })
    .catch((err) => {
      console.log(err)
      // 
    });