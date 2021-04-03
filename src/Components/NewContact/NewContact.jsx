import isEmpty from "validator/lib/isEmpty";
import isLength from "validator/lib/isLength";
import isAlphanumeric from "validator/lib/isAlphanumeric";
import isEmail from "validator/lib/isEmail";
import isMobilePhone from "validator/lib/isMobilePhone";

import Input from "../Shared/Input/Input";
import Button from "../Shared/Button/Button";

import s from "./NewContact.module.sass";

const NewContact = ({ onAdd, onCancel }) => {
    const contact = {
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

    // Inputs Validation
    // -----------------------------------------------------------------------------
    const handleInputEvent = ({ target: { name, value } }) => {
        contact[name] = value;

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

    // Add new contact
    // -----------------------------------------------------------------------------
    const handleAddContact = () => {
        let isValid = true;

        for (let flag of Object.values(validationFlags)) {
            if (flag === false) {
                isValid = false;
                break;
            }
        }

        if (isValid) onAdd(contact);
        else showErrors();
    };

    return (
        <div className={`col-10 col-sm-8 col-md-6 col-lg-4 col-xl-3`}>
            <div className={`${s.Contact}`}>
                <h3>
                    <input
                        type="text"
                        name="firstName"
                        onInput={handleInputEvent}
                        autoComplete="off"
                        placeholder={placeholders.firstName}
                    />
                    <input
                        type="text"
                        name="lastName"
                        onInput={handleInputEvent}
                        autoComplete="off"
                        placeholder={placeholders.lastName}
                    />
                </h3>

                <Input
                    name="email"
                    onInput={handleInputEvent}
                    placeholder={placeholders.email}
                />

                <Input
                    name="primaryNumber"
                    onInput={handleInputEvent}
                    placeholder={placeholders.primaryNumber}
                />

                <Input
                    name="workNumber"
                    onInput={handleInputEvent}
                    placeholder={placeholders.workNumber}
                />

                <Input
                    name="notes"
                    onInput={handleInputEvent}
                    placeholder={placeholders.notes}
                />

                <div className={s.options}>
                    <Button bg="red" onClick={onCancel}>
                        <i className="fas fa-times"></i>
                    </Button>
                    <Button bg="blue" onClick={handleAddContact}>
                        <i className="fas fa-check"></i>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default NewContact;
