document.getElementById("addCourseBtn").addEventListener("click", addCourse);
document.getElementById("calculateBtn").addEventListener("click", calculateGPA);
document.getElementById("clearBtn").addEventListener("click", clearAll);

function addCourse() {
  const courseContainer = document.getElementById("courseContainer");

  const courseRow = document.createElement("div");
  courseRow.className = "course-row";

  courseRow.innerHTML = `
    <input type="text" class="course-name" placeholder="Course Name (optional)">
    <input type="number" class="course-credits" placeholder="Credits" min="1">
    <select class="course-grade">
      <option value="">Grade</option>
      <option value="4.0">A</option>
      <option value="3.7">A-</option>
      <option value="3.3">B+</option>
      <option value="3.0">B</option>
      <option value="2.7">B-</option>
      <option value="2.3">C+</option>
      <option value="2.0">C</option>
      <option value="1.7">C-</option>
      <option value="1.0">D</option>
      <option value="0.0">F</option>
    </select>
  `;

  courseContainer.appendChild(courseRow);
}

function calculateGPA() {
  const creditsElements = document.querySelectorAll(".course-credits");
  const gradeElements = document.querySelectorAll(".course-grade");

  let totalCredits = 0;
  let totalGradePoints = 0;

  for (let i = 0; i < creditsElements.length; i++) {
    const credits = parseFloat(creditsElements[i].value);
    const grade = parseFloat(gradeElements[i].value);

    if (!isNaN(credits) && !isNaN(grade)) {
      totalCredits += credits;
      totalGradePoints += credits * grade;
    }
  }

  if (totalCredits === 0) {
    alert("Please enter valid course details!");
    return;
  }

  const gpa = totalGradePoints / totalCredits;
  document.getElementById("gpaResult").textContent = `Your GPA is ${gpa.toFixed(2)}`;
}

function clearAll() {
  document.getElementById("courseContainer").innerHTML = `
    <div class="course-row">
      <input type="text" class="course-name" placeholder="Course Name (optional)">
      <input type="number" class="course-credits" placeholder="Credits" min="1">
      <select class="course-grade">
        <option value="">Grade</option>
        <option value="4.0">A</option>
        <option value="3.7">A-</option>
        <option value="3.3">B+</option>
        <option value="3.0">B</option>
        <option value="2.7">B-</option>
        <option value="2.3">C+</option>
        <option value="2.0">C</option>
        <option value="1.7">C-</option>
        <option value="1.0">D</option>
        <option value="0.0">F</option>
      </select>
    </div>
  `;
  document.getElementById("gpaResult").textContent = "";
}

function calculateGrade() {
    const userMarks = parseFloat(document.getElementById("userMarks").value);
    const highestMarks = parseFloat(document.getElementById("highestMarks").value);
    const lowestMarks = parseFloat(document.getElementById("lowestMarks").value);
    const classStrength = parseInt(document.getElementById("classStrength").value, 10);
  
    if (!userMarks || !highestMarks || !lowestMarks || !classStrength || userMarks > highestMarks || userMarks < lowestMarks) {
      alert("Please enter valid marks and class strength!");
      return;
    }
  
    const range = highestMarks - lowestMarks;
    const step = range / 10;
  
    let grade;
    if (userMarks >= highestMarks - step) grade = "A";
    else if (userMarks >= highestMarks - 2 * step) grade = "A-";
    else if (userMarks >= highestMarks - 3 * step) grade = "B+";
    else if (userMarks >= highestMarks - 4 * step) grade = "B";
    else if (userMarks >= highestMarks - 5 * step) grade = "B-";
    else if (userMarks >= highestMarks - 6 * step) grade = "C+";
    else if (userMarks >= highestMarks - 7 * step) grade = "C";
    else if (userMarks >= highestMarks - 8 * step) grade = "C-";
    else if (userMarks >= highestMarks - 9 * step) grade = "D";
    else grade = "F";
  
    document.getElementById("gradeResult").textContent = `Your grade is ${grade}`;
  }
  