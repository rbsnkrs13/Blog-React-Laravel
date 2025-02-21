import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';
import './TooltipGraph.css';

function TooltipGraph() {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      tooltip: {
        enabled: true,
        x: {
          show: true,
        },
        y: {
          show: true,
        },
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -26,
        },
      },
      series: [
        {
          name: "Publicaciones",
          data: [1500, 1418, 1456, 1526, 1356, 1256],
          color: "#846a6a",
        },
        {
          name: "Visitas de los usuarios",
          data: [643, 413, 765, 412, 1423, 2600],
          color: "#eef0f2",
        },
      ],
      chart: {
        height: "100%",
        maxWidth: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      legend: {
        show: true,
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: "#1C64F2",
          gradientToColors: ["#846a6a"],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
      },
      xaxis: {
        categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
        labels: {
          formatter: function (value) {
            return '$' + value;
          },
        },
      },
    };

    // Initialize chart when the component is mounted
    if (chartRef.current && typeof ApexCharts !== 'undefined') {
      const chart = new ApexCharts(chartRef.current, options);
      chart.render();

      // Cleanup chart when the component is unmounted
      return () => {
        chart.destroy();
      };
    }
  }, []);

  // Dropdown toggle
  const toggleDropdown = () => {
    const dropdown = document.getElementById("lastDaysdropdown");
    dropdown.classList.toggle("hidden");
  };

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow-sm dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between mb-5">
        <div>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">Lecturas mensules autor</p>
        </div>
      </div>
      <div ref={chartRef} className='bg-color-tooltip-graph'></div>

    </div>
  );
}

export default TooltipGraph;
