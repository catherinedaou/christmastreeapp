onEvent(getProperty("Christmasball", "hidden "), "click", function( ) {
  showElement("image5");
});
onEvent("button3", "click", function( ) {
  showElement("image1");
});
onEvent("button2", "click", function( ) {
  showElement("image2");
  showElement("image3");
});
onEvent("button4", "click", function( ) {
  showElement("image6");
  showElement("image5");
});
onEvent("button1", "click", function( ) {
  showElement("image4");
});
showElement("");
