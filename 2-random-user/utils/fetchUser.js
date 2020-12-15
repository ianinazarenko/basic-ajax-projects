const URL = "https://randomuser.me/api/";

const getUser = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    const person = data.results[0];
    const { phone, email } = person;
    const {
        picture: { large: image },
    } = person;
    const { password } = person.login;
    const { first: firstName, last: lastName } = person.name;
    const {
        dob: { age },
    } = person;
    const {
        street: { name: streetName, number: streetNumber },
    } = person.location;

    return {
        phone,
        email,
        image,
        password,
        name: `${firstName} ${lastName}`,
        age,
        address: `${streetName} ${streetNumber}`,
    };
};

export default getUser;
