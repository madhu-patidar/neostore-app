import { Request, Response } from "express";
import Joi from "joi";
import Customer from "../../../models/customer/customer_model";
import connection from "../../../configFiles/sequelize-postgres";
import sendEmail from "../../../configFiles/sendEmail";
import jwt from "jsonwebtoken";

const forgotPassword = (req: Request, res: Response) => {
  let email: string = req.body.email;

  const schema = Joi.object().keys({
    u_email: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required()
  });

  Joi.validate({ u_email: email }, schema, (err, result) => {
    if (err) {
      res.status(404).json({ success: false, error_message: err.message });
    } else {
      connection.sync().then(() => {
        Customer.findOne({ where: { email: email } })
          .then(result => {
            if (result) {
              jwt.sign({ email }, "secretkey", (err, token) => {
                const output = `
                                <p><font size='4'><strong>You have requested for Forgot Password of NeoSTORE account.</strong></font></p>
                                <p><font size='3'>Dont't worry, we will help you. Please follow below given instructions.</font></p>
                                 <pre>1. Click on below given link, which will redirect you set password screen.</pre>
                                 <pre>3. Enter your new password and confirm password and press submit button.
                               </pre>
                               <h4>Please click on below button for set your password.</h4>
                               <button><a href="http://d644c063.ngrok.io/login">Click here</a></button>
                               <br>
                               <br>
                               <p><font color="black" size='3'>Thank you for joining us.</font></p>
                                 <img  src="https://d1hbpr09pwz0sk.cloudfront.net/logo_url/neosoft-technologies-377c095a" height=50 width=140>
                            `;

                             // Send Email
                             sendEmail({
                                from: "sgshubham04@gmail.com",
                                to: email,
                                cc:'sgshubham04@gmail.com',
                                subject: 'Recover Account',
                                html: output
                            });
                            res
                            .status(200)
                            .json({
                              success: true,
                              message: "Check your mail for further instructions.",
                              token:token
                            });
              });
            } else {
              res
                .status(404)
                .json({
                  success: false,
                  message: "This email is not registered with our database."
                });
            }
          })
          .catch(err => {
            res
              .status(404)
              .json({
                success: false,
                message: "Something went wrong",
                error_message: err
              });
          });
      });
    }
  });
};

export default forgotPassword;
