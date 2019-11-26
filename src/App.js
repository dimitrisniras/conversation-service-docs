import React from "react";
import {HashRouter, Route, Link } from "react-router-dom";
// import specs from './openapi_specs/specs.openapi_v1.json';
import specs from './openapi_specs/specs.openapi_all.json';
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { RedocStandalone } from 'redoc';
import CustomOpenApi from './CustomOpenApi';
import SequenceDiagrams from './SequenceDiagrams';
import './App.css'


function App() {
  return (
    <HashRouter basename='/' >
      <Header />
      <div class="mainbody" >
        <Route exact path="/" component={Home} />
        <Route exact path="/rowopenapi" component={RowOpenApi} />
        <Route path="/sequencediagram" component={SequenceDiagramPage} />
        <Route path="/openapiui" component={OpenApiUi} />
        <Route path="/custom" component={Custom} />
        <Route path="/redoc" component={Redoc} />
        
      </div>
    </HashRouter>
  );
}


function Custom() {
  return <CustomOpenApi spec={specs} />
  
}

function Home() {
  return <div>
    <h1>Conversation Service Internal Documetation</h1>
    <p>
      go to the : <Link to="/openapiui">specs</Link> to see the open api specs
    </p>
    <p>
      Some part of the api could be hard to visualize in the standard openapi view. check  the <Link to="/custom">Custom Webhook specs</Link> to see something easier
    </p>
  </div>
}

function RowOpenApi() {
  return <pre style={{background: "#dfdfdf", padding: "10px"}} >{JSON.stringify(specs, null, '  ')} </pre>;
}

function SequenceDiagramPage() {
  return <SequenceDiagrams />;
}

function OpenApiUi() {
  return <SwaggerUI docExpansion="list" spec={specs} />;
}

function Redoc() {
  return <RedocStandalone spec={specs} />;
}


function Header() {
  return (
    <ul class="header-nav" >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/openapiui">Open api ui</Link>
      </li>
      <li>
        <Link to="/custom">Custom Webhook specs</Link>
      </li>
      <li>
        <Link to="/sequencediagram">Web Sequence Diagram</Link>
      </li>
      <li>
        <Link to="/rowopenapi">Row Open Api</Link>
      </li>
      <li>
        <Link to="/redoc">Redoc</Link>
      </li>
      <li>
        <a href="https://github.com/jurgob/conversation-service-docs">Git hub project</a>
      </li>
    </ul>
  );
}

export default App;