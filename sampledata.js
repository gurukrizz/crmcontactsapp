use crmcontacts;
var bulk = db.contacts.initializeUnorderedBulkOp();
bulk.insert({
    "firstName" : "Contact 1",
    "lastName" : "Test",
    "email" : "contact1.test@test.com",
    "phone" : 999999999,
    "company" : "Test Company 1"
});
bulk.insert({
    "firstName" : "Contact 2",
    "lastName" : "Test",
    "email" : "contact2.test@test.com",
    "phone" : 999999999,
    "company" : "Test Company 2"
});
bulk.insert({
    "firstName" : "Contact 3",
    "lastName" : "Test",
    "email" : "contact3.test@test.com",
    "phone" : 999999999,
    "company" : "Test Company 3"
});
bulk.insert({
    "firstName" : "Contact 4",
    "lastName" : "Test",
    "email" : "contact4.test@test.com",
    "phone" : 999999999,
    "company" : "Test Company 4"
});
bulk.insert({
    "firstName" : "Contact 5",
    "lastName" : "Test",
    "email" : "contact5.test@test.com",
    "phone" : 999999999,
    "company" : "Test Company 5"
});
bulk.execute();