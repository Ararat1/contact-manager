import s from "./Toolbar.module.sass";

const Toolbar = () => {
    return (
        <section className={s.Toolbar}>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-12">
                        <div className={`${s.btnGroup}`}>
                            <button>
                                <i className="fas fa-user-plus"></i>
                            </button>
                            <button>
                                <i className="fas fa-user-plus"></i>
                            </button>
                            <button>
                                <i className="fas fa-user-plus"></i>
                            </button>
                            <button>
                                <i className="fas fa-user-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Toolbar;
