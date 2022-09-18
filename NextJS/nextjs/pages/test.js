
export default function Test()
{
    fetch('http://localhost/api/index')
    .then(function(response) {
    return response.json();
    })
    .then(function(myJson) {
    console.log(myJson);
    });

}