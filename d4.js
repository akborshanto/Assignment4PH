function password(obj) {
  if (
    !obj.name ||
    !obj.birthYear ||
    !obj.siteName ||
    obj.birthYear.toString().length < 4
  ) {
    return "Invalid";
  }

  let name = obj.name;
  let birthYear = obj.birthYear;
  let siteName = obj.siteName;

  let capitalize = siteName.charAt(0).toUpperCase() + siteName.slice(1);
  let passGen = `${capitalize}#${name}@${birthYear}`;
  return passGen;
}
console.log(password({ name: "kolimuddin", birthYear: 1999 , siteName: "google" }))