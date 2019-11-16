function triangle(index) {
  let y = 10;
  let x = 10;

  let str = "";

  for (let i = 0; i < index; i++) {
    for (let j = 0; j <= index; j++) {
      if (i + j >= index) {
        str = str.concat("*");
      } else {
        str = str.concat(" ");
      }
    }
    str = str.concat("\n");
  }

  console.log(str);
}

triangle(6);
