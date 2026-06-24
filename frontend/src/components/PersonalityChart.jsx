import {
  Radar
} from "react-chartjs-2";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function PersonalityChart() {

  const data = {
    labels: [
      "Confidence",
      "Creativity",
      "Empathy",
      "Analytical",
      "Leadership"
    ],

    datasets: [
      {
        label: "Personality",

        data: [
          80,
          70,
          90,
          75,
          65
        ]
      }
    ]
  };

  return (
    <div className="chart-container">
      <Radar data={data} />
    </div>
  );
}