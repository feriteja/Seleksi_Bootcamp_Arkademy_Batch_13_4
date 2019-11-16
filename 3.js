function cek_kata(stringHere) {
  let value = stringHere;

  let angkaseluruh = value.match(/\S+/g).length;

  let angkailang = value.split(/\s+[^0-9]/).length;

  return angkailang + "/" + angkaseluruh;
}

cek_kata("ini adalah sebuah kat");
