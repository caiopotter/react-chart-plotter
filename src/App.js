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
  const initialJSON = `{"type": "start", "timestamp": 1519780251293, "select": ["min_response_time", "max_response_time"], "group": ["os", "browser"]}
  {"type": "data", "timestamp": 1519780251000, "os": "linux", "browser": "chrome", "min_response_time": 0.1, "max_response_time": 1.3}
  {"type": "data", "timestamp": 1519780252000, "os": "linux", "browser": "chrome", "min_response_time": 0.3, "max_response_time": 1.5}
  {"type": "data", "timestamp": 1519780251000, "os": "linux", "browser": "firefox", "min_response_time": 0.1, "max_response_time": 1.1}
  {"type": "data", "timestamp": 1519780252000, "os": "linux", "browser": "firefox", "min_response_time": 0.2, "max_response_time": 1.7}
  {"type": "data", "timestamp": 1519780251000, "os": "mac", "browser": "firefox", "min_response_time": 0.4, "max_response_time": 1.3}
  {"type": "data", "timestamp": 1519780252000, "os": "mac", "browser": "firefox", "min_response_time": 0.5, "max_response_time": 1.9}
  {"type": "data", "timestamp": 1519780251000, "os": "mac", "browser": "chrome", "min_response_time": 0.6, "max_response_time": 1.8}
  {"type": "data", "timestamp": 1519780252000, "os": "mac", "browser": "chrome", "min_response_time": 0.9, "max_response_time": 2.1}`
  const initialData = React.useMemo(
    () => [
      
     ],
    []
  )
  const [json, setJson] = useState(initialJSON);
  const [data, setData] = useState(initialData);

  function setNewJSON(event){
    console.log(event.target.value)
    setJson(event.target.value)
    console.log('JSON state saved')
  }

  function readJSON(){
    let jsonLines = json.split('\n');
    let stopPlot = false;
    let groups = [];
    let selects = [];
    let chartCoords = [];
    let jsonLine;
    for(let line of jsonLines){
      try{
        jsonLine = JSON.parse(line);
      }catch(e){
        continue;
      }
      switch (jsonLine.type){
        case chartTypeEnum.DATA:
          if(!stopPlot){
            sortChartGroups(jsonLine, groups, selects, chartCoords)
          }
          break;
        case chartTypeEnum.SPAN:
          if(!stopPlot){}
          break;
        case chartTypeEnum.START:
          stopPlot = false;
          chartCoords = [];
          groups = jsonLine.group;
          selects = jsonLine.select;
          break;
        case chartTypeEnum.STOP:
          stopPlot = true;
          break;
        default:
          console.log('type not found!')
      }
    }
    plotChart(chartCoords, groups);
  }

  function sortChartGroups(jsonLine, groups, selects, chartCoords){
    let createNewEntry = true;
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
        createNewEntry = true;
        if(coord.hasOwnProperty([groups[0]]) && coord[groups[0]] === jsonLine[groups[0]]){
          if(coord.hasOwnProperty([groups[1]]) && coord[groups[1]] === jsonLine[groups[1]]){
            coord['timestamps'].push(jsonLine.timestamp);
            coord[selects[0]].push(jsonLine[selects[0]]);
            coord[selects[1]].push(jsonLine[selects[1]]);
            createNewEntry = false
            break;
          }
        }
      }
      if(createNewEntry){
        chartCoords.push({
          [groups[0]]: jsonLine[groups[0]],
          [groups[1]]: jsonLine[groups[1]],
          'timestamps': [jsonLine['timestamp']],
          [selects[0]]: [jsonLine[selects[0]]],
          [selects[1]]: [jsonLine[selects[1]]]
        })
      }
    }


  }

  function plotChart(chartCoords, groups){
    let chartData = [];
    for(let coord of chartCoords){
      chartData.push(
        {label: `os ${coord.os} in browser ${coord.browser} min_response_time`,
      data: [
        [coord.timestamps[0], coord.min_response_time[0]], [coord.timestamps[1], coord.min_response_time[1]]
      ]},
      {label: `os ${coord.os} in browser ${coord.browser} max_response_time`,
      data: [
        [coord.timestamps[0], coord.max_response_time[0]], [coord.timestamps[1], coord.max_response_time[1]]
      ]}
      )
    }
    setData(chartData);
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
