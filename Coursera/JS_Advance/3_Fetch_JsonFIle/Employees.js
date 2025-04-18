async function fetchEmployees() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      return new Error("Cannot get the response!!");
    }

    let data = await response.json();
    display(data);
  } catch (error) {
    console.log("Have an error : " + error);
  }
}

function display(data) {
  data.forEach((employee) => {
    console.log(`${employee.id} - ${employee.name}`);
  });
}

//main function
fetchEmployees();


