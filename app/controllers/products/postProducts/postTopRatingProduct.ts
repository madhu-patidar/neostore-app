import { Request, Response } from "express";
import ProductListModel from "../../../models/products/product_list";

const topRatingProduct = (req: Request, res: Response) => {
  let count:number = parseInt(req.body.limit)
  ProductListModel.aggregate(
    [
      {
        $sort: {
          product_rating: -1
        }
      },
      {
        $group: {
          _id: "$category_id",
          products: { $push: "$$ROOT" }
        }
      },
      {
        $project: {
          DashboardProducts: {
            $slice: ["$products", count]
          }
        }
      }
    ],
    (err: any, result: string) => {
      if (err) res.status(404).json({ success: false, error_message: err });
      else {
        res.status(200).json({ success: true, products: result });
      }
    }
  );
};

export default topRatingProduct;
