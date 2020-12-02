document.body.addEventListener('/sql', async (e) => {
    e.preventDefault(); // this stops whatever the browser wanted to do itself.
    const form = $(e.target).serializeArray(); // replacing with 
    // set fave to yes
    console.log('submit')
    fetch('/sql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then((fromServer) => fromServer.json())
      .then((jsonFromServer) => {
        // json results of sql search
        // HERE SEND HTML BACK TO WEBPAGE
        console.log(jsonFromServer);
      })
      .catch((err) => {
        console.log(err)
        // 
      });
  });