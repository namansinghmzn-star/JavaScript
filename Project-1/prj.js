let contacts = [
    {
        name: "Naman",
        phone: "9876543210",
        email: "naman@gmail.com"
    },
    {
        name: "Rahul",
        phone: "9999999999",
        email: "rahul@gmail.com"
    }
];

function showContacts(contacts) {

    console.log("Contact List:");

    for (let i = 0; i < contacts.length; i++) {

        console.log(
            contacts[i].name,
            contacts[i].phone,
            contacts[i].email
        );

    }
}

contacts.push({
    name: "Aman",
    phone: "8888888888",
    email: "aman@gmail.com"
});

showContacts(contacts);

console.log("Total Contacts:", contacts.length);