export function showNotification(setter) {
  //Set the notification to be visible
  setter(true);
  //Hide the notification after 2000 milliseconds (2 seconds)
  setTimeout(() => {
    setter(false);
  }, 2000);
}

export function checkWin(correct, wrong, word) {
  let status = "win";

  //Check for win
  word.split("").forEach((letter) => {
    if (!correct.includes(letter)) {
      status = "";
    }
  });

  //Check for lose
  if (wrong.length === 6) status = "lose";

  return status;
}
