// =========================
// ADMIN LOGIN
// =========================

function login() {

    let username =
        document.getElementById("username").value;

    let password =
        document.getElementById("password").value;

    if (username === "admin" && password === "admin123") {

        document.getElementById("loginMessage").innerHTML =
            "✅ Login Successful! Welcome Admin.";

    } else {

        document.getElementById("loginMessage").innerHTML =
            "❌ Invalid Username or Password.";

    }
}


// =========================
// TEACHERS
// =========================

let teachers = [
    {
        id: "T001",
        name: "Prof. Amit Patil"
    },

    {
        id: "T002",
        name: "Prof. Sneha Joshi"
    },

    {
        id: "T003",
        name: "Prof. Rahul Shinde"
    },

    {
        id: "T004",
        name: "Prof. Priya More"
    }
];


function displayTeachers() {

    let table =
        document.getElementById("teacherTable");

    table.innerHTML = "";

    teachers.forEach(function(teacher) {

        table.innerHTML += `
            <tr>
                <td>${teacher.id}</td>
                <td>${teacher.name}</td>
            </tr>
        `;

    });
}


function addTeacher() {

    let name =
        document.getElementById("teacherName").value;

    let id =
        document.getElementById("teacherId").value;

    if (name === "" || id === "") {

        alert("Please enter Teacher Name and ID.");

        return;
    }

    teachers.push({
        id: id,
        name: name
    });

    displayTeachers();

    document.getElementById("teacherName").value = "";
    document.getElementById("teacherId").value = "";
}


// =========================
// SUBJECTS
// =========================

let subjects = [

    {
        code: "SUB01",
        name: "Python"
    },

    {
        code: "SUB02",
        name: "DBMS"
    },

    {
        code: "SUB03",
        name: "Cloud Computing"
    },

    {
        code: "SUB04",
        name: "E-Commerce"
    },

    {
        code: "SUB05",
        name: "Web Technology"
    }

];


function displaySubjects() {

    let table =
        document.getElementById("subjectTable");

    table.innerHTML = "";

    subjects.forEach(function(subject) {

        table.innerHTML += `
            <tr>
                <td>${subject.code}</td>
                <td>${subject.name}</td>
            </tr>
        `;

    });
}


function addSubject() {

    let name =
        document.getElementById("subjectName").value;

    let code =
        document.getElementById("subjectCode").value;

    if (name === "" || code === "") {

        alert("Please enter Subject Name and Code.");

        return;
    }

    subjects.push({
        code: code,
        name: name
    });

    displaySubjects();

    document.getElementById("subjectName").value = "";
    document.getElementById("subjectCode").value = "";
}


// =========================
// CLASSES
// =========================

let classes = [

    {
        name: "SYBSc IT",
        division: "A"
    },

    {
        name: "SYBSc IT",
        division: "B"
    }

];


function displayClasses() {

    let table =
        document.getElementById("classTable");

    table.innerHTML = "";

    classes.forEach(function(item) {

        table.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.division}</td>
            </tr>
        `;

    });
}


function addClass() {

    let name =
        document.getElementById("className").value;

    let division =
        document.getElementById("division").value;

    if (name === "" || division === "") {

        alert("Please enter Class and Division.");

        return;
    }

    classes.push({
        name: name,
        division: division
    });

    displayClasses();

    document.getElementById("className").value = "";
    document.getElementById("division").value = "";
}


// =========================
// ROOMS
// =========================

let rooms = [

    "Room 101",
    "Room 102",
    "Computer Lab 1",
    "Computer Lab 2"

];


function displayRooms() {

    let list =
        document.getElementById("roomList");

    list.innerHTML = "";

    rooms.forEach(function(room) {

        list.innerHTML += `<li>🚪 ${room}</li>`;

    });
}


function addRoom() {

    let room =
        document.getElementById("roomName").value;

    if (room === "") {

        alert("Please enter room name.");

        return;
    }

    rooms.push(room);

    displayRooms();

    document.getElementById("roomName").value = "";
}


// =========================
// TIME SLOTS
// =========================

let slots = [

    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:15 - 12:15",
    "12:15 - 01:15",
    "02:00 - 03:00",
    "03:00 - 04:00"

];


function displaySlots() {

    let list =
        document.getElementById("slotList");

    list.innerHTML = "";

    slots.forEach(function(slot) {

        list.innerHTML += `<li>⏰ ${slot}</li>`;

    });
}


function addSlot() {

    let slot =
        document.getElementById("timeSlot").value;

    if (slot === "") {

        alert("Please enter time slot.");

        return;
    }

    slots.push(slot);

    displaySlots();

    document.getElementById("timeSlot").value = "";
}


// =========================
// GENERATE TIMETABLE
// =========================

function generateTimetable() {

    let html = `

    <table>

        <tr>
            <th>Day</th>
            <th>09:00-10:00</th>
            <th>10:00-11:00</th>
            <th>11:15-12:15</th>
            <th>12:15-01:15</th>
            <th>02:00-03:00</th>
            <th>03:00-04:00</th>
        </tr>

        <tr>
            <th>Monday</th>
            <td>Python</td>
            <td>DBMS</td>
            <td>Cloud Computing</td>
            <td>Web Technology</td>
            <td>E-Commerce</td>
            <td>Python</td>
        </tr>

        <tr>
            <th>Tuesday</th>
            <td>DBMS</td>
            <td>Python</td>
            <td>Web Technology</td>
            <td>Cloud Computing</td>
            <td>E-Commerce</td>
            <td>DBMS</td>
        </tr>

        <tr>
            <th>Wednesday</th>
            <td>Cloud Computing</td>
            <td>Web Technology</td>
            <td>Python</td>
            <td>DBMS</td>
            <td>E-Commerce</td>
            <td>Cloud Computing</td>
        </tr>

        <tr>
            <th>Thursday</th>
            <td>Web Technology</td>
            <td>Python</td>
            <td>DBMS</td>
            <td>E-Commerce</td>
            <td>Cloud Computing</td>
            <td>Python</td>
        </tr>

        <tr>
            <th>Friday</th>
            <td>E-Commerce</td>
            <td>Cloud Computing</td>
            <td>DBMS</td>
            <td>Python</td>
            <td>Web Technology</td>
            <td>E-Commerce</td>
        </tr>

    </table>

    `;

    document.getElementById("timetableResult").innerHTML = html;

    document.getElementById("generateMessage").innerHTML =
        "✅ Timetable generated successfully!";
}


// =========================
// SHOW SECTION
// =========================

function showSection(id) {

    document.getElementById(id)
        .scrollIntoView({
            behavior: "smooth"
        });

}


// =========================
// LOAD DEFAULT DATA
// =========================

displayTeachers();

displaySubjects();

displayClasses();

displayRooms();

displaySlots();

generateTimetable();
