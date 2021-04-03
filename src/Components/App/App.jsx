import { Switch, Route } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Header from "./Header/Header";
import Contacts from "./Contacts/Contacts";
import AddContact from "./AddContact/AddContact";
import Footer from "./Footer/Footer";

import s from "./App.module.sass";

const App = () => {
    return (
        <div className={s.App}>
            <Header />

            <Switch>
                <Route exact path="/">
                    <DndProvider backend={HTML5Backend}>
                        <Contacts />
                    </DndProvider>
                </Route>
                <Route path="/add-contact">
                    <AddContact />
                </Route>
            </Switch>

            <Footer />
        </div>
    );
};

export default App;
