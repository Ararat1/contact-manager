import Header from "./Header/Header";
import Main from "./Main/Main";

import s from "./App.module.sass";

const App = () => {
    return (
        <div className={s.App}>
            <Header />
            <Main />
        </div>
    );
};

export default App;
