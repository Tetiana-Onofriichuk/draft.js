` use strict`;

// console.log(checkAge(30));
// console.log(checkAge(10));

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return "There are no products in the order!";
//   } else if (ordered > available) {
//     return "Your order is too large, there are not enough items in stock!";
//   } else {
//     return "The order is accepted. Our manager will contact you";
//   }
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));

// function getSubscriptionPrice(type) {
//   switch (type) {
//     case "starter":
//       return 0;
//       break;
//     case "professional":
//       return 20 + " dollars";
//       break;
//     case "organization":
//       return 50;
//       break;
//     default:
//       return "Invalid subscription type!";
//   }
// }

// console.log(getSubscriptionPrice("professional"));

// function getScreenType(screenWidth) {
//   const sm = 320;
//   const md = 768;
//   const lg = 1200;

//   if (screenWidth <= sm) {
//     return "mobile";
//   } else if (screenWidth > sm && screenWidth <= md) {
//     return "tablet";
//   } else if (screenWidth > md && screenWidth <= lg) {
//     return "desktop";
//   } else {
//     return "godzilla";
//   }
// }

// console.log(getScreenType(75));
// console.log(getScreenType(850));
// console.log(getScreenType(1135));
// console.log(getScreenType(1200));
// console.log(getScreenType(1450));
// console.log(getScreenType(0));

// function checkAge(age) {
//   if (age >= 14 && age <= 90) {
//     return "oK";
//   }
// }
// console.log(checkAge(25));

// function checkAccess(subType) {
//   if (subType === "pro" || subType === "vip") {
//     return "true";
//   } else {
//     return "false";
//   }
// }

// console.log(checkAccess("starter"));

// function canUserChat(isOnline, isBlocked) {
//   const canChat = isOnline && !isBlocked;

//   if (canChat) {
//     return "Can type in chat!";
//   } else {
//     return "Blocked from typing in chat!";
//   }
// }
// console.log(canUserChat(true, false));

// function toggleModalVisibility(isVisible) {
//   if (!isVisible) {
//     return "true";
//   } else {
//     return "false";
//   }
// }

// function getSubstring(string, length) {}

// function getSubstring(string, length) {
//   return string.slice(0, length);
// }

// console.log(getSubstring("Hello world", 8));

// function normalizeInput(input, to) {
//   if (to == "upper") {
//     return input.toUpperCase();
//   } else if (to == "lower") {
//     return input.toLowerCase();
//   } else {
//     return "no";
//   }
// }

// console.log(normalizeInput("This ISN'T SpaM", "upper"));
// console.log(normalizeInput("Stay Awhile and Listen", "lower"));
// console.log(normalizeInput("Big SALE", "upper"));

// function checkForName(fullName, firstName) {
//   if (fullName.toLowerCase().includes(firstName.toLowerCase())) {
//     return "true";
//   } else {
//     return "false";
//   }
// }

// function checkFileExtension(fileName, ext) {
//   if (fileName.endsWith(ext)) {
//     return "File extension matches";
//   } else {
//     return "File extension does not match";
//   }
// }

// function getFileName(file) {
//   if (file.indexOf(".") !== -1) {
//     return file.slice(0, file.indexOf("."));
//   } else {
//     return file;
//   }
// }

// console.log(getFileName("index"));
// console.log(getFileName("app"));

// function createFileName(name, ext) {
//   return name.trim() + "." + ext;
// }
// console.log(createFileName(" presentation", "xml"));
