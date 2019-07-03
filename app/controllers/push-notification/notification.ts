import webpush from '../../configFiles/pushNotification'
import {Request,Response} from 'express'

const sendNotification = (req:Request,res:Response)=>{
    //Get pushSubscription Object
    const subscription = req.body

    //Send 201 created resource
    res.status(202).json({})

      //Create payload
      const payload=JSON.stringify({'title':'NeoSTORE','body':'Notified by NeoSOFT Technologies!','icon':'https://estorewale.com/image/catalog/manufacturer/Neosoft.jpg'})


      //Pass object into send notificaton
      webpush.sendNotification(subscription,payload)
      .catch(err=>console.log(err))
}

export default sendNotification;