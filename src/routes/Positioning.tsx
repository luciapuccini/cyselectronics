import React from 'react'
import { Col, Nav } from 'react-bootstrap'

import Product from './Product'

function Positioning() {
  return (

<Col>
<br/>
  <h2>Positioning</h2>
        <Nav variant="tabs" defaultActiveKey="magnaposi" className="justify-content-end">
   <Nav.Item>
     <Nav.Link eventKey="magnaposi" href="https://magnaposi.com">Magnaposi</Nav.Link>
   </Nav.Item>
 </Nav>
  <Product product="magnaposi"/>
</Col>
  )
}

export default Positioning;