import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

import s from "./App.module.sass";

const App = () => {
    return (
        <div className={s.App}>
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default App;
