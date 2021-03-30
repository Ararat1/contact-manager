import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

import s from "./App.module.sass";

const App = () => {
    return (
        <div className={s.App}>
            <Header />

            <DndProvider backend={HTML5Backend}>
                <Main />
            </DndProvider>

            <Footer />
        </div>
    );
};

export default App;
