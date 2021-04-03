import ContactForm from "../../Components/Shared/ContactForm/ContactForm";

const EditContact = () => {
    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <ContactForm formName="Edit Contact" />
                </div>
            </div>
        </main>
    );
};

export default EditContact;
