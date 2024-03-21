  //PRADEEP.js//
function tabFunction() {
    window.location.href = "worktable.html";
  }
  function homeFunction(){
    window.location.href = "/index.html";
  }
  let terms = [];
  let editText;
  function newpage() {
    getList();
  }
  function getList() {
    editText = undefined;
    let url = "https://64d9b580e947d30a260a3a77.mockapi.io/work/workerscom";
    fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((Result) => Result.json())
      .then((string) => {
        console.log(string);
        terms = string;
        addTable();
        console.log("Title of our response : $(terms.Studentname)");
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }
  function addTable() {
    var v = "";
    console.log(terms);
    for (i = 0; i < terms.length; i++) {
      v += "<tr>";
      v += "<td>" + terms[i].Studentname + "</td>";
      v += "<td>" + terms[i].Fathername + "</td>";
      v += "<td>" + terms[i].Age + "</td>";
      v += "<td>" + terms[i].DOB + "</td>";
      v += "<td>" + terms[i].City + "</td>";
      v += '<td style="display:flex;flex-wrap:wrap;">' + terms[i].Address + '</td>';
      v += "<td>" + terms[i].Pincode + "</td>";
      v += "<td>" + terms[i].Gender + "</td>";
      v +=
        '<td><button type="button" class="btn btn-secondary  pe-4 ps-4" style="" onclick="Edit(' +
        terms[i].id +
        ')">Edit</button><button type="button" class="btn btn-danger"  onclick="Delete(' +
        terms[i].id +
        ')">Delete</button></td>';
    }
    document.getElementById("displayArea").innerHTML = v;
  }
  function Delete(id) {
    let url = "https://64d9b580e947d30a260a3a77.mockapi.io/work/workerscom";
    fetch(url + "/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((Result) => Result.json())
      .then((string) => {
        console.log(string);
        getList();
        console.log(`Title of our response :  ${string.Studentname}`);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }
    function Edit(id) {
    editText = id;
    window.location.href = "worktable.html?id=" + id;
  }
