import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const data = {
  labels: ["تم حلها", "ساريه", "مرفوضه", "مغلقه", "متأخره", "محوله"],
  datasets: [
    {
      label: "عدد البلاغات",
      data: [10, 40, 20, 5, 40, 30],
      backgroundColor: [
        "rgb(154, 208, 117)",
        "rgb(200, 190, 106)",
        "rgb(200, 106, 115)",
        "rgb(224, 229, 229)",
        "rgb(247, 223, 239)",
        "rgb(223, 246, 247)",
      ],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      beginAtZero: true,
      title: {
        display: true,
        labelString: "المحاور الأفقية",
      },
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        labelString: "المحاور الرأسية",
      },
    },
  },
};

const ReportsBarChart = () => {
  return <Bar options={options} data={data} />;
};
export default ReportsBarChart;
