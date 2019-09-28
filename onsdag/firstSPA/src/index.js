import 'bootstrap/dist/css/bootstrap.css'

window.onload = function() {

    document.getElementById("getByID").addEventListener("click", getById, false);
    document.getElementById("refreshbtn").addEventListener("click", getAllUsers, false);
    document.getElementById("addUserBtn").addEventListener("click", addUser, false);
    document.getElementById("editUserBtn").addEventListener("click", editUser, false);
    document.getElementById("deleteUserBtn").addEventListener("click", deleteUser, false);


    function fetchWithErrorCheck(res){
        if(!res.ok){
          return Promise.reject({status: res.status, fullError: res.json() })
        }
        return res.json();
       }


    function getAllUsers() {
        fetch("http://localhost:3333/api/users")
            .then(res => fetchWithErrorCheck(res))
            .then(data => {
            var HTML = toHTML(data);
                document.getElementById("displayTbl").innerHTML = HTML;
            })
            .catch(err => {
                if(err.status){
                    err.fullError.then(e=> alert(e.detail))
                }
                else{console.log("Network error"); }
             });
    }

    function toHTML(tblToHTML) {
        var tbl = "<tr><th>id</th><th>age</th><th>name</th><th>gender</th><th>email</th></tr>";
    
        var _data = tblToHTML.map(item => "<tr><td>"+item.id+"</td>"
        +"<td>"+item.age+"</td>"
        +"<td>"+item.name+"</td>"
        +"<td>"+item.gender+"</td>"
        +"<td>"+item.email+"</td></tr>").join("");
    
        return tbl + _data;
    }

    function getById() {

        var theID = document.getElementById("theID").value;
        fetch("http://localhost:3333/api/users/" + theID)
            .then(res => fetchWithErrorCheck(res))
            .then(data => {
                //single result - do manually since we dont have an array to map
                var tbl = "<tr><th>id</th><th>age</th><th>name</th><th>gender</th><th>email</th></tr>";
    
                var HTML = "<tr><td>"+data.id+"</td>"
                +"<td>"+data.age+"</td>"
                +"<td>"+data.name+"</td>"
                +"<td>"+data.gender+"</td>"
                +"<td>"+data.email+"</td></tr>";

                document.getElementById("displayTbl").innerHTML = tbl + HTML;

        })
        .catch(err => {
            if(err.status){
                err.fullError.then(e=> console.log("No user found with the specified ID"))
            }
            else{console.log("Network error"); }
         });
    }

    function addUser() {

        var name = document.getElementById("theName").value;
        var age = document.getElementById("theAge").value;
        var gender = document.getElementById("genderDropdown").value;
        var email = document.getElementById("theEmail").value;

        let options = {
            method: "POST",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: name,
              age: age,
              gender: gender,
              email: email
            })
        }

        fetch("http://localhost:3333/api/users/", options);

    }

    function editUser() {

        var id = document.getElementById("theIdToEdit").value;
        var name = document.getElementById("theName2").value;
        var age = document.getElementById("theAge2").value;
        var gender = document.getElementById("genderDropdown2").value;
        var email = document.getElementById("theEmail2").value;

        let options = {
            method: "PUT",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                name: name,
                age: age,
                gender: gender,
                email: email
            })
        }

        fetch("http://localhost:3333/api/users/" + id, options);

    }

    function deleteUser() {

        var id = document.getElementById("theIdToDelete").value;

        let options = {
            method: "DELETE",
            headers: {
            'Content-Type': 'application/json'
            }
         }

        fetch("http://localhost:3333/api/users/" + id, options);

    }

    getAllUsers();
}
