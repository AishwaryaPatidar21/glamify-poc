import React from "react";
import ReactApexChart from "react-apexcharts";

const chartData = {
    series: [{
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
      name: 'Free Cash Flow',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
    
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
        
      }
      
    },
    title: {
      text: 'Grouped Labels on the X-axis',
  }

  

};

const ColumnChartjs=()=> {
  return (
    <div className="">
     {/* <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} /> */}
     <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
      />
    </div>
  );
}

export default ColumnChartjs;
