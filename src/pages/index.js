import React from "react"
import { Link } from "gatsby"

import {
  Container, Row, Col, Nav, NavItem, NavLink, Button,
  ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

import Layout from "../components/layout/layout"
import Image from "../components/layout/image"
import SEO from "../components/layout/seo"

class IndexPage extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  withPrefix(path) {
    return this.normalizePath(`${__PATH_PREFIX__}/${path}`)
  }

  normalizePath(path) {
    return path.replace(/\/+/g, `/`)
  }

  renderNavigationButtons() {
    return (
      <div className="my-5">
        <ButtonDropdown className="my-2" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret size="lg" className="mx-2">
            Jump to section
          </DropdownToggle>
          <DropdownMenu>
            <a href="#report-intro"><DropdownItem>Overview</DropdownItem></a>
            <a href={this.withPrefix("/force-highlights")}><DropdownItem>Use of Force</DropdownItem></a>
          </DropdownMenu>
        </ButtonDropdown>

        <Button className="my-2" size="lg" color="success"><a href="https://nolaipm.gov/annual-reports/" className="text-white">Download full report</a></Button>
      </div>
    )
  }

  render() {
    return (
      <Layout>
        <SEO title="2019 OIPM Annual Report" keywords={[
            `New Orleans`, `police`, `OIPM`, `NOPD`, `independent police monitor`,
            `oversight`, `data`, `analysis`, `annual report`, `2018`
          ]} />

        <div className="bg-primary">
          <Container>
              <Row className="text-center">
                <Col className="mt-4">
                  <h1 className="my-5">2019 Annual Report</h1>
                
                  <h2 className="my-3 text-white">New Orleans</h2>
                  <h2 className="my-3 text-white">Office of the Independent Police Monitor</h2>

                  {this.renderNavigationButtons()}
                </Col>
              </Row>
            </Container>
          </div>
      </Layout>
    )
  }
}

export default IndexPage
