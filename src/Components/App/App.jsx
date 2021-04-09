import { Switch, Route, Redirect } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Header from "../Header/Header";
import Home from "../../Routes/Home/Home";
import AddContact from "../../Routes/AddContact/AddContact";
import EditContact from "../../Routes/EditContact/EditContact";
import NotFound from "../../Routes/NotFound/NotFound";
import Footer from "../Footer/Footer";

import s from "./App.module.sass";

const App = () => {
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
        </div>
    );
};

export default App;
