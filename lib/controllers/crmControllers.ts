import * as mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModels';
import { Request,Response } from 'express';

const Contact = mongoose.model('Contact', ContactSchema);

export class ContactController {
    //Method to add the new contact
    public addNewContact(req: Request, res: Response) {
        let newContact = new Contact(req.body);
        newContact.save((err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }
    //Method to get all contacts.
    public getContacts(req: Request, res: Response) {
        Contact.find({}, (err, contacts) => {
            if(err){
                res.send(err);
            } 
            res.json(contacts);
        });
    }
    //Getting the one contact details.
    public getContactWithID(req: Request, res: Response) {
        Contact.findById(req.params.contactId, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }
    //Updating a contact using the id
    public updateContact(req: Request, res: Response) {
        Contact.findOneAndUpdate({_id: req.params.contactId}, req.body, { new:true }, (err, contact) => {
            if(err){
                res.send(err)
            }
            res.json(contact);
        });
    }
    //Deleting a contact using ID.
    public deleteContact(req: Request, res: Response) {
        Contact.remove({_id: req.params.contactId}, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json({ message: "Contact Deleted Successfully."});  
        });
    }
}