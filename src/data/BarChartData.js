export  const options = {
    chart: {
      type: 'bar',
      height: 500,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '75%',        
        endingShape: 'rounded'
      },
    },
    colors: ['#0A2472', '#5A75C5'], 
    dataLabels: {
    enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['#5A75C5']
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    },
    yaxis: {
      title: {
        text: 'Sales'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        }
      }
    }
  };

  export  const series = [
    {
      name: 'Sales',
      data: [44, 55, 57, 56, 61]
    }
  ];