import sendmail from 'sendmail'

//Setup for sendmail package
const emailSender = sendmail({
    silent: false
});

const sendEmail = (options: sendmail.MailInput): Promise<boolean> =>
    new Promise((resolve, reject) => {
        emailSender(options, (err, reply) => {
            // if error happened or returned code is now started with 2**
            if (err || !reply.startsWith("2")) {
                reject(err);
            } else {
                resolve(true);
            }
        });
    });

export default sendEmail;