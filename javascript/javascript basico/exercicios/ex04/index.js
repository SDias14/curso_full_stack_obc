let menu = prompt("Enter a number between 1 and 6");

do {
  if (menu == 1) {
    alert("You have chosen 1");
  } else if (menu == 2) {
    alert("You have chosen 2");
  } else if (menu == 3) {
    alert("You have chosen 3");
  } else if (menu == 4) {
    alert("You have chosen 4");
  } else if (menu == 5) {
    alert("You have chosen 5");
  } else if(menu == 6){
    break;
  }
  menu = prompt("Enter a number between 1 and 6");
} while (menu != 6);
