import isEmpty from "validator/lib/isEmpty";
import isLength from "validator/lib/isLength";
import isAlphanumeric from "validator/lib/isAlphanumeric";
import isEmail from "validator/lib/isEmail";
import isMobilePhone from "validator/lib/isMobilePhone";

import Input from "../Input/Input";
import Button from "../Button/Button";

import s from "./ContactForm.module.sass";

const ContactForm = ({ formName, onAdd, onCancel }) => {
    const newContact = {
        firstName: "",
        lastName: "",
        email: "",
        primaryNumber: "",
        workNumber: "",
        notes: "",
    };

    const validationFlags = {
        firstName: false,
        lastName: false,
        email: false,
        primaryNumber: false,
        workNumber: false,
        notes: false,
    };

    const placeholders = {
        firstName: "First name",
        lastName: "Last name",
        email: "@ Email",
        primaryNumber: "Primary Number",
        workNumber: "Work Number",
        notes: "Notes",
    };

    // Inputs Handling and Validation
    // -----------------------------------------------------------------------------
    const handleInputEvent = ({ target: { name, value } }) => {
        newContact[name] = value;

        switch (name) {
            case "firstName":
            case "lastName":
                validationFlags[name] =
                    !isEmpty(value) &&
                    isAlphanumeric(value, "en-US") &&
                    isLength(value, { min: 2, max: 16 });
                break;
            case "email":
                validationFlags.email = !isEmpty(value) && isEmail(value);
                break;
            case "primaryNumber":
            case "workNumber":
                validationFlags[name] =
                    !isEmpty(value) && isMobilePhone(value, "am-AM");
                break;
            default:
                validationFlags.notes =
                    !isEmpty(value) &&
                    isAlphanumeric(value, "en-US") &&
                    isLength(value, { min: 2, max: 8 });
        }
    };

    // Show Errors
    // -------------------------------------------------------------------------------
    const showErrors = () => {
        for (let [flag, value] of Object.entries(validationFlags)) {
            if (value === false) {
                let errorMsg = `Invalid ${placeholders[flag]}`;
                alert(errorMsg);
                break;
            }
        }
    };

    // Add event hadnling
    // -----------------------------------------------------------------------------
    const handleAddContact = (e) => {
        e.preventDefault();

        let isValid = true;

        for (let flag of Object.values(validationFlags)) {
            if (flag === false) {
                isValid = false;
                break;
            }
        }

        if (isValid) onAdd(newContact);
        else showErrors();
    };

    // Cancel event hadnling
    // -----------------------------------------------------------------------------
    const handleCancelEvent = (e) => {
        e.preventDefault();
        onCancel();
    };

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
                        <Button bg="blue" onClick={handleCancelEvent}>
                            Cancel
                        </Button>
                        <Button bg="red" onClick={handleAddContact}>
                            Save <i className="fas fa-save"></i>
                        </Button>
                    </p>
                </form>
            </div>
        </>
    );
};

export default ContactForm;
