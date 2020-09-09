import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Chart from './components/chart';
import Footer from './components/footer';
import JSONEditor from './components/jsonEditor';
import ChallengeNavBar from './components/navBar';

function App() {
  const initialJSON = {type: 'start', timestamp: 1519780251293, select: ['min_response_time', 'max_response_time'], group: ['os', 'browser']}
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

  function setNewJSON(event){
    setJson(event.jsObject)
    console.log('JSON state saved')
  }

  function generateChart(){
    console.log(json)
    setData([{
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
    }])
    }

  return (
    <Container fluid>
      <ChallengeNavBar></ChallengeNavBar>
      <div className="content-wrap">
        <JSONEditor json={json} onChange={setNewJSON} onClick={generateChart}></JSONEditor>
        <Chart data={data} json={json}></Chart>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </Container>
  );
}

export default App;
