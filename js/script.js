function result(){
      var range1 = document.getElementById("customRange1").value * 2;
      var range2 = document.getElementById("customRange2").value * 3;
      var range3 = document.getElementById("customRange3").value * 5;
      var range4 = document.getElementById("customRange4").value * 10;
      var range5 = document.getElementById("customRange5").value * 2;
      var range6 = document.getElementById("customRange6").value * 10;
      var range7 = document.getElementById("customRange7").value * 10;
      var consumption = range1 + range2 + range3 + range4 + range5 + range6 + range7;

      var   result = document.getElementById('result');

      if (consumption < 34) {
            result.firstChild.textContent = '30 MB'
      } else if (consumption < 56) {
            result.firstChild.textContent = '50 MB'
      } else if (consumption < 111) {
            result.firstChild.textContent = '100 MB'
      } else {
            result.firstChild.textContent = '200 MB'
      }
}