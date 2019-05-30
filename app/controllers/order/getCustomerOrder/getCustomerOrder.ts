import OrderModel from "../../../models/order/orderModel";
import { Request, Response } from "express";

const getCustomerOrder = (req: Request, res: Response) => {
  let customer_id: number = parseInt(req.body.id);
  let shipped: number = 0;
  let onTheWay: number = 0;
  let order_details: any = [];

  OrderModel.find({ customer_id: customer_id })
    .then(result => {
      if (result.length == 0) {
        res
          .status(200)
          .json({ success: true, message: "You don't have orders" });
      } else {
        for (let i: number = 0; i < result.length; i++) {
          if (
            result[i].status == "Delivered" &&
            result[i].isDelivered == true
          ) {
            shipped = shipped + 1;
          } else {
            onTheWay = onTheWay + 1;
          }
          order_details.push({
            order_id: result[i].order_id
          });
        }
        order_details.push({
          customer_id:customer_id,
          orders_shipped: shipped,
          orders_onTheWay: onTheWay
        });
        res
          .status(200)
          .json({
            success: true,
            message: "Your Order Details",
            order_details: order_details
          });
      }
    })
    .catch(err => {
      res.status(404).json({ success: false, message: "Something went wrong", error_message:err });
    });
};

export default getCustomerOrder;
