/*

// Chaining Async Operations
// Chaining async operations means performing multiple asynchronous tasks one after another. The next task starts only after the previous task is completed.


// example Using Promise Chaining (.then())
function login() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Login Successful");
      resolve();
    }, 1000);
  });
}

function getProfile() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Profile Loaded");
      resolve();
    }, 1000);
  });
}

function showDashboard() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Dashboard Displayed");
      resolve();
    }, 1000);
  });
}

login()
  .then(() => getProfile())
  .then(() => showDashboard())
  .then(() => console.log("All Tasks Completed"));

// Same Example Using async/await

async function start() {
  await login();
  await getProfile();
  await showDashboard();

  console.log("All Tasks Completed");
}

start();


*/