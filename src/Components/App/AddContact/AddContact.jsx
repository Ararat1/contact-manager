import ContactForm from "../../Shared/ContactForm/ContactForm";
import s from "./AddContact.module.sass";

const AddContact = () => {
    return (
        <main className={s.AddContact}>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <ContactForm formName="Add Contact" />
                </div>
            </div>
        </main>
    );
};

export default AddContact;
