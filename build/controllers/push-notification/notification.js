"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pushNotification_1 = __importDefault(require("../../configFiles/pushNotification"));
var sendNotification = function (req, res) {
    //Get pushSubscription Object
    var subscription = req.body;
    //Send 201 created resource
    res.status(202).json({});
    //Create payload
    var payload = JSON.stringify({ 'title': 'NeoSTORE', 'body': 'Notified by NeoSOFT Technologies!', 'icon': 'https://estorewale.com/image/catalog/manufacturer/Neosoft.jpg' });
    //Pass object into send notificaton
    pushNotification_1.default.sendNotification(subscription, payload)
        .catch(function (err) { return console.log(err); });
};
exports.default = sendNotification;
