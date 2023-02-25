import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import {FcGoogle } from "react-icons/fc"
import { auth, provider } from "../../configs/firebase"
import { signInWithPopup } from "firebase/auth"

import "./login.css"

const Login = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            localStorage.setItem("token", data.user.accessToken)
            localStorage.setItem("name", data.user.displayName)
            navigate("/github")
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={6} lg={5} xs={12}>
                        <Card className="card-screen">
                            <Card.Body>
                                <div className="container">
                                    <h2 className="text-center text-white">Github Jobs</h2>
                                    <div className="mt-4 mb-4 text-center">
                                        <Card className="card_sosmed">
                                            <span className="text-white mt-2">Sign in with</span>
                                            <Card.Body>
                                                <FcGoogle className="icon_sosmed" onClick={handleClick} />
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login