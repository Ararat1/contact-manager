import { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDispatch, useSelector } from "react-redux";

import { setAlertsAction } from "../../Redux/actions";
import Header from "../Header/Header";
import Home from "../../Routes/Home/Home";
import AddContact from "../../Routes/AddContact/AddContact";
import EditContact from "../../Routes/EditContact/EditContact";
import NotFound from "../../Routes/NotFound/NotFound";
import Footer from "../Footer/Footer";
import Alerts from "../Alerts/Alerts";
import Details from "../../Routes/Details/Details";

import s from "./App.module.sass";

const App = () => {
    // States
    // ------------------------------------------------------------------------------------------
    const alerts = useSelector(({ alerts }) => alerts.alerts);
    const dispatch = useDispatch();

    // if there are alerts => show them
    // after show every 2 seconds updated alerts with shift()
    // ------------------------------------------------------------------------------------------
    useEffect(() => {
        setTimeout(() => {
            if (alerts.length) {
                let updatedAlerts = [...alerts];
                updatedAlerts.shift();
                dispatch(setAlertsAction(updatedAlerts));
            }
        }, 2000);
    }, [alerts, dispatch]);

    // Render App
    // ------------------------------------------------------------------------------------------
    return (
        <div className={s.App}>
            <Header />

            <Switch>
                <Route
                    path="/"
                    exact
                    render={(props) => (
                        <DndProvider backend={HTML5Backend}>
                            <Home {...props} />
                        </DndProvider>
                    )}
                />
                <Route
                    path="/add-contact"
                    render={(props) => <AddContact {...props} />}
                />
                <Route
                    path="/edit-contact/:id"
                    render={(props) => <EditContact {...props} />}
                />
                <Route
                    path="/details/:id"
                    render={(props) => <Details {...props} />}
                />
                <Route
                    path="/not-found"
                    render={(props) => <NotFound {...props} />}
                />
                <Redirect to="/not-found" />
            </Switch>

            <Footer />

            <Alerts messages={alerts} />
        </div>
    );
};

export default App;
