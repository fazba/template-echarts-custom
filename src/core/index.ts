import { EChartsType, init } from "echarts";

export interface ChartData{
  x:string;
  y:number;
}

export class Chart{
  private _chart: EChartsType;
  constructor(div:HTMLDivElement){
    this._chart=init(div)
  }
  setDatas(datas:ChartData[]){
    this._chart.setOption( {
      xAxis: {
        type: 'category',
        data: datas.map(e=>e.x)
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: datas.map(e=>e.y),
          type: 'line'
        }
      ]
    })
  }
}