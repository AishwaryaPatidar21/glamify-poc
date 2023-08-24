import React from "react";
import ReactApexChart from "react-apexcharts";

const chartData = {
  series: [300, 100],

  options: {
    chart: { type: "donut" },
    legend: { show: true },
    dataLabels: { enabled: true },
    tooltip: { enabled: true },
    fill: { colors: ["#9B9B9B", "#7FD320"] },
    states: {
      hover: { filter: { type: "lighten", value: 0.5 } },
      active: { filter: { type: "none", value: 0 } }
    },
    stroke: { width: 0 },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "65%",
          labels: {
            show: true,
            name: { show: false },
            total: {
              show: true,
              showAlways: true,
              formatter: function (w) {
                const totals = w.globals.seriesTotals;

                const result = totals.reduce((a, b) => a + b, 0);

                return (result / 1000).toFixed(3);
              }
            }
          }
        }
      }
    }
  }
};

const PieChartjs=()=> {
  return (
    <div className="">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="donut"
      />
    </div>
  );
}

export default PieChartjs;
