// @ts-nocheck

// --- option objects for each chart to control the looks of each chart ---
export const salesOptions = {
  responsive: true,
  hitRadius: 20,
  hoverRadius: 6,
  elements: {
    line: {
      tension: 0.3, // creates curved lines
    },
  },
  interaction: {
    intersect: false,
    mode: "index",
  },
  scales: {
    yAxes: {
      grid: {
        color: "rgba(255,255,255, 0.3)",
      },
      beginAtZero: true,
      min: 0,
      title: {
        display: true,
        text: "Sales (millions)",
        color: "white",
        font: {
          size: 12,
        },
      },
      ticks: {
        color: "white",
        font: {
          size: 12,
          color: "rgba(255,255,255, 0.6)",
        },

        callback: function (val: any) {
          return `${this.getLabelForValue(val)}`;
        },
      },
    },
    xAxes: {
      grid: {
        color: "rgba(255,255,255, 0.3)",
      },
      title: {
        display: true,
        text: "Years",
        color: "white",
        font: {
          size: 12,
        },
      },
      ticks: {
        color: "white",
        font: {
          size: 12,
          color: "rgba(255,255,255, 0.6)",
        },
        callback: function (val: any, index: number) {
          // even years
          return index % 2 != 0 ? this.getLabelForValue(val) : "";
        },
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      labels: {
        usePointStyle: true,
        pointStyle: "rectRounded",
        color: "white",
        font: {
          size: 12,
        },
      },
    },
    title: {
      display: true,
      text: "",
      color: "white",
      font: {
        weight: "bold",
        size: 14,
      },
    },
    tooltip: {
      position: "nearest",
      callbacks: {
        label: (tooltipItem: {
          dataset: { label: string };
          parsed: { y: number | null };
        }) => {
          let label = tooltipItem.dataset.label || "";

          if (label) {
            label += ": ";
          }
          if (tooltipItem.parsed.y !== null) {
            label += `${(Math.round(tooltipItem.parsed.y * 100) / 100).toFixed(
              2
            )} M`;
          }
          return label;
        },
      },
    },
  },
};

export const marketShareOptions = {
  responsive: true,
  hitRadius: 20,
  hoverRadius: 6,
  elements: {
    line: {
      tension: 0.3, // creates curved lines
      fill: true,
    },
  },
  interaction: {
    intersect: false,
    mode: "index",
  },
  scales: {
    yAxes: {
      stacked: true,
      grid: {
        color: "rgba(255,255,255, 0.3)",
      },
      beginAtZero: true,
      min: 0,
      max: 100,
      title: {
        display: true,
        text: "Market Shares (%) ",
        color: "white",
        font: {
          size: 12,
        },
      },
      ticks: {
        color: "white",
        font: {
          size: 12,
          color: "rgba(255,255,255, 0.6)",
        },
        callback: function (val: any) {
          return `${this.getLabelForValue(val)}%`;
        },
      },
    },
    xAxes: {
      grid: {
        color: "rgba(255,255,255, 0.3)",
      },
      title: {
        display: true,
        text: "Years",
        color: "white",
        font: {
          size: 12,
        },
      },
      ticks: {
        color: "white",
        font: {
          size: 12,
          color: "rgba(255,255,255, 0.6)",
        },
        callback: function (val: any, index: number) {
          // even years
          return index % 2 != 0 ? this.getLabelForValue(val) : "";
        },
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      labels: {
        usePointStyle: true,
        pointStyle: "rectRounded",
        color: "white",
        font: {
          size: 12,
        },
      },
    },
    title: {
      display: true,
      text: "",
      color: "white",
      font: {
        weight: "bold",
        size: 14,
      },
    },
    tooltip: {
      position: "nearest",
      callbacks: {
        label: (tooltipItem: {
          dataset: { label: string };
          parsed: { y: number | null };
        }) => {
          let label = tooltipItem.dataset.label || "";

          if (label) {
            label += ": ";
          }
          if (tooltipItem.parsed.y !== null) {
            label += `${(Math.round(tooltipItem.parsed.y * 100) / 100).toFixed(
              2
            )}%`;
          }
          return label;
        },
      },
    },
  },
};

export const stocksOptions = {
  responsive: true,
  hitRadius: 20,
  hoverRadius: 6,
  interaction: {
    intersect: false,
    mode: "index",
  },
  scales: {
    yAxes: {
      grid: {
        color: "rgba(255,255,255, 0.3)",
      },
      beginAtZero: true,
      min: 0,
      title: {
        display: true,
        text: "Stocks (millions)",
        color: "white",
        font: {
          size: 12,
        },
      },
      ticks: {
        color: "white",
        font: {
          size: 12,
          color: "rgba(255,255,255, 0.6)",
        },
        callback: function (val: any) {
          return `${this.getLabelForValue(val)}M`;
        },
      },
    },
    xAxes: {
      grid: {
        color: "rgba(255,255,255, 0.3)",
      },
      title: {
        display: true,
        text: "Years",
        color: "white",
        font: {
          size: 12,
        },
      },
      ticks: {
        color: "white",
        font: {
          size: 12,
          color: "rgba(255,255,255, 0.6)",
        },
        callback: function (val: any, index: number) {
          // even years
          return index % 2 != 0 ? this.getLabelForValue(val) : "";
        },
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      labels: {
        usePointStyle: true,
        pointStyle: "rectRounded",
        color: "white",
        font: {
          size: 12,
        },
      },
    },
    title: {
      display: true,
      text: "",
      color: "white",
      font: {
        weight: "bold",
        size: 14,
      },
    },
    tooltip: {
      position: "nearest",
      callbacks: {
        label: (tooltipItem: {
          dataset: { label: string };
          parsed: { y: number | null };
        }) => {
          let label = tooltipItem.dataset.label || "";

          if (label) {
            label += ": ";
          }
          if (tooltipItem.parsed.y !== null) {
            label += `${(Math.round(tooltipItem.parsed.y * 100) / 100).toFixed(
              2
            )} M`;
          }
          return label;
        },
      },
    },
  },
};

export const energyDemandOptions = {
  responsive: true,
  hitRadius: 20,
  hoverRadius: 6,
  elements: {
    line: {
      tension: 0.3, // creates curved lines
    },
  },
  interaction: {
    intersect: false,
    mode: "index",
  },
  scales: {
    yAxes: {
      grid: {
        color: "rgba(255,255,255, 0.3)",
      },
      beginAtZero: true,
      min: 0,
      title: {
        display: true,
        text: "Energy Demand (MTOE)",
        color: "white",
        font: {
          size: 12,
        },
      },
      ticks: {
        color: "white",
        font: {
          size: 12,
          color: "rgba(255,255,255, 0.6)",
        },
        callback: function (val: any) {
          return `${this.getLabelForValue(val)}`;
        },
      },
    },
    xAxes: {
      grid: {
        color: "rgba(255,255,255, 0.3)",
      },
      title: {
        display: true,
        text: "Years",
        color: "white",
        font: {
          size: 12,
        },
      },
      ticks: {
        color: "white",
        font: {
          size: 12,
          color: "rgba(255,255,255, 0.6)",
        },
        callback: function (val: any, index: number) {
          // even years
          return index % 2 != 0 ? this.getLabelForValue(val) : "";
        },
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      labels: {
        usePointStyle: true,
        pointStyle: "rectRounded",
        color: "white",
        font: {
          size: 12,
        },
      },
    },
    title: {
      display: true,
      text: "",
      color: "white",
      font: {
        weight: "bold",
        size: 14,
      },
    },
    tooltip: {
      position: "nearest",
      callbacks: {
        label: (tooltipItem: {
          dataset: { label: string };
          parsed: { y: number | null };
        }) => {
          let label = tooltipItem.dataset.label || "";

          if (label) {
            label += ": ";
          }
          if (tooltipItem.parsed.y !== null) {
            label += `${(Math.round(tooltipItem.parsed.y * 100) / 100).toFixed(
              2
            )} MTOE`;
          }
          return label;
        },
      },
    },
  },
};

export const GHGOptions = {
  responsive: true,
  hitRadius: 20,
  hoverRadius: 6,
  elements: {
    line: {
      tension: 0.3, // creates curved lines
    },
  },
  interaction: {
    intersect: false,
    mode: "index",
  },
  scales: {
    yAxes: {
      stacked: true,
      grid: {
        color: "rgba(255,255,255, 0.3)",
      },
      beginAtZero: true,
      min: 0,
      title: {
        display: true,
        text: "GHG Emissions (million tons)",
        color: "white",
        font: {
          size: 12,
        },
      },
      ticks: {
        color: "white",
        font: {
          size: 12,
          color: "rgba(255,255,255, 0.6)",
        },
        callback: function (val: any) {
          return this.getLabelForValue(val);
        },
      },
    },
    xAxes: {
      grid: {
        color: "rgba(255,255,255, 0.3)",
      },
      title: {
        display: true,
        text: "Years",
        color: "white",
        font: {
          size: 12,
        },
      },
      ticks: {
        color: "white",
        font: {
          size: 12,
          color: "rgba(255,255,255, 0.6)",
        },
        callback: function (val: any, index: number) {
          // even years
          return index % 2 != 0 ? this.getLabelForValue(val) : "";
        },
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      labels: {
        usePointStyle: true,
        pointStyle: "rectRounded",
        color: "white",
        font: {
          size: 12,
        },
      },
    },
    title: {
      display: true,
      text: "",
      color: "white",
      font: {
        weight: "bold",
        size: 14,
      },
    },
    tooltip: {
      position: "nearest",
      callbacks: {
        label: (tooltipItem: {
          dataset: { label: string };
          parsed: { y: number | null };
        }) => {
          let label = tooltipItem.dataset.label || "";

          if (label) {
            label += ": ";
          }
          if (tooltipItem.parsed.y !== null) {
            label += `${(Math.round(tooltipItem.parsed.y * 100) / 100).toFixed(
              2
            )} M tons`;
          }
          return label;
        },
      },
    },
  },
};

export const internalSubOptions = {
  responsive: true,
  maintainAspectRatio: false,
  aspectRatio: 1,
  hitRadius: 5,
  hoverRadius: 6,
  elements: {
    line: {
      tension: 0.3, // creates curved lines
    },
  },
  interaction: {
    intersect: false,
    mode: "index",
  },
  scales: {
    r: {
      angleLines: {
        display: false,
        color: "rgba(255,255,255, 0.3)",
      },
      grid: {
        display: true,
        color: "rgba(255,255,255, 0.3)",
      },
      pointLabels: {
        color: "white",
        font: {
          size: 12,
        },
        callback: function (val: any, index: number) {
          // even years
          return index % 2 != 0 ? val : "";
        },
      },
      ticks: {
        color: "black",
        font: {
          size: 12,
        },
        callback: function (val: any) {
          return `$${this.getLabelForValue(val)}K`;
        },
      },
    },
  },
  plugins: {
    filler: {
      propagate: true,
    },
    legend: {
      display: true,
      labels: {
        usePointStyle: true,
        pointStyle: "rectRounded",
        color: "white",
        font: {
          size: 12,
        },
      },
    },
    title: {
      display: true,
      text: "",
      color: "white",
      font: {
        weight: "bold",
        size: 14,
      },
    },
    tooltip: {
      position: "nearest",
      callbacks: {
        label: (tooltipItem: {
          dataset: { label: string };
          parsed: { r: number | null };
        }) => {
          let label = tooltipItem.dataset.label || "";

          if (label) {
            label += ": ";
          }
          if (tooltipItem.parsed.r !== null) {
            label += `$${(Math.round(tooltipItem.parsed.r * 100) / 100).toFixed(
              2
            )}K`;
          }
          return label;
        },
      },
    },
  },
};

// list of colors for each filter variable
enum colors {
  // Markets variable colors
  Personal = "rgba(255, 99, 132, 0.6)",
  Fleet = "rgba(255, 159, 64, 0.6)",

  // Vehicle types variable colors
  Sedan = "rgba(255, 205, 86, 0.6)",
  SUV = "rgba(75, 192, 192, 0.6)",

  // Powertrain variable colors
  HEV = "rgba(54, 162, 235, 0.6)",
  BEV = "rgba(153, 102, 255, 0.6)",
  PHEV = "rgba(201, 203, 207, 0.6)",
  FCEV = "rgba(244, 153, 108, 0.6)",
  ICEV = "rgba(244, 47, 108, 0.6)",
  H2ICEV = "rgba(3, 149, 34, 0.6)",
}

// gets specific colors for each filter variable
export function getColor(val: string) {
  // Markets
  if (val === "Personal") return colors.Personal;
  if (val === "Fleet") return colors.Fleet;

  // Vehicle types
  if (val === "Sedan") return colors.Sedan;
  if (val === "SUV") return colors.SUV;

  // Powertrains
  if (val === "HEV") return colors.HEV;
  if (val === "BEV") return colors.BEV;
  if (val === "FCEV") return colors.FCEV;
  if (val === "PHEV") return colors.PHEV;
  if (val === "ICEV") return colors.ICEV;
  if (val === "H2ICEV") return colors.H2ICEV;
}

// gets specific order for each filter variable in Radar chart
export function getRadarOrder(val: string) {
  // Markets
  if (val === "Personal") return 1;
  if (val === "Fleet") return 2;

  // Vehicle types
  if (val === "Sedan") return 1;
  if (val === "SUV") return 2;

  // Powertrains
  if (val === "ICEV") return 1;
  if (val === "HEV") return 2;
  if (val === "PHEV") return 3;
  if (val === "FCEV") return 4;
  if (val === "H2ICEV") return 5;
  if (val === "BEV") return 6;
}

// gets specific order for each filter variable for all other charts
export function getOrder(val: string) {
  // Markets
  if (val === "Personal") return 1;
  if (val === "Fleet") return 2;

  // Vehicle types
  if (val === "Sedan") return 1;
  if (val === "SUV") return 2;

  // Powertrains
  if (val === "ICEV") return 1;
  if (val === "HEV") return 2;
  if (val === "PHEV") return 3;
  if (val === "BEV") return 4;
  if (val === "FCEV") return 5;
  if (val === "H2ICEV") return 6;
}

export const internalSubLineOptions = {
  responsive: true,
  hitRadius: 20,
  hoverRadius: 6,
  elements: {
    line: {
      tension: 0.3, // creates curved lines
    },
  },
  interaction: {
    intersect: false,
    mode: "index",
  },
  scales: {
    yAxes: {
      grid: {
        color: "rgba(255,255,255, 0.3)",
      },
      beginAtZero: true,
      min: 0,
      title: {
        display: true,
        text: "Internal Subsidies ($)",
        color: "white",
        font: {
          size: 12,
        },
      },
      ticks: {
        color: "white",
        font: {
          size: 12,
          color: "rgba(255,255,255, 0.6)",
        },
        callback: function (val: any) {
          return `${this.getLabelForValue(val)}K`;
        },
      },
    },
    xAxes: {
      grid: {
        color: "rgba(255,255,255, 0.3)",
      },
      title: {
        display: true,
        text: "Years",
        color: "white",
        font: {
          size: 12,
        },
      },
      ticks: {
        color: "white",
        font: {
          size: 12,
          color: "rgba(255,255,255, 0.6)",
        },
        callback: function (val: any, index: number) {
          // even years
          return index % 2 != 0 ? this.getLabelForValue(val) : "";
        },
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      labels: {
        usePointStyle: true,
        pointStyle: "rectRounded",
        color: "white",
        font: {
          size: 12,
        },
      },
    },
    title: {
      display: true,
      text: "",
      color: "white",
      font: {
        weight: "bold",
        size: 14,
      },
    },
    tooltip: {
      position: "nearest",
      callbacks: {
        label: (tooltipItem: { dataset: { label: string; }; parsed: { y: number | null; }; }) => {
          let label = tooltipItem.dataset.label || "";

          if (label) {
            label += ": ";
          }
          if (tooltipItem.parsed.y !== null) {
            label += `${(Math.round(tooltipItem.parsed.y * 100) / 100).toFixed(
              2
            )}K`;
          }
          return label;
        },
      },
    },
  },
};