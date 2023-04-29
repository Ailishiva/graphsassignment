const input = document.getElementById('input');
const container = document.querySelector('.container');
const inputfield=
      document.getElementById('inputfield')

input.addEventListener('keyup', function() {
	// Get the input value and split it into an array
	const values = input.value.split(',');

	// Clear the container
	container.innerHTML = '';

	// Create a bar for each value
	for (let i = 0; i < values.length; i++) {
		const value = parseInt(values[i]);
    if(value > 100){
      alert('pls enter valid number')
    }else{
     //inputval.innerText = value;
		// Create a div element for the bar and set its height
		const bar = document.createElement('div');
		bar.classList.add('bar');
		bar.style.height = value * 2 + 'px';
   
		container.appendChild(bar);
	}
  }
});





function generateChart() {
    // Get the input value
    const dataInput = document.getElementById("data").value;
    if(dataInput > 100){
        alert('Pls enter Valid number')
    }else{
    // Parse the input value as a number
    const dataValue = parseFloat(dataInput);
    
    // Get the canvas element and its context
    const canvas = document.getElementById("pie-chart");
    const ctx = canvas.getContext("2d");
  
    // Calculate the angles for the single data value
    const angles = [(dataValue / 100) * 2 * Math.PI];
  
    // Set the color for the data value
    const color = "#008CFF";
  
    // Draw the pie chart
    let startAngle = 0;
    for (let i = 0; i < angles.length; i++) {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, canvas.height / 2);
      ctx.arc(
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2,
        startAngle,
        startAngle + angles[i]
      );
      ctx.lineTo(canvas.width / 2, canvas.height / 2);
      ctx.fill();
      startAngle += angles[i];
    }
   }
  }
  
  
  const graphContainer = document.getElementById('graph-container');
const inputv = document.getElementById('input-value');

function generateGraph() {
  const value = inputv.value;
  if(value > 100){
    alert('pls Enter Valid Number')
  }
  else{
  const colors = [
    `rgba(0, 140, 255, ${value / 100})`,
    `rgba(194, 227, 255, ${value / 100})`,
  ];
  const gradient = `linear-gradient(to top, ${colors.join(', ')})`;

  graphContainer.style.background = gradient;
  graphContainer.innerHTML = '';

  for (let i = 0; i < 10; i++) {
    const bar = document.createElement('div');
    bar.className = 'graph-bar';
    bar.style.height = `${value / 10 * (i + 1)}%`;
    graphContainer.appendChild(bar);
  }
}
}

// Call the generateGraph function initially to generate the initial graph
generateGraph();
