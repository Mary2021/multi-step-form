import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Steps from './components/Steps';
import PersonalInfo from './features/personalInfo/PersonalInfo';
import Plan from './features/plan/Plan';
import AddOns from './features/addOns/AddOns';
import FinishingUp from './components/FinishingUp';
import Summary from './components/Summary';
import './style/App.css';
import { Card, Container, Row, Col } from 'reactstrap';

function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}

export default function App() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 1000)

    window.addEventListener('resize', debouncedHandleResize)

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize)

    }
  })

  console.log(window.innerWidth)
  console.log(dimensions.width)
  console.log(dimensions.height)

  return (
    <Router basename="/multi-step-form">
      <Routes>
        <Route path="/" element={<Info />}>
        </Route>
        <Route path="/plan" element={<SelectPlan />}>
        </Route>
        <Route path="/addOns" element={<PickAddOns />}>
        </Route>
        <Route path="/finishingUp" element={<FinishUp />}>
        </Route>
        <Route path="/summary" element={<Sum />}>
        </Route>
      </Routes>
    </Router>
  )
}

function Info() {
  //mobile in portrait orientation
  if (window.innerWidth <= 576) {
    return (
      <main>
        <div className="App">
          <Steps className='z-index-2' />
          <Card className='z-index-1'>
            <PersonalInfo />
          </Card>
        </div>
      </main>
    )
  } 
  //tablet in portrait orientation
  if ((window.innerWidth > 576 && window.innerWidth < 770) && screen.orientation.type == 'portrait-primary') {
    return (
      <main>
        <div className="App">
          <Steps className='z-index-2' />
          <Card className='z-index-1'>
            <PersonalInfo />
          </Card>
        </div>
      </main>
    )
  } 
  //mobile & tablet & desktop in landscape orientation
  else {
    return (
      <div className="App">
        <main>
          <Container className='p-0'>
            <Row>
              <Card inverse className='formContainer'>
                <Col sm='4'>
                  <Steps />
                </Col>
                <Col sm='8'>
                  <PersonalInfo />
                </Col>
              </Card>
            </Row>
          </Container>
        </main>
      </div>
    )
  }
}

function SelectPlan() {
  if (window.innerWidth <= 576) {
    return (
      <main>
        <div className="App">
          <Steps className='z-index-2' />
          <Card className='z-index-1'>
            <Plan />
          </Card>
        </div>
      </main>
    )
  } 
  if ((window.innerWidth > 576 && window.innerWidth < 770) && screen.orientation.type == 'portrait-primary'){
    return (
      <main>
        <div className="App">
          <Steps className='z-index-2' />
          <Card className='z-index-1'>
            <Plan />
          </Card>
        </div>
      </main>
    )
  } 
  else {
    return (
      <div className="App">
        <main>
          <Container className='p-0'>
            <Row>
              <Card inverse className='formContainer'>
                <Col sm='4'>
                  <Steps />
                </Col>
                <Col sm='8'>
                  <Plan />
                </Col>
              </Card>
            </Row>
          </Container>
        </main>
      </div>
    )
  }
}

function PickAddOns() {
  if (window.innerWidth <= 576) {
    return (
      <main>
        <div className="App">
          <Steps className='z-index-2' />
          <Card className='z-index-1'>
            <AddOns />
          </Card>
        </div>
      </main>
    )
  } 
  if ((window.innerWidth > 576 && window.innerWidth < 770) && screen.orientation.type == 'portrait-primary'){
    return (
      <main>
        <div className="App">
          <Steps className='z-index-2' />
          <Card className='z-index-1'>
            <AddOns />
          </Card>
        </div>
      </main>
    )
  } 
  else {
    return (
      <div className="App">
        <main>
          <Container className='p-0'>
            <Row>
              <Card inverse className='formContainer'>
                <Col sm='4'>
                  <Steps />
                </Col>
                <Col sm='8'>
                  <AddOns />
                </Col>
              </Card>
            </Row>
          </Container>
        </main>
      </div>
    )
  }
}

function FinishUp() {
  if (window.innerWidth <= 576) {
    return (
      <main>
        <div className="App">
          <Steps className='z-index-2' />
          <Card className='z-index-1'>
            <FinishingUp />
          </Card>
        </div>
      </main>
    )
  } 
  if ((window.innerWidth > 576 && window.innerWidth < 770) && screen.orientation.type == 'portrait-primary'){
    return (
      <main>
        <div className="App">
          <Steps className='z-index-2' />
          <Card className='z-index-1'>
            <FinishingUp />
          </Card>
        </div>
      </main>
    )
  }
  else {
    return (
      <div className="App">
        <main>
          <Container className='p-0'>
            <Row>
              <Card inverse className='formContainer'>
                <Col sm='4'>
                  <Steps />
                </Col>
                <Col sm='8'>
                  <FinishingUp />
                </Col>
              </Card>
            </Row>
          </Container>
        </main>
      </div>
    )
  }
}

function Sum() {
  if (window.innerWidth <= 576) {
    return (
      <main>
        <div className="SumApp">
          <Steps className='z-index-2' />
          <Card className='z-index-1'>
            <Summary />
          </Card>
        </div>
      </main>
    )
  } 
  if ((window.innerWidth > 576 && window.innerWidth < 770) && screen.orientation.type == 'portrait-primary'){
    return (
      <main>
        <div className="SumApp">
          <Steps className='z-index-2' />
          <Card className='z-index-1'>
            <Summary />
          </Card>
        </div>
      </main>
    )
  } 
  else {
    return (
      <div className="App">
        <main>
          <Container className='p-0'>
            <Row>
              <Card inverse className='formContainer'>
                <Col sm='4'>
                  <Steps />
                </Col>
                <Col sm='8'>
                  <Summary />
                </Col>
              </Card>
            </Row>
          </Container>
        </main>
      </div>
    )
  }
}