function username(username) {
  if (username.length == 7 && username == username.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

function password(password) {
  let first = password.match(/^[A-Za-z]/);

  let last = password.match(/\d$/);

  let tripleFirst = first + first + first;
  let triplelast = last + last + last;

  console.log(tripleFirst + "*" + triplelast);
  if (password == tripleFirst + "*" + triplelast) {
    return true;
  } else {
    return false;
  }
}
username("FERITEJ");
password("ppp*222");
