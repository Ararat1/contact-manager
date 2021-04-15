import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import PulseLoader from "react-spinners/PulseLoader";

import { setInitialContact } from "../../Util/setInitialContact";
import { config } from "../../Util/config";

import s from "./Details.module.sass";

const Details = () => {
    // States
    // -----------------------------------------------------------------------------------------
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const { id } = useParams();
    const [contact, setContact] = useState(
        setInitialContact(history.location.state)
    );
    const [details, setDetails] = useState(null);

    // If contact does not come from history.location => get it from database
    // Get contact unshowed details from database by showingContactId
    // ------------------------------------------------------------------------------------------
    useEffect(() => {
        setLoading(true);
        fetch(`${config.database.link}/details/${id}`, { method: "GET" })
            .then((res) => res.json())
            .then((details) => {
                if (history.location.state === undefined) {
                    fetch(`${config.database.link}/contacts/${id}`)
                        .then((res) => res.json())
                        .then((contact) => setContact(contact));
                }

                setDetails(details);
                setLoading(false);
            })
            .catch((err) => {
                throw err;
            });
    }, [setLoading, history.location.state, id]);

    // Go to homepage
    // ------------------------------------------------------------------------------------------
    const handleGoBack = () => history.push("/");

    // Render Details
    // ------------------------------------------------------------------------------------------
    return (
        <main className={s.Details}>
            {(loading && (
                <Container className={s.loader}>
                    <Row>
                        <Col>
                            <PulseLoader loading={loading} />
                        </Col>
                    </Row>
                </Container>
            )) || (
                <Container>
                    <Row className="d-flex flex-column">
                        <Col>
                            <Table striped bordered responsive>
                                <tbody>
                                    {Object.entries(contact).map(
                                        ([key, value], index) => {
                                            if (key === "id") {
                                                return undefined;
                                            }

                                            return (
                                                <tr key={index}>
                                                    <td>
                                                        <b>{key}</b>
                                                    </td>
                                                    <td>{value}</td>
                                                </tr>
                                            );
                                        }
                                    )}
                                    {details &&
                                        Object.entries(details).map(
                                            ([key, value], index) => {
                                                if (
                                                    key !== "id" &&
                                                    value !== ""
                                                ) {
                                                    return (
                                                        <tr key={index}>
                                                            <td>
                                                                <b>{key}</b>
                                                            </td>
                                                            <td>
                                                                <a
                                                                    href={value}
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                >
                                                                    {value}
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    );
                                                }

                                                return undefined;
                                            }
                                        )}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <Button variant="dark" onClick={handleGoBack}>
                                <i className="fas fa-arrow-left"></i>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            )}
        </main>
    );
};

export default Details;
