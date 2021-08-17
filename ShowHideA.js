
<!-- Various toggle functions used throughout --> 
<script language="javascript">
function toggle(id1,id2) {
	var ele = document.getElementById(id1); var text = document.getElementById(id2);
	if (ele.style.display == "block") {ele.style.display = "none"; text.innerHTML = "Show Solution";}
		else {ele.style.display = "block"; text.innerHTML = "Hide Solution";}}
function togglecode(id1,id2) {
   var ele = document.getElementById(id1); var text = document.getElementById(id2);
   if (ele.style.display == "block") {ele.style.display = "none"; text.innerHTML = "Show R Code";}
      else {ele.style.display = "block"; text.innerHTML = "Hide R Code";}}
function toggleEX(id1,id2) {
   var ele = document.getElementById(id1); var text = document.getElementById(id2);
   if (ele.style.display == "block") {ele.style.display = "none"; text.innerHTML = "Show Example";}
      else {ele.style.display = "block"; text.innerHTML = "Hide Example";}}
function toggleTheory(id1,id2) {
   var ele = document.getElementById(id1); var text = document.getElementById(id2);
   if (ele.style.display == "block") {ele.style.display = "none"; text.innerHTML = "Show Theory";}
      else {ele.style.display = "block"; text.innerHTML = "Hide Theory";}}
function toggleQuiz(id1,id2) {
   var ele = document.getElementById(id1); var text = document.getElementById(id2);
   if (ele.style.display == "block") {ele.style.display = "none"; text.innerHTML = "Show Quiz Solution";}
      else {ele.style.display = "block"; text.innerHTML = "Hide Quiz Solution";}}      
</script>

<!-- A few functions for revealing definitions -->
<script language="javascript">
<!--   $( function() {
    $("#tabs").tabs();
  } ); -->

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function(){
    $('[data-toggle="popover"]').popover(); 
});
</script>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-K7GRETHNZH"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-K7GRETHNZH');
</script>

