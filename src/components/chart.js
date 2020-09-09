import React from 'react'
import { Chart } from 'react-charts'
 
function MyChart(props) {
  const data = props.data
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'time', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )

  const cursors = React.useMemo(
      () => [
          {showLine: true}
      ], []
  )

  const lineChart = (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        height: '300px'
      }}
    >
      <Chart data={data} axes={axes} primaryCursor={cursors} tooltip/>
    </div>
  )


  return lineChart;
}

export default MyChart;