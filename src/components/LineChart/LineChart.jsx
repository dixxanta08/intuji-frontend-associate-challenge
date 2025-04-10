import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineChart = () => {
  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Label1",
        data: [5000, 15000, 10000, 20000, 17000, 10000, 8000],
        borderColor: "#4745A4",
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null;
          }

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "rgba(71, 69, 164, 0.3)");
          gradient.addColorStop(1, "rgba(71, 69, 164, 0)");

          return gradient;
        },
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: "Label2",
        data: [2000, 8000, 5000, 1000, 6000, 9000, 4000],
        borderColor: "#F9BA33",
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null;
          }

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "rgba(249, 186, 51, 0.3)");
          gradient.addColorStop(1, "rgba(249, 186, 51, 0)");

          return gradient;
        },
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          padding: 10,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          beginAtZero: true,
          stepSize: 5000,
          callback: (value) => `${value / 1000}k`,
          padding: 10,
        },
      },
    },
    backgroundColor: "#ffffff",
  };

  return (
    <div className="bg-white p-6 rounded-lg  h-[402px] flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row items-start justify-start sm:items-center sm:justify-between mb-4">
        <h2 className="text-lg font-semibold">Analytics</h2>
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#4745A4]"></div>
            <p className="text-sm text-primary">Label1</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#F9BA33]"></div>
            <p className="text-sm text-primary">Label2</p>
          </div>
          <select className="border border-secondary rounded-md p-2 text-sm text-primary-light">
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>
      <div className="flex-grow ">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
