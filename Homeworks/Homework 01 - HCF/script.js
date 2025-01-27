// Return an array that will display only student's first name and last name as a string
// All students sorted by the averageGrade property (ascending)
// All students with an average grade higher than 3
// All female student names with an average grade of 5
// All male student full names who live in Skopje and are over 18 years old
// The average grades of all female students over the age of 24
// All male students with a name starting with B and average grade over 2

async function getAPI() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"
    );
    const data = await response.json();
    console.log(response);
    console.log(data);
    // 1. Return an array that will display only student's first name and last name as a string
    data.forEach((user) => {
      console.log(`${user.firstName} ${user.lastName}`);
    });
    // 2. All students sorted by the averageGrade property (ascending)
    const prosekOcena = data.sort((a, b) => a.averageGrade - b.averageGrade);
    console.log("Sorted by Grade (Ascending):", prosekOcena);
    // 3. All students with an average grade higher than 3
    const prosekNadTri = data.filter((user) => user.averageGrade > 3);
    console.log(prosekNadTri);
    // 4. All female student names with an average grade of 5
    const zenaProsekPet = data
      .filter((user) => user.gender === "Female" && user.averageGrade === 5)
      .map((user) => `${user.firstName}`);
    console.log(zenaProsekPet);
    // 5. All male student full names who live in Skopje and are over 18 years old
    const tipSkopjeNadOsamnaes = data
      .filter(
        (user) =>
          user.age > 18 && user.city === "Skopje" && user.gender === "Male"
      )
      .map((user) => `${user.firstName} ${user.lastName}`);
    console.log(tipSkopjeNadOsamnaes);
    // 6. The average grades of all female students over the age of 24
    const ocenkaProsekTipkaNadDvaesChetri = data
      .filter((user) => user.gender === "Female" && user.age > 24)
      .map((user) => `${user.firstName} ${user.lastName} ${user.averageGrade}`);
    console.log(ocenkaProsekTipkaNadDvaesChetri);
    // 7. All male students with a name starting with B and average grade over 2
    const imeBSoTochkaNadDvojka = data.filter(
      (user) =>
        user.gender === "Male" &&
        user.averageGrade > 2 &&
        user.firstName &&
        user.firstName.includes("B")
    );
    console.log(imeBSoTochkaNadDvojka);
  } catch (error) {
    console.log(`Error Message`, error.message);
  }
}

getAPI();
