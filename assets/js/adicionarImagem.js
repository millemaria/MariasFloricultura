let img = document.getElementById("img-user");
let input = document.getElementById("foto");

input.onchange = (e) => {
  if (input.files[0]) img.src = URL.createObjectURL(input.files[0]);
};
