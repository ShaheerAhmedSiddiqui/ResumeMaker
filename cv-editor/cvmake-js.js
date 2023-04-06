//toggle//
function toggle() {
    var menu = document.getElementById("menuItems");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none"
    }
}

var table = document.getElementById("table");

function append() {
    var expr_inp = document.getElementById("expr_inp").value;
    var cut = document.getElementById("cut");
    if (expr_inp !== "") {
        var keyExpt = localStorage.getItem("keyExprt")
        console.log(localStorage.getItem("keyExprt"));
        $('#table').append('<tr class="table-tr"><td class="data">' + expr_inp + '</td></tr>');
        $('#expertiseTable').append('<tr class="table-tr"><td>' + expr_inp + '</td></tr>');
    } else {
        alert("Please Fill Information")
    }
}

function add() {
    var add_lang = document.getElementById("add-lang").value;
    var cut = document.getElementById("cut");
    if (add_lang !== "") {
        $('#mytable').append('<tr class="table-tr"><td class="data">' + add_lang + '</td></tr>');
        $('#languagestable').append('<tr class="table-tr"><td>' + add_lang + '</td></tr>');
    } else {
        alert("Please Fill Information")
    }
}



///
function addNewExp() {
    // console.log("this is the wotk")
    let new1InpNode = document.createElement("INPUT");
    new1InpNode.setAttribute("type", "text")
    new1InpNode.classList.add("expr-inp");

    let new2InpNode = document.createElement("INPUT");
    new2InpNode.setAttribute("type", "text")
    new2InpNode.classList.add("expr-inp");

    let new3InpNode = document.createElement("INPUT");
    new3InpNode.setAttribute("type", "text")
    new3InpNode.classList.add("expr-inp");

    let newTextarea = document.createElement("textarea")
    newTextarea.setAttribute("rows", 3)
    newTextarea.setAttribute("placeholder", "type here")
    newTextarea.classList.add("textarea1")
    console.log(newTextarea);


    var vl = document.getElementsByClassName("textarea1").innerHTML;
    console.log(vl);


    console.log(localStorage.getItem("keyEmail"));
}

function display() {
    var none = document.getElementById("r-editor");
    var block = document.getElementById("getResume");

    none.style.display = "none";
    block.style.display = "block"

    var edit = document.getElementById("goEdit");
    edit.style.display = "block";

    var btn = document.getElementById("btn");
    btn.style.display = "block";

    introUpdate();
    education();
    experience();
    refrence();
    imgUploade()
    
}

function imgUploade() {
    var file = document.getElementById("myFile").files[0];
    console.log(file);

    var reader = new FileReader();

    reader.readAsDataURL(file);
    console.log(reader.result);

    reader.onloadend = function () {
        document.getElementById("profileImg").src = reader.result;
    }
}

function introUpdate() {

    var yourName = document.getElementById("yourName").value;
    var namePerson = document.getElementById("namePerson").innerHTML = yourName;

    var work = document.getElementById("work").value;
    var workPerson = document.getElementById("workPerson").innerHTML = work;

    var objective = document.getElementById("objective").value;
    var objectivePerson = document.getElementById("description").innerHTML = objective;


}
function education() {
    var mat_year = document.getElementById("mat-year").value;
    document.getElementById("year1-p").innerHTML = mat_year;

    var mat_edu = document.getElementById("mat-edu").value;
    document.getElementById("year1-edu").innerHTML = mat_edu;

    var mat_sc = document.getElementById("mat-sc").value
    document.getElementById("year1-col").innerHTML = mat_sc;

    var int_year = document.getElementById("int-year").value;
    document.getElementById("year2-p").innerHTML = int_year;

    var int_edu = document.getElementById("int-edu").value;
    document.getElementById("year2-edu").innerHTML = int_edu;

    var int_sc = document.getElementById("int-sc").value
    document.getElementById("year2-col").innerHTML = int_sc;
}

function experience() {

    var expr1_year = document.getElementById("expr1-year").value;
    document.getElementById("expText1-year").innerHTML = expr1_year;
    console.log(expr1_year);

    var expr1_com = document.getElementById("expr1-com").value;
    document.getElementById("expText1-cpName").innerHTML = expr1_com;
    console.log(expr1_com);

    var expr1_job = document.getElementById("expr1-job").value;
    document.getElementById("exptext1-jt").innerHTML = expr1_job;
    console.log(expr1_job);

    var expr1_des = document.getElementById("descript1-text").value;
    document.getElementById("expText1-jd").innerHTML = expr1_des;
    console.log(expr1_des);



    var expr2_year = document.getElementById("expr2-year").value;
    document.getElementById("expText2-year").innerHTML = expr2_year;

    var expr2_com = document.getElementById("expr2-com").value;
    document.getElementById("expText2-cpName").innerHTML = expr2_com;

    var expr2_jt = document.getElementById("expr2-job").value;
    document.getElementById("exptext2-jt").innerHTML = expr2_jt;

    var expr2_descript = document.getElementById("descript2-text").value;
    document.getElementById("expText2-jd").innerHTML = expr2_descript;



    var expr3_year = document.getElementById("expr3-year").value;
    document.getElementById("expText3-year").innerHTML = expr3_year;
    console.log(expr3_year);

    var expr3_com = document.getElementById("expr1-com").value;
    document.getElementById("expText3-cpName").innerHTML = expr3_com;
    console.log(expr3_com);

    var expr3_job = document.getElementById("expr1-job").value;
    document.getElementById("exptext3-jt").innerHTML = expr3_job;
    console.log(expr3_job);

    var expr3_des = document.getElementById("descript1-text").value;
    document.getElementById("expText3-jd").innerHTML = expr3_des;
    console.log(expr3_des);
}

function refrence() {
    var ref1_name = document.getElementById("ref1-name").value;
    document.getElementById("ref1-Sname").innerHTML = ref1_name;

    var ref1_com = document.getElementById("ref1-com").value;
    document.getElementById("ref1-jp").innerHTML = ref1_com;

    var ref1_no = document.getElementById("ref1-no").value;
    document.getElementById("ref1-phone").innerHTML = ref1_no;

    var ref1_email = document.getElementById("ref1-email").value;
    document.getElementById("ref1-mail").innerHTML = ref1_email;




    var ref2_name = document.getElementById("ref2-name").value;
    document.getElementById("ref2-Sname").innerHTML = ref2_name;

    var ref2_com = document.getElementById("ref2-com").value;
    document.getElementById("ref2-jp").innerHTML = ref2_com;

    var ref2_no = document.getElementById("ref2-no").value;
    document.getElementById("ref2-phone").innerHTML = ref2_no;

    var ref2_email = document.getElementById("ref2-email").value;
    document.getElementById("ref2-mail").innerHTML = ref2_email;

}
function printCv() {

    document.getElementById("btn").style.display = "none";
    var edit = document.getElementById("goEdit");
    edit.style.display = "none";
    window.print();
    document.getElementById("btn").style.display = "block";
    document.getElementById("btn").style.margin = " 0rem 1rem";
    var edit = document.getElementById("goEdit");
    edit.style.display = "block";

    
}

function onEdit(){
    var none = document.getElementById("r-editor");
    var block = document.getElementById("getResume");

    none.style.display = "block";
    block.style.display = "none";

    var edit = document.getElementById("goEdit");
    edit.style.display = "none";

    var btn = document.getElementById("btn").style.display = "none";
    console.log("btn");
}
