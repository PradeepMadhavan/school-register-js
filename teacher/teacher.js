// function onload() {

// }

function backFunction() {
    window.location.href = "/index.html";
  }
  function newpage() {
    addTable();
  }
  let editId;
  let localst = [];
  function submitFunction() {
    let obj = {};
    console.log(obj);
    obj.StudentName = document.getElementById("StudentName").value;
  
    obj.FatherName = document.getElementById("FatherName").value;
    obj.Age = document.getElementById("Age").value;
    obj.DateofBirth = document.getElementById("DateofBirth").value;
  
    obj.City = document.getElementById("City").value;
    obj.Address = document.getElementById("Address").value;
    obj.Pincode = document.getElementById("Pincode").value;
    obj.MaleFemale = document.getElementById("MaleFemale").value;
  
    console.log(localst);
  
    if (obj.StudentName == "") {
      document.getElementById("content").innerHTML = "' Required'";
      document.getElementById("content").style.color = "red";
       document.getElementById("StudentName").style.border = "1px solid red";
    } else {
      document.getElementById("content").innerHTML = "";
       document.getElementById("StudentName").style.border = "1px solid green";
    }
  
    if (obj.FatherName == "") {
      document.getElementById("content2").innerHTML = "'Required'";
      document.getElementById("content2").style.color = "red";
       document.getElementById("FatherName").style.border = "1px solid red";
    } else {
      document.getElementById("content2").innerHTML = "";
       document.getElementById("FatherName").style.border = "1px solid green";
    }
  
    if (obj.Age == "") {
      document.getElementById("content3").innerHTML = "' Required'";
      document.getElementById("content3").style.color = "red";
       document.getElementById("Age").style.border = "1px solid red";
    } else {
      document.getElementById("content3").innerHTML = "";
       document.getElementById("Age").style.border = "1px solid green";
    }
  
    if (obj.DateofBirth == "") {
      document.getElementById("content4").innerHTML = "' Required'";
      document.getElementById("content4").style.color = "red";
        document.getElementById("DateofBirth").style.border = "1px solid red";
    } else {
      document.getElementById("content4").innerHTML = "";
       document.getElementById("DateofBirth").style.border = "1px solid green";
    }
    if (obj.City == "") {
      document.getElementById("content5").innerHTML = "'Required'";
      document.getElementById("content5").style.color = "red";
       document.getElementById("City").style.border = "1px solid red";
    } else {
      document.getElementById("content5").innerHTML = "";
      document.getElementById("City").style.border = "1px solid green";
    }
    if (obj.Address == "") {
      document.getElementById("content6").innerHTML = "'Required'";
      document.getElementById("content6").style.color = "red";
      document.getElementById("Address").style.border = "1px solid red";
    } else {
      document.getElementById("content6").innerHTML = "";
      document.getElementById("Address").style.border = "1px solid green";
    }
    if (obj.Pincode == "") {
      document.getElementById("content7").innerHTML = "' Required'";
      document.getElementById("content7").style.color = "red";
       document.getElementById("Pincode").style.border = "1px solid red";
    } else {
      document.getElementById("content7").innerHTML = "";
       document.getElementById("Pincode").style.border = "1px solid green";
    }
    if (obj.MaleFemale == "") {
      document.getElementById("content8").innerHTML = "'Required'";
      document.getElementById("content8").style.color = "red";
       document.getElementById("MaleFemale").style.border = "1px solid red";
    }
     else {
      document.getElementById("content8").innerHTML = "";
       document.getElementById("MaleFemale").style.border = "1px solid green";
    }
  
    if (
      obj.StudentName == "" ||
      obj.FatherName == "" ||
      obj.Age == "" ||
      obj.DateofBirth == "" ||
      obj.City == "" ||
      obj.Address == "" ||
      obj.Pincode == "" ||
      obj.MaleFemale == ""
  
    ) {
      return false;
    }
  
    if (editId != undefined) {
      localst[editId].StudentName = obj.StudentName;
      localst[editId].FatherName = obj.FatherName;
      localst[editId].Age = obj.Age;
      localst[editId].DateofBirth = obj.DateofBirth;
  
      localst[editId].City = obj.City;
      localst[editId].Address = obj.Address;
      localst[editId].Pincode = obj.Pincode;
      localst[editId].MaleFemale = obj.MaleFemale;
  
    } else {
      localst = [];
      localst.push(obj);
    }
    localStorage.setItem("array", JSON.stringify(localst));
  
    addTable();
  
    document.getElementById("StudentName").value = "";
    document.getElementById("FatherName").value = "";
    document.getElementById("Age").value = "";
    document.getElementById("DateofBirth").value = "";
      document.getElementById("City").value = "";
        document.getElementById("Address").value = "";
          document.getElementById("Pincode").value = "";
            document.getElementById("MaleFemale").value = "";
  }
  
  function addTable() {
    var table = "";
    localst = JSON.parse(localStorage.getItem("array"));
    if (localst !== null && localst.length > 0) {
      for (i = 0; i < localst.length; i++) {
        table += " <tr>";
        table += "<td>" + localst[i].StudentName + "</td>";
        table += "<td>" + localst[i].FatherName + "</td>";
        table += "<td>" + localst[i].Age + "</td>";
        table += "<td>" + localst[i].DateofBirth + "</td>";
  
        table += "<td>" + localst[i].City + "</td>";
        table += "<td>" + localst[i].Address + "</td>";
        table += "<td>" + localst[i].Pincode + "</td>";
        table += "<td>" + localst[i].MaleFemale + "</td>";
  
        table +=
          '<td><button class="btn btn-outline-light  mr-3 w-lg-50 w-md-100 fw-bolder rounded" style=" background-image: linear-gradient(to right, blue 0%, red  51%, black  100%)" onclick="Edit(' +
          i +
          ')">Edit</button><button class="btn btn-outline-light fw-bolder w-lg-50 w-md-100 rounded" style=" background-image: linear-gradient(to right, blue 0%, red  51%, black  100%)"  onclick="Delete(' +
          i +
          ')">Delete</button></td>';
        table += "</tr>";
      }
    }
    document.getElementById("demo").innerHTML = table;
  }
  function Edit(id) {
    editId = id;
    console.log(id);
    console.log(localst[id]);
  
    document.getElementById("StudentName").value = localst[id].StudentName;
    document.getElementById("FatherName").value = localst[id].FatherName;
    document.getElementById("Age").value = localst[id].Age;
    document.getElementById("DateofBirth").value = localst[id].DateofBirth;
  
    document.getElementById("City").value = localst[id].City;
    document.getElementById("Address").value = localst[id].Address;
    document.getElementById("Pincode").value = localst[id].Pincode;
    document.getElementById("MaleFemale").value = localst[id].MaleFemale;
  
  }
  
  function Delete(id) {
    console.log(id);
    localst.splice(id, 1);
    console.log(localst);
    localStorage.setItem("array", JSON.stringify(localst));
    addTable();
  }