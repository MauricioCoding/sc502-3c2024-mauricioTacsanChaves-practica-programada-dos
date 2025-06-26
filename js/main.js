document.addEventListener("DOMContentLoaded", function () {

  loadStudents();
  const text_change_button = document.querySelector("#text_change_button")
  text_change_button.addEventListener("click", textChanger)

  const check_age_button = document.querySelector("#age_button")
  check_age_button.addEventListener("click", checkAge)
});

const students = [
  {
    name: "Sebastian",
    lastname: "Del cid",
    grade: 9.9
  },
  {
    name: "Ghengis",
    lastname: "Castro",
    grade: 8.5
  },
  {
    name: "Fidel",
    lastname: "Magnus",
    grade: 7.9
  },
  {
    name: "Norman",
    lastname: "Redus",
    grade: 10
  },
]


const textChanger = () => {
  const paragraph1 = document.getElementById("paragraph_name");

  if (paragraph1.innerHTML === "Im the text that is getting changed!!!!") {
    paragraph1.innerHTML = "Lorem Im just kidding this is the new text jeje";
  } else {
    paragraph1.innerHTML = "Im the text that is getting changed!!!!";
  }
};

const checkAge = () => {

  const paragraph2 = document.getElementById("paragraph_age");
  const ageInput = document.getElementById("userAge");
  const age = parseInt(ageInput.value);

  if (isNaN(age)) {
    paragraph2.innerHTML = "Please enter your age";
  }
  else if (age >= 18) {
    paragraph2.innerHTML = "Welcome!! come right into the chess club!!";
  } else {
    paragraph2.innerHTML = "Aren't you in pre-school?"
  };
};

const loadStudents = () => {
  const section = document.getElementById("student_section");

  let total = 0;

  students.forEach((student) => {
    const studentDiv = document.createElement("div");
    studentDiv.classList.add("student-card", "mb-4");

    studentDiv.innerHTML = `
      <p><strong>Name:</strong> ${student.name} ${student.lastname}</p>
      <p><strong>Grade:</strong> ${student.grade}</p>
    `;

    section.appendChild(studentDiv);

    total += student.grade;
  });

  const average = total / students.length;


  const avgParagraph = document.createElement("p");
  avgParagraph.innerHTML = `<strong>Average Grade:</strong> ${average.toFixed(2)}`;
  avgParagraph.classList.add("mt-4");

  section.appendChild(avgParagraph);
};
