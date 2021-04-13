// used in <EditContact /> and <Details />
export const setInitialContact = (locationState) =>
    locationState === undefined
        ? {
            id: "",
            firstName: "",
            lastName: "",
            email: "",
            primaryNumber: "",
            workNumber: "",
            notes: "",
        }
        : locationState.contact;