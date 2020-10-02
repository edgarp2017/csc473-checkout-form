function shippingForm() {
  var checkBox = document.getElementById("shippingAddress");
  var text = document.getElementById("shippingForm");
  if (checkBox.checked == false) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
