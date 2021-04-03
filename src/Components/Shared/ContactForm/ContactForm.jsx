import Input from "../Input/Input";
import Button from "../Button/Button";

import s from "./ContactForm.module.sass";

const ContactForm = ({ formName }) => {
    // Inputs Handling
    // -----------------------------------------------------------------------------
    const handleInputEvent = (e) => console.log(e.target.value);

    return (
        <>
            <div className={`${s.title} col-12 col-sm-10 col-md-8 col-lg-6`}>
                <h2>{formName}</h2>
            </div>
            <div className="w-100"></div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 p-0">
                <form className={s.form}>
                    <Input
                        name="firstName"
                        placeholder="First name *"
                        onInput={handleInputEvent}
                    />
                    <Input
                        name="lastName"
                        placeholder="Last name *"
                        onInput={handleInputEvent}
                    />
                    <Input
                        name="email"
                        placeholder="@ Email *"
                        onInput={handleInputEvent}
                    />
                    <Input
                        name="primaryNumber"
                        placeholder="Primary number *"
                        onInput={handleInputEvent}
                    />
                    <Input
                        name="workNumber"
                        placeholder="Work number *"
                        onInput={handleInputEvent}
                    />
                    <Input
                        name="notes"
                        placeholder="Notes *"
                        onInput={handleInputEvent}
                    />
                    <p>
                        <Button bg="blue">Cancel</Button>
                        <Button bg="red">
                            Save <i className="fas fa-save"></i>
                        </Button>
                    </p>
                </form>
            </div>
        </>
    );
};

export default ContactForm;
