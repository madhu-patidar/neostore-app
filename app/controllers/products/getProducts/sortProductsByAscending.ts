import {Request,Response} from 'express'
import ProductListModel from '../../../models/products/product_list'

const sortByAscending = (req:Request,res:Response)=>{

    let id=parseInt(req.params.customer_id)
    let customer_id=parseInt(req.body.id)

    if(id==customer_id){
        ProductListModel.aggregate([
            {
                $sort:{
                    product_name:1
                }
            }
        ],(err: any, result: string) => {
            if (err) res.status(404).json({ success: false,message:'Something went wrong', error_message: err });
            else {
              res.status(200).json({ success: true,message:'Products in Ascending order', products: result });
            }
          })
    }
    else{
        res.status(200).json({success:false,message:'You are not authourised customer'})
    }


}

export default sortByAscending;