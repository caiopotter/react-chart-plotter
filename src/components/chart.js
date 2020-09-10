import React from 'react'
import { Chart } from 'react-charts'
 
function MyChart(props) {
  const data = props.data
 
  const axes = props.axes

  const cursors = React.useMemo(
      () => [
          {showLine: true}
      ], []
  )

  let lineChart = (
    <div
      style={{
        height: '300px'
      }}
    >
    </div>
  );

  if(props.data.length > 0){
    lineChart = (
      <div
        style={{
          height: '300px'
        }}
      >
        <Chart id="chart" data={data} axes={axes} primaryCursor={cursors} tooltip/>
      </div>
    )
  }

  return lineChart;
}

export default MyChart;