import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Container, Row, Col, Table } from "react-bootstrap";
import PulseLoader from "react-spinners/PulseLoader";

import { setInitialContact } from "../../Util/setInitialContact";

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
        fetch(`http://localhost:8080/details/${id}`, { method: "GET" })
            .then((res) => res.json())
            .then((details) => {
                if (history.location.state === undefined) {
                    fetch(`http://localhost:8080/contacts/${id}`, {
                        method: "GET",
                    })
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
                                                if (key === "id") {
                                                    return undefined;
                                                }

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
                                        )}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            )}
        </main>
    );
};

export default Details;
