export const chartOptions = {
    chart: {
      type: 'pie',
      height: 250,
  
    },
    labels: ['Visitors', 'Page Views', 'Conversion Rate'],
    colors: ['#B7C9FF', '#D50D0D    ', '#3BA94A'],
    legend: {
      position: 'bottom',
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 100
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

export  const chartSeries = [4234, 5678,4345, 2.3];