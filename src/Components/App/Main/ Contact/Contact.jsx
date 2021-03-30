import s from "./Contact.module.sass";

const Contact = ({ contact }) => {
    return (
        <div className={`col-10 col-sm-8 col-md-6 col-lg-4 col-xl-3`}>
            <div className={`${s.Contact}`}>
                <h3>
                    {contact.firstName} {contact.lastName}
                </h3>
                <p>{contact.email}</p>
                <p>{contact.primaryNumber}</p>
                <p>{contact.workNumber}</p>
                <p>{contact.notes}</p>
            </div>
        </div>
    );
};

export default Contact;
