import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"

import UofByYearPlot from './uof-by-year-plot'
// import FtnByYearPlot from './ftn-by-year-plot'
// import ForceByMonthPlot from './force-by-month-plot'

class ForceTimeSection extends React.Component {
  constructor() {
    super()
  }

  renderUofByYear() {
    return (
      <div id="uof-year" className="my-3">
        <Row>
          <Col><h4>Annual Comparison - Amount of Force (UOF) by Year</h4></Col>
        </Row>
        <Row>
          <Col>
            <UofByYearPlot />
            <h5 className="text-center">FIGURE 3: TOTAL UOF BY YEAR</h5>

          </Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>TODO</li>
            </ul>
          </Col>

        </Row>
      </div>
    )
  }

  render() {
    return (
      <div>
        <Row>
          <Col><h2 id="force-time-section">Section II: Force over time</h2></Col>
        </Row>

        {this.renderUofByYear()}
      </div>
    )
  }
}

export default ForceTimeSection
