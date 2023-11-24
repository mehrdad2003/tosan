import React from 'react';
import './App.css';

import {Container,Row,Col} from 'react-bootstrap'
import { useState } from 'react';
import Job from './Job'

import SearchForm from './SearchForm';
import data from './jobs'
function App() {
const [params, setParams] = useState({})
const [page, setPage] = useState(1)
const[tool,setTool]=useState([])
 
  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
  
    setPage(1)
 if(value.trim()){
  const model=data.filter((item)=>{
      
    return item.code.startsWith(value)
 })
 setTool(model)
 
//  console.log(tool);
 }
 
  //  setTool(model)
  //  setParams(model)
  }

  return (
    <Container className="my-4">
    <h1 className="mb-4">ابزار توسن</h1>
    <SearchForm params={params} onParamChange={handleParamChange}/>
    {/* <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/> */}
 
    <Row>
    {tool.map(job=>{
      return  <Col key= {job.id} sm={12} md={6} lg={4}>
      <Job  job={job}></Job>
      </Col>
    })}
</Row>
</Container>
  );

}

export default App;
