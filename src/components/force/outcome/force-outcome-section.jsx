import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"

import UofByDispositionPlot from './uof-by-disposition-plot'
import UofByOfficerInjuryPlot from './uof-by-officer-injury-plot'
import UofByPublicInjuryPlot from './uof-by-public-injury-plot'

class ForceOutcomeSection extends React.Component {
  constructor() {
    super()
  }

  renderUofByEffectiveness() {
    return (
      <div className="my-3">
        <Row>
          <Col>

            <h4>Force by Type and Effectiveness</h4>
            <h1>DATA NOT AVAILABLE</h1>
            <h5 className="text-center">FIGURE 15: UOF EFFECTIVENESS BY TYPE</h5>
            <p>OIPM and NOPD have discussed that NOPD has no consistent internal definition for
the terms “effective”, “not effective”, and “limited effectiveness”. The service provider
that provides NOPD’s use of force tracking software suggested the following
definitions:</p>
          <em><ul className="pl-5">
            <li>Effective: The force used resulted in stopping the threat or action so no further force was
necessary.</li>
            <li>Not Effective: The force used did not end the threat, and additional force options had to be
utilized to end the threat, or the suspect/combatant escaped.</li>
            <li>Limited Effectiveness: The force used initially resulted in compliance, but the
suspect/combatant overcame the force, created an additional threat which resulted in
additional force or he escaped.</li>
          </ul></em>
            <p>Based on comments received from NOPD, it is unlikely that these definitions are known
and used by the entire police force.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <strong>Analysis</strong>
            <ul>
              <li>Unable to reproduce this analysis. Open data does not contain this information.</li>
            </ul>

            <strong><u>Recommendation</u></strong>
            <p>NOPD should publish all fields required for OIPM annual reports as part of open data</p>
            <p>Has anything been done for NOPD to start operationalizing these definitions of effectiveness?</p>
          </Col>
        </Row>
      </div>
    )
  }

  renderUofByDisposition() {
    return (
      <div className="my-3">
        <Row>
          <Col>
            <h4>NOPD's Determination of Unauthorized Force</h4>
            <ul>
              <li>In previous years, OIPM reported dispositions at the UOF level. Doing so does not
accurately represent NOPD data which only captures dispositions at the incident
(FTN) level. In this report and future reports, force dispositions will be reported by
FTN.</li>
              <li>IS THIS GRAPH FTN OR UOF?</li>
              <li>A study on complaints stemming from a use of force by the National Institute of
Justice predicts 6.5 unjustified use of force for a department the size of NOPD.</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <UofByDispositionPlot />
            <h5 className="text-center">FIGURE 15: NOPD's Disposition of Use of Force</h5>

          </Col>
        </Row>
      </div>
    )
  }

  renderUofByOfficerInjury() {
    return (
      <div className="my-3">
        <Row>
          <Col>
            <h4>Officer Injuries</h4>
            <UofByOfficerInjuryPlot />
            <h5 className="text-center">FIGURE 16: UOF LEADING TO OFFICER INJURY</h5>
            <p>NOPD police officers face a real risk of injury and death. This is critical to
understanding the context in which officers make decisions to use force. But risk of
injury is not unique to officers. Individuals who are the subjects of police force also face
a risk of injury. See “UOF leading to individual injury” for reference to how UOF injury
risk applies to individuals who are subjected to NOPD use of force.</p>
            <ul>
              <li>TODO</li>
            </ul>
          </Col>
        </Row>
      </div>
    )
  }

  renderUofByPublicInjury() {
    return (
      <div className="my-3">
        <Row>
          <Col>
            <h4>Individual Injury</h4>
            <UofByPublicInjuryPlot />
            <h5 className="text-center">FIGURE 17: UOF LEADING TO INDIVIDUAL INJURY</h5>
            <ul>
              <li>Risk of injury is not unique to officers. Individuals who are the subjects of police
force also face a risk of injury.</li>
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
            <Col><h2 id="force-outcome-section">SECTION IV: FORCE BY OUTCOME</h2></Col>
        </Row>

        {this.renderUofByEffectiveness()}
        {this.renderUofByDisposition()}
        {this.renderUofByOfficerInjury()}
        {this.renderUofByPublicInjury()}
      </div>
    )
  }
}

export default ForceOutcomeSection
