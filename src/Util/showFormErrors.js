// This function is used in <AddContact /> and <EditContact /> for validation errors displaying
export const showFormErrors = (flags) => {
    const placeholders = {
        firstName: "First name *",
        lastName: "Last name *",
        email: "@ Email *",
        primaryNumber: "Primary Number *",
        workNumber: "Work Number *",
        notes: "Notes *",
        github: "GitHub link",
        linkedin: "Linkedin link",
        skype: "Skype link",
    };

    for (let [flag, value] of Object.entries(flags)) {
        if (value === false) {
            let errorMsg = `Invalid ${placeholders[flag]}`;
            alert(errorMsg);
            break;
        }
    }
}