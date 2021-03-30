import Contact from "./ Contact/Contact";

const Main = () => {
    const CONTACTS = [
        {
            id: 1,
            firstName: "Ararat",
            lastName: "Matinyan",
            email: "matinyan_0@mail.ru",
            primaryNumber: "+37499999999",
            workNumber: "+37477777777",
            notes: "Owner",
        },
        {
            id: 2,
            firstName: "Artur",
            lastName: "Sargsyan",
            email: "sargsyan@mail.ru",
            primaryNumber: "+37491111112",
            workNumber: "+37491111112",
            notes: "Director",
        },
        {
            id: 3,
            firstName: "John",
            lastName: "Doe",
            email: "john@gmail.com",
            primaryNumber: "+37491555555",
            workNumber: "+37491555544",
            notes: "Manager",
        },
        {
            id: 4,
            firstName: "Will",
            lastName: "Smith",
            email: "mr-smith@gmail.com",
            primaryNumber: "+37499899998",
            workNumber: "+37491999292",
            notes: "Actor",
        },
        {
            id: 6,
            firstName: "Adam",
            lastName: "James",
            email: "james@gmail.com",
            primaryNumber: "+37499922999",
            workNumber: "+37491992229",
            notes: "Worker",
        },
        {
            id: 7,
            firstName: "Patricia",
            lastName: "Lebsack",
            email: "Julianne.OConner@kory.org",
            primaryNumber: "+37455123545",
            workNumber: "+37455123545",
            notes: "Worker",
        },
        {
            id: 8,
            firstName: "Clementine",
            lastName: "Bauch",
            email: "Nathan@yesenia.net",
            primaryNumber: "+37498798585",
            workNumber: "+37498798585",
            notes: "Worker",
        },
    ];

    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-evenly">
                    {CONTACTS.map((contact) => (
                        <Contact contact={contact} key={contact.id} />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Main;
