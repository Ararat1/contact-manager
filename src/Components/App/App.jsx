import { Switch, Route } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Header from "../Header/Header";
import Home from "../../Routes/Home/Home";
import AddContact from "../../Routes/AddContact/AddContact";
import EditContact from "../../Routes/EditContact/EditContact";
import Footer from "../Footer/Footer";

import s from "./App.module.sass";

const App = () => {
    return (
        <div className={s.App}>
            <Header />

            <Switch>
                <Route exact path="/">
                    <DndProvider backend={HTML5Backend}>
                        <Home />
                    </DndProvider>
                </Route>
                <Route path="/add-contact">
                    <AddContact />
                </Route>
                <Route path="/edit-contact">
                    <EditContact />
                </Route>
            </Switch>

            <Footer />
        </div>
    );
};

export default App;
