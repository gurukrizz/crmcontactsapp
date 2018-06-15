import { Request, Response } from "express";
import { ContactController } from "../controllers/crmControllers"; 

export class Routes {
  public contactController: ContactController = new ContactController();
  public routes(app): void {
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({
        message: "Get was done successfully!!"
      });
    });

    //Fetching and creating a new contacts.
    app.route("/contact")
      .get(this.contactController.getContacts)
      .post(this.contactController.addNewContact)

    //RUD on the one contact with id
    app.route("/contact/:contactId")
      .get(this.contactController.getContactWithID)
      .put(this.contactController.updateContact)
      .delete(this.contactController.deleteContact)
  }
}
