import webpush from 'web-push'


// VAPID keys should only be generated only once.
const vapidKeys = webpush.generateVAPIDKeys();

webpush.setVapidDetails('mailto:shubham.gupta@neosofttech.com',vapidKeys.publicKey,vapidKeys.privateKey)

export default webpush
