// // Callback e funkcija sho ja stavash u druga funkcija da bide izvrshena chim zavrshi nekoja operacija

// function greet(name, callback) {
//   const message = `Hello ${name}`;
//   callback(message);
// }

// function showGreeting(greetingMessage) {
//   console.log(greetingMessage);
// }

// greet("Bube", showGreeting);

// // Callback pekol
// // Scenario:
// // 1) zemi user data od databaza
// // 2) fetch user comments
// // 3) azuriraj UI
// // 4) logiraj uspeshna poraka

// // function getUser(userId, callback) {
// //   setTimeout(() => {
// //     console.log(`Fetched used with ID: ${userId}`);
// //     callback({ userId: userId, name: "Bube" });
// //   }, 1000);
// // }

// // function getUserComments(user, callback) {
// //   setTimeout(() => {
// //     console.log(`Fetched comments for user ${user.name}`);
// //     callback(["Comment A", "Comment B"]);
// //   }, 1000);
// // }

// // function updateUI(user, comments, callback) {
// //   setTimeout(() => {
// //     console.log(`UI updated with data for ${user.name} and their comments`);
// //     callback();
// //   }, 1000);
// // }

// // getUser(101, (user) => {
// //   getUserComments(user, (comments) => {
// //     updateUI(user, comments, () => {
// //       console.log("All operations completed. Now we are done.");
// //     });
// //   });
// // });

// // Seto ova e smeneto so then i catch

// // Pochisto reshenie

// function getUser(userId, onSuccess, onError) {
//   setTimeout(() => {
//     const foundUser = { userId: userId, name: "Bob" };

//     if (!userId || userId < 0) {
//       onError("Invalid user id!");
//       return;
//     }
//     onSuccess(foundUser);
//   }, 500);
// }

// function handleUserData(user) {
//   console.log(`User found: ${user.name}`);
// }
// function handleError(error) {
//   console.error(`ERROR: ${error}`);
// }
// getUser(123, handleUserData, handleError);

// // PROMISES

// // PROMISE e objekt sho reprezentira eventualnoto izvrshuvanje ili neizvrshuvanje na asinhrona operacija i negovoto vrakanje na vrednost

// // States: pending, fulfiled, rejected

function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Failed to fetch data");
      }
    }, 1000);
  });
}
// fetchDataPromise()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// function step1(result) {
//   console.log("Step 1 complete", result);
//   return "Result from step 1";
// }
// function step2(result) {
//   console.log("Step 2 complete", result);
//   return "Result from step 2";
// }
// function step3(result) {
//   console.log("Step 3 complete", result);
//   return "Result from step 3";
// }

// fetchDataPromise()
//   .then(step1)
//   .then(step2)
//   .then(step3)
//   .then((finalResult) => {
//     console.log("Final result:", finalResult);
//   })
//   .catch((error) => {
//     console.error("error in chain", error);
//   });

// Real life example of using promises

function getDocuments() {
  return new Promise((resolve, reject) => {
    fetch(
      "https://raw.githubusercontent.com/sedc-codeacademy/skwd9-04-ajs/main/Samples/documents.json"
    )
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function getImportantDocument(documents) {
  const importantDocuments = documents.filter((document) => document.important);
  return new Promise((resolve, reject) => {
    if (importantDocuments.length === 0) {
      reject("There are no important documents");
    }
    setTimeout(() => {
      resolve(importantDocuments);
    }, 3000);
  });
}

function checkDocuments(documents) {
  if (!document || typeof documents !== "object") {
    throw new Error("Problem with documents!");
  }
  if (documents.length === 0) {
    throw new Error("There are no documents");
  }
}
function showDocuments(documents) {
  documents.forEach((document) => {
    console.log(`${document.name}.${document.type}(${document.size}mb)`);
  });
}
getDocuments()
  .then((data) => {
    console.log("We got the documents!");
    checkDocuments(data);
    return getImportantDocument(data);
  })
  .then((data) => {
    return showDocuments(data);
  })
  .catch((error) => {
    console.error(`Error:`, error);
  });
