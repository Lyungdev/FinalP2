/* Using fetch and promise to get and sort username by length */
function PopulateWithFetch(page) {
    fetch('https://reqres.in/api/users?page=' + page)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {

            var boxes = document.getElementById('box');
            boxes.innerHTML = "";
            for (i in myJson.data) {
                //userNameList.push(myJson.data[i].first_name);
                var name = document.createElement('p');
                name.innerHTML = myJson.data[i].first_name +
                    ' ' +
                    myJson.data[i].last_name;
                var img = document.createElement('img');
                img.src = myJson.data[i].avatar;

                boxes.appendChild(name);
                boxes.appendChild(img);
            }
        });
}

/*  Main function to be called on page load  */
function Main() {
    previous = document.getElementById('prev');
    next = document.getElementById('next');
    current_page = 1;
    PopulateWithFetch(current_page);
}

function Previous() {
    current_page -= 1
    PopulateWithFetch(current_page)

}

function Next() {
    current_page += 1
    PopulateWithFetch(current_page)
}