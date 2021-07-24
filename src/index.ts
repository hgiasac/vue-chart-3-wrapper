import { Chart, ChartType, ChartOptions, Plugin, ChartData } from "chart.js";
import { Ref, DefineComponent, ComponentObjectPropsOptions } from "vue";
import * as vueChart from "vue-chart-3";

export type ComponentData<T extends ChartType> = {
  canvasRef: Ref<HTMLCanvasElement | undefined>;
  renderChart: () => void;
  chartInstance: Chart<T> | null;
};

export type ChartProps<TType extends ChartType> = {
  options?: ChartOptions<TType>;
  chartId?: string;
  width?: number;
  height?: number;
  cssClasses?: string;
  styles?: Record<string, any>;
  plugins?: Plugin[];
  chartData: ChartData<TType>;
  onLabelsUpdate?: () => void;
  onChartUpdate?: (chartInstance: Chart<TType>) => void;
  onChartDestroy?: () => void;
  onChartRender?: (chartInstance: Chart<TType>) => void;
};

export type BarChartData = ChartData<"bar">;
export type DoughnutChartData = ChartData<"doughnut">;
export type LineChartData = ChartData<"line">;
export type PieChartData = ChartData<"pie">;
export type PolarAreaChartData = ChartData<"polarArea">;
export type RadarChartData = ChartData<"radar">;
export type BubbleChartData = ChartData<"bubble">;
export type ScatterChartData = ChartData<"scatter">;

export const BarChart = vueChart.BarChart as DefineComponent<
  ComponentObjectPropsOptions<ChartProps<"bar">>
>;
export const DoughnutChart = vueChart.DoughnutChart as DefineComponent<
  ChartProps<"doughnut">
>;
export const LineChart = vueChart.LineChart as DefineComponent<
  ComponentObjectPropsOptions<ChartProps<"line">>
>;

export const PieChart = vueChart.PieChart as DefineComponent<
  ComponentObjectPropsOptions<ChartProps<"pie">>
>;
export const PolarAreaChart = vueChart.PolarAreaChart as DefineComponent<
  ComponentObjectPropsOptions<ChartProps<"polarArea">>
>;
export const RadarChart = vueChart.RadarChart as DefineComponent<
  ComponentObjectPropsOptions<ChartProps<"radar">>
>;
export const BubbleChart = vueChart.BubbleChart as DefineComponent<
  ComponentObjectPropsOptions<ChartProps<"bubble">>
>;
export const ScatterChart = vueChart.ScatterChart as DefineComponent<
  ComponentObjectPropsOptions<ChartProps<"scatter">>
>;
