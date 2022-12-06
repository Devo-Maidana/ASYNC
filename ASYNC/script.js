const f = fetch("https://638f53014ddca317d7f513a8.mockapi.io/api/users")
.then(res => res.json())
.then(data => console.log(data));

