google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['Work', 8],
  ['Coding', 6.5],
  ['Youtube', 2],
  ['Eat', 1.5],
  ['Sleep', 6]
]);

  var options = {'title':'My Daily Routine', 'width':550, 'height':400};

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}