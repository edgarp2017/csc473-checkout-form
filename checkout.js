function shippingForm() {
  var checkBox = document.getElementById("shippingAddress");
  var form = document.getElementById("shippingForm");
  var first_name = document.getElementById("shipping-first-name");
  var last_name = document.getElementById("shipping-last-name");
  var shipping_address = document.getElementById("shipping-address");
  var shipping_city = document.getElementById("shipping-city");
  var shipping_state = document.getElementById("shipping-state");
  var shipping_zip = document.getElementById("shipping-zip");

  if (checkBox.checked == false) {
    form.style.display = "block";
    first_name.required = true;
    last_name.required = true;
    shipping_address.required = true;
    shipping_city.required = true;
    shipping_state.required = true;
    shipping_zip.required = true;
  } else {
    form.style.display = "none";
    first_name.required = false;
    last_name.required = false;
    shipping_address.required = false;
    shipping_city.required = false;
    shipping_state.required = false;
    shipping_zip.required = false;
  }
}
