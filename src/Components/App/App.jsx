import { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDispatch, useSelector } from "react-redux";

import Header from "../Header/Header";
import Home from "../../Routes/Home/Home";
import AddContact from "../../Routes/AddContact/AddContact";
import EditContact from "../../Routes/EditContact/EditContact";
import NotFound from "../../Routes/NotFound/NotFound";
import Footer from "../Footer/Footer";
import Alerts from "../Alerts/Alerts";

import s from "./App.module.sass";
import { setAlertsAction } from "../../Redux/actions";

const App = () => {
    // Alerts
    // get alerts from store
    // if there are alerts => show them
    // after show every 1second updated alerts with shift()
    const alerts = useSelector(({ alerts }) => alerts.alerts);
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            if (alerts.length) {
                let updatedAlerts = [...alerts];
                updatedAlerts.shift();
                dispatch(setAlertsAction(updatedAlerts));
            }
        }, 2000);
    }, [alerts, dispatch]);

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
