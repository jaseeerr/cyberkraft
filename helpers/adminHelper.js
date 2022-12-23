const Product = require('../models/productSchema')
const Admin = require('../models/adminSchema')



module.exports={

    addproduct:(product,filename)=>{

        return new Promise((resolve, reject) => {
    
        
            
            const item = new Product({
            
                productTitle:product.title,
                description:product.description,
                price:product.price,
                image:filename,
                category:product.category

                
                

            })

            item.save().then((data)=>{
                console.log(data)
                
                resolve({added:true})
            })


        })
            
       
    },

    adminlogin:(data)=>{
        return new Promise((resolve, reject) => {
            Admin.findOne({uname:data.email}).then((valid)=>{
                if(valid)
                {
                    if(valid.password == data.password)
                    {
                        resolve({adminlogin:true})
                    }
                    else
                    {
                        resolve({adminlogin:false})
                    }
                }
                else
                {
                    resolve({adminlogin:false})
                }
            })

             
            
        })

    }
}