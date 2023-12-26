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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "العمليات العقاريه",
    "التنظيم والتسجيل العيني",
    "الاستراتيجيه وتطوير الاعمال",
    "الخدمات المشتركه",
    "التفتيش والامتثال",
    "المعهد العقاري",
    "العقار الرقمي",
    "المشتريات والعقود",
  ],
  datasets: [
    {
      label: "#",
      data: [30, 20, 40, 50, 10, 50, 40, 60],
      backgroundColor: [
        "#36a2eb",
        "gray",
        "#36a2eb",
        "#36a2eb",
        "gray",
        "#36a2eb",
        "#36a2eb",
        "gray"
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

const AdminstrationsBarChart = () => {
  return <Bar options={options} data={data} />;
};
export default AdminstrationsBarChart;
