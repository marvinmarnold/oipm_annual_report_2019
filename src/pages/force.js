import React from "react"
import { Container, Row, Col, Nav, NavItem, NavLink, Button } from 'reactstrap';

// Components
import Page from "../components/layout/page"
import SEO from "../components/layout/seo"
import ForceIntroductionSection from '../components/force/force-introduction-section'

const ForcePage = () => (
  <Page
    title={"UOF Intro - 2018 OIPM Annual Report"}
    nav={
      <Nav className="mt-4" vertical>
        <NavItem>
          <NavLink href="/force" className="text-white">Introduction &amp; City comparison</NavLink>
        </NavItem>  
        <NavItem>
          <NavLink href="/force-time" className="text-white">Section 2: Force over time</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/force-level" className="text-white">Section 3: Force by type and level</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/force-outcome" className="text-white">Section 4: Force by outcome</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/force-justification" className="text-white">Section 5: Justification for force</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/force-most" className="text-white">Section 6: Officers using most force</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/force-officer" className="text-white">Section 7: By officer demographics</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/force-individual" className="text-white">Section 8: By individual demographics</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/force-future" className="text-white">Section 9: Future analysis</NavLink>
        </NavItem>
      </Nav>
    }
    body={
      <div>
        <Row>
          <Col>
            <h1 className="mt-5 text-center">2019 Annual Report</h1>
            <h2 className="mb-5 text-center">Statistical Review of NOPD's Use of Force</h2>
          </Col>
        </Row>

        <ForceIntroductionSection />

        <Row className="text-center">
          <Col className="py-5">
            <Button size="lg" color="success"><a href="/force-time" className="text-white">Next: Force over time ></a></Button>
          </Col>
        </Row>
      </div>
    }
  />
)

export default ForcePage
