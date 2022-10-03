- Details from this project have been redacted due to confidential information regarding internal tools and data with respect to Aramco Research & Development Center

- below is technical details I wrote about the project and instructions for future maintainers of the project

<h1 align="center">Data Visualization Web Dashboard</h1>

## Goal:

- Create a responsive and interactive web data dashboard using Typescript with ReactJS to display key powertrain metric projection data

## Usage:

You will need [Node.JS](https://nodejs.org/en/download/) to run and build this project.

From the root directory, you can run the following commands in the terminal:

- `pnpm install` one-time installation of dependancies (listed in `package.json`)
- `pnpm dev` to start a local deployment (`Ctrl + C` to stop local dev server)
- `pnpm build` to create a build of the app for deployment

## Development:

- ReactJS, Typescript, HTML, CSS

## Graphing Tools:

- [ChartJS](https://www.chartjs.org/) & [React-chartjs-2](https://react-chartjs-2.js.org/) (currently using)
- Other alternatives:
  - [Recharts](https://recharts.org/en-US/), [Victory](https://formidable.com/open-source/victory/), [Nivo](https://nivo.rocks/), [React Charts](https://react-charts.tanstack.com/)

## Libraries:

- [React Router](https://reactrouter.com/docs/en/v6/getting-started/overview): route pages in React
- [Material UI](https://mui.com/material-ui), [Mantine UI](https://mantine.dev/pages/basics/): libraries of React components
- [TailwindCSS](https://tailwindcss.com/): CSS styling library
- [danfoJS](https://github.com/javascriptdata/danfojs#readme): Pandas-like library to process raw data and create Dataframes in JS
- [EmailJS](https://www.emailjs.com/): build contact forms and send emails

## Hosting:

- [Vercel](https://vercel.com/)
- [Google Cloud](https://cloud.google.com/) has [BigQuery](https://cloud.google.com/bigquery) with ML built-in [AI, ML, and Deep Learning tools](https://cloud.google.com/products/ai)

