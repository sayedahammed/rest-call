const axios = require('axios')

// Make a request for a user with a given ID
// axios.get('https://reqres.in/api/users?page=2')
//     .then(function (response) {
//         // handle success
//         console.log(response);
//     })
//     .catch(function (error) {
//         // handle error
//         console.log(error);
//     })
//     .then(function () {
//         // always executed
//     });

    axios.post('https://reqres.in/api/users', {
        "name": "morpheus",
        "job": "leader"
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });