function cekpasang(array) {
  var current = null;
  var cnt = 0;
  let total = 0;

  if (Array.isArray(array)) {
    array.sort();

    for (var i = 0; i <= array.length; i++) {
      if (array[i] != current) {
        if (cnt > 0) {
          total += Math.floor(cnt / 2);
          document.write(
            current + " comes --> " + Math.floor(cnt / 2) + " times"
          );
        }
        current = array[i];

        cnt = 1;
      } else {
        cnt++;
      }
    }
    console.log(total);
  } else {
    return "Bukan array!";
  }
}

cekpasang([2, 3, 4, 5, 2, 5, 5, 5, 7, 7, 3, 4, 7]);
