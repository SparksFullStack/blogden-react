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

export default class Posts extends Component {
  render() {
    return (
      <section id="posts">
        <Container>
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            <h4>Latest Posts</h4>
                        </CardHeader>
                        <Table striped>
                            <thead className="thead-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Date</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Post One</td>
                                    <td>Web Development</td>
                                    <td>May 10, 2018</td>
                                    <td>
                                        <Button color="secondary" href="/details">
                                            <i className="fas fa-angle-double-right"></i> Details
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Post Two</td>
                                    <td>Philosophy/Religion</td>
                                    <td>April 10, 2018</td>
                                    <td>
                                        <Button color="secondary" href="/details">
                                            <i className="fas fa-angle-double-right"></i> Details
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Post Three</td>
                                    <td>Web Development</td>
                                    <td>May 10, 2018</td>
                                    <td>
                                        <Button color="secondary" href="/details">
                                            <i className="fas fa-angle-double-right"></i> Details
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Post Four</td>
                                    <td>Gaming</td>
                                    <td>May 25, 2017</td>
                                    <td>
                                        <Button color="secondary" href="/details">
                                            <i className="fas fa-angle-double-right"></i> Details
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Post Five</td>
                                    <td>Web Development</td>
                                    <td>January 10, 2017</td>
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
