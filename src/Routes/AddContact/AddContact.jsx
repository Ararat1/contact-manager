import ContactForm from "../../Components/Shared/ContactForm/ContactForm";

const AddContact = () => {
    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <ContactForm formName="Add Contact" />
                </div>
            </div>
        </main>
    );
};

export default AddContact;
