import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Chart from './components/chart';
//import Footer from './components/footer';
import JSONEditor from './components/jsonEditor';
import ChallengeNavBar from './components/navBar';

function App() {
  const chartTypeEnum = {
    START: 'start',
    STOP: 'stop',
    SPAN: 'span',
    DATA: 'data'
  }
  const initialJSON = '{"type": "start", "timestamp": 1519780251293, "select": ["min_response_time", "max_response_time"], "group": ["os", "browser"]}'
  const initialData = React.useMemo(
    () => [
      
      {
          label: 't1',
          data:[
              [1519862400000, 3], [1519862460000, 2], [1519862500000, 4], [1519862560000, 3]
            ]
      },
      {
        label: 't2',
        data:[
            [1519862400000, 4], [1519862460000, 2], [1519862500000, 4], [1519862560000, 3]
          ]
      }
    ],
    []
  )
  const [json, setJson] = useState(initialJSON);
  const [data, setData] = useState(initialData);
  const [group, setGroup] = useState('');
  const [select, setSelect] = useState('');
  const [plotInterval, setPlotInterval] = useState('');

  function setNewJSON(event){
    console.log(event.target.value)
    setJson(event.target.value)
    console.log('JSON state saved')
  }

  function readJSON(){
    let jsonLines = json.split('\n');
    let groups = [];
    let selects = [];
    let chartCoords = [];
    for(let line of jsonLines){
      let jsonLine = JSON.parse(line);
      switch (jsonLine.type){
        case chartTypeEnum.DATA:
          sortChartGroups(jsonLine, groups, selects, chartCoords)
          break;
        case chartTypeEnum.SPAN:
          break;
        case chartTypeEnum.START:
          setSelect(jsonLine.select);
          setGroup(jsonLine.group);
          groups = jsonLine.group;
          selects = jsonLine.select;
          break;
        case chartTypeEnum.STOP:
          setData([])
          break;
        default:
          console.log('type not found!')
      }
    }
  }

  function sortChartGroups(jsonLine, groups, selects, chartCoords){
    if(chartCoords.length === 0){
      chartCoords.push({
        [groups[0]]: jsonLine[groups[0]],
        [groups[1]]: jsonLine[groups[1]],
        'timestamps': [jsonLine['timestamp']],
        [selects[0]]: [jsonLine[selects[0]]],
        [selects[1]]: [jsonLine[selects[1]]]
      })
    }else{
      for(let coord of chartCoords){
        if(coord.hasOwnProperty([groups[0]])){
          if(coord.hasOwnProperty([groups[1]])){
            coord['timestamps'].push(jsonLine.timestamp);
            coord[selects[0]].push(jsonLine[selects[0]]);
            coord[selects[1]].push(jsonLine[selects[1]]);
          }
        }
      }
    }
    plotChart(chartCoords, groups);
  }

  function plotChart(chartCoords, groups){
    setData([{
      label: groups[0],
      data:[
          [chartCoords[0].timestamps[0], chartCoords[0].min_response_time[0]], [chartCoords[0].timestamps[1], chartCoords[0].min_response_time[1]]
        ]
    },
    ])
  }

  return (
    <Container fluid>
      <ChallengeNavBar></ChallengeNavBar>
      <div className="content-wrap">
        <JSONEditor json={json} onChange={setNewJSON} onClick={readJSON}></JSONEditor>
        <Chart data={data} json={json}></Chart>
      </div>
      <div>
        {/* <Footer></Footer> */}
      </div>
    </Container>
  );
}

export default App;
