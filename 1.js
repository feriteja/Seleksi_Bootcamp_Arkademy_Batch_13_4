const name = "Feri Teja Kusuma";
const age = "23";

function biodata(name, age) {
  name = name;
  age = age;
  let address =
    "Jl. Babakan Cianjur RT.8 RW.21 Desa. Sukamanah Kec. Pangalengan Kab. Bandung";
  let hobbies = ["game", "movie"];
  let is_married = false;
  let list_school = [
    {
      name: "SMAN 1 Pangalengan",
      year_in: "2011",
      year_out: "2014",
      major: "scient"
    },
    {
      name: "TELKOM University",
      year_in: "2014",
      year_out: "2017",
      major: " Diploma of Telecommunication Engineering"
    },
    {
      name: "TELKOM University",
      year_in: "2017",
      year_out: "2019",
      major: " Bachelorof Telecommunication Engineering"
    }
  ];
  let skills = [
    { Java: "beginner" },
    { JavaScript: "beginner" },
    { Python: "beginner" }
  ];
  let interest_in_coding = true;

  let merge = {
    name,
    age,
    address,
    hobbies,
    is_married,
    list_school,
    skills,
    interest_in_coding
  };

  let myJSON = JSON.stringify(merge);
  return myJSON;
}

console.log(biodata(name, age));
