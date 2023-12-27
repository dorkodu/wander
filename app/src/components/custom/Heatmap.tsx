import ReactHeatMap from "@uiw/react-heat-map";

interface Props {
  date: number;
  values: { [offset: number]: number };
}

function Heatmap({ date, values }: Props) {
  return (
    <ReactHeatMap
      value={Object.entries(values).map(([key, value]) => {
        const _date = new Date(date);
        _date.setDate(_date.getDate() + Number(key));
        return { date: heatmapDate(_date), count: value };
      })}
      startDate={heatmapStartDate(date)}
      width={heatmapWidth(date)}
      weekLabels={["", "Mon", "", "Wed", "", "Fri", ""]}
      style={{ color: "var(--text-color)" }}
      panelColors={{
        0: "#E6FCF5",
        2: "#96F2D7",
        5: "#38D9A9",
        10: "#12B886",
        11: "#087F5B",
      }}
      rectProps={{ rx: 5 }}
    />
  );
}

export default Heatmap;

function heatmapDate(date: Date) {
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
}

function heatmapStartDate(date: number) {
  const _date = new Date(date);
  const startDate = new Date(_date.getFullYear(), 0, 1);

  // If start date is sunday, show previous week too
  if (startDate.getDay() === 0) startDate.setDate(startDate.getDate() - 7);

  return startDate;
}

function heatmapWidth(date: number): number {
  const prefix = 28;
  const colWidth = 13;
  let cols = 53;

  const _date = new Date(date);
  const startDate = new Date(_date.getFullYear(), 0, 1);

  // If start date is sunday, previous week is shown, so increment the columns
  if (startDate.getDay() === 0) cols++;

  return prefix + colWidth * cols;
}
