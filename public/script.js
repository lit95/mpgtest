document.getElementById("submit").addEventListener('/sql', async (e) => {
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
      .then((fromServer) => {
        console.log(fromServer.json());
      })
      .catch((err) => {
        console.log(err)
        // 
      });
  });