const { program } = require("commander");
const tmp = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            console.table(await tmp.listContacts());
            break;
        case "get":
            console.table(await tmp.getContactById(id));
            break;
        case "add":
            console.table(await tmp.addContact(name, email, phone));
            break;
        case "remove":
            console.table(await tmp.removeContact(id));
            break;
        default:
            console.warn("\x1B[31m Unknown action type!");
    }
};
program
    .option("-a, --action <type>", "choose action")
    .option("-i, --id <type>", "user id")
    .option("-n, --name <type>", "user name")
    .option("-e, --email <type>", "user email")
    .option("-p, --phone <type>", "user phone");

program.parse();

const argv = program.opts();
invokeAction(argv);
