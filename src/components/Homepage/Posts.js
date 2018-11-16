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
                <Col md="9">
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
                <Col md="3">
                    <Card className="text-center bg-primary text-white mb-3">
                        <CardBody>
                            <h3>Posts</h3>
                            <h4 className="display-4">
                                <i className="fas fa-pencil-alt"></i> 6
                            </h4>
                            <Button href="/posts" size="sm" outline color="light">View</Button>
                        </CardBody>
                    </Card>

                    <Card className="text-center bg-success text-white mb-3">
                        <CardBody>
                            <h3>Categories</h3>
                            <h4 className="display-4">
                                <i className="fas fa-folder"></i> 3
                            </h4>
                            <Button href="/categories" size="sm" outline color="light">View</Button>
                        </CardBody>
                    </Card>

                    <Card className="text-center bg-warning text-white mb-3">
                        <CardBody>
                            <h3>Users</h3>
                            <h4 className="display-4">
                                <i className="fas fa-users"></i> 3
                            </h4>
                            <Button href="/posts" size="sm" outline color="light">View</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
      </section>
    )
  }
}
