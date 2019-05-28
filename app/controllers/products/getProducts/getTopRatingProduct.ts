import { Request, Response } from "express";
import ProductListModel from "../../../models/products/product_list";

const gettopRatingProduct = (req: Request, res: Response) => {
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
            $slice: ["$products", 1]
          }
        }
      }
    ],
    (err: any, result: string) => {
      if (err) res.status(404).json({ success: false, error_message: err });
      else {
        res.status(200).json({ success: true,message:'Top Rating Product', products: result });
      }
    }
  );
};

export default gettopRatingProduct;
