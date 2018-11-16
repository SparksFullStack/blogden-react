import React, { Component } from 'react'
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Table,
    Button,

} from 'reactstrap';

export default class UsersTable extends Component {
  render() {
    return (
      <section id="users">
        <Container>
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            <h4>Latest Users</h4>
                        </CardHeader>
                        <Table striped>
                            <thead className="thead-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>John Doe</td>
                                    <td>jdoe@gmail.com</td>
                                    <td>
                                        <Button color="secondary" href="/details">
                                            <i className="fas fa-angle-double-right"></i> Details
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Harry White</td>
                                    <td>harry@yahoo.com</td>
                                    <td>
                                        <Button color="secondary" href="/details">
                                            <i className="fas fa-angle-double-right"></i> Details
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Mary Johnson</td>
                                    <td>mjohnson@gmail.com</td>
                                    <td>
                                        <Button color="secondary" href="/details">
                                            <i className="fas fa-angle-double-right"></i> Details
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card>
                </Col>
            </Row>
        </Container>
      </section>
    )
  }
}
