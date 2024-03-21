let terms = [];
let details = {};
let editText;
function backFunction() {
  window.location.replace("table.html");
}

function submitFunction() {
  var Studentname = document.getElementById("Studentname").value;
  var Fathername = document.getElementById("Fathername").value;
  var Age = document.getElementById("Age").value;
  var DOB = document.getElementById("DOB").value;
  var City = document.getElementById("City").value;
  var Address = document.getElementById("Address").value;
  var Pincode = document.getElementById("Pincode").value;
  var Gender = document.getElementById("Gender").value;

  console.log(Studentname);
  console.log(Fathername);
  console.log(Age);
  console.log(DOB);
  console.log(City);
  console.log(Address);
  console.log(Pincode);
  console.log(Gender);

  if (Studentname == "") {
    document.getElementById("Studentname").innerHTML = "required";
    document.getElementById("Studentname").style.border = "2px solid red";
  } else {
    document.getElementById("Studentname").innerHTML = " ";
    document.getElementById("Studentname").style.border = "2px solid green";
  }
  if (Fathername == "") {
    document.getElementById("Fathername").innerHTML = "required";
    document.getElementById("Fathername").style.border = "2px solid red";
  } else {
    document.getElementById("Fathername").innerHTML = " ";
    document.getElementById("Fathername").style.border = "2px solid green";
  }
    if (Age == "") {
    document.getElementById("Age").innerHTML = "required";
    document.getElementById("Age").style.border = "2px solid red";
  } else {
    document.getElementById("Age").innerHTML = " ";
    document.getElementById("Age").style.border = "2px solid green";
  }
 
  if (DOB == "") {
    document.getElementById("DOB").innerHTML = "required";
    document.getElementById("DOB").style.border = "2px solid red";
  } else {
    document.getElementById("DOB").innerHTML = " ";
    document.getElementById("DOB").style.border = "2px solid green";
  }
  
  if (City == "") {
    document.getElementById("City").innerHTML = "required";
    document.getElementById("City").style.border = "2px solid red";
  }
 
  else {
    document.getElementById("City").innerHTML = " ";
    document.getElementById("City").style.border = "2px solid green";
  }
  
  if (Address == "") {
    document.getElementById("Address").innerHTML = "required";
    document.getElementById("Address").style.border = "2px solid red";
  }
 
  else {
    document.getElementById("Address").innerHTML = " ";
    document.getElementById("Address").style.border = "2px solid green";
  }
  
  if (Pincode == "") {
    document.getElementById("Pincode").innerHTML = "required";
    document.getElementById("Pincode").style.border = "2px solid red";
  }
 
  else {
    document.getElementById("Pincode").innerHTML = " ";
    document.getElementById("Pincode").style.border = "2px solid green";
  }

  if (Gender == "") {
    document.getElementById("Gender").innerHTML = "required";
    document.getElementById("Gender").style.border = "2px solid red";
  }
 
  else {
    document.getElementById("Gender").innerHTML = " ";
    document.getElementById("Gender").style.border = "2px solid green";
  }
  if (Studentname == "" || Fathername == "" || Age == "" || DOB == "" || City == "" || Address == "" || Pincode == "" || Gender == "") {
    return false;
  }
  
  details["Studentname"] = Studentname;
  details["Fathername"] = Fathername;
   details["Age"] = Age;
   details["DOB"] = DOB;
   const Birth = new Date(details.DOB);
  const formattedDOB = Birth.toLocaleDateString("en-GB");
  details["DOB"] = formattedDOB;
   details["City"] = City;
   details["Address"] = Address;
   details["Pincode"] = Pincode;
   details["Gender"] = Gender;

  if (editText != undefined) {
    let url = "https://64d9b580e947d30a260a3a77.mockapi.io/work/workerscom";
    fetch(url + "/" + editText, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(details),
    })
      .then((Result) => Result.json())
      .then((string) => {
        console.log(string);
        window.location.replace("table.html");
        // getList();
        console.log(`Title of our response :  ${string.Studentname}`);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  } else {
    let url = "https://64d9b580e947d30a260a3a77.mockapi.io/work/workerscom";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(details),
    })
      .then((Result) => Result.json())
      .then((string) => {
        console.log(string);
        window.location.replace("table.html");
        // getList();
        console.log(`Title of our response :  ${string.Studentname}`);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }
  document.getElementById("Studentname").value = "";
  document.getElementById("Fathername").value = "";       
   document.getElementById("Age").value = "";
   document.getElementById("DOB").value = "";
   document.getElementById("City").value = "";
   document.getElementById("Address").value = "";
   document.getElementById("Pincode").value = "";
   document.getElementById("Gender").value = "";
}
function newpage() {
  // getList();
  Edit();
}
function Edit() {
  console.log(window);
  var url_string = window.location.href.toLocaleLowerCase();
  console.log(url_string);
  var url1 = new URL(url_string);
  console.log(url1);
  var id = url1.searchParams.get("id");
  console.log(id);
  editText = id;
  if (id) {
    let url = "https://64d9b580e947d30a260a3a77.mockapi.io/work/workerscom";
    fetch(url + "/" + id, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((Result) => Result.json())
      .then((string) => {
        console.log(string);
        terms = string;
        console.log(terms);
        document.getElementById("Studentname").value = terms.Studentname;
        document.getElementById("Fathername").value = terms.Fathername;
        document.getElementById("Age").value = terms.Age;
        // document.getElementById("DOB").value = terms.DOB;
        terms.DOB = terms.DOB.split("/").reverse().join("-");
        document.getElementById("DOB").value = terms.DOB;
        document.getElementById("City").value = terms.City;
        document.getElementById("Address").value = terms.Address;
        document.getElementById("Pincode").value = terms.Pincode;
        document.getElementById("Gender").value = terms.Gender;
        console.log(`Title of our response :  ${string.Studentname}`);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }
}
