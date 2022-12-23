const User = require('../models/userSchema')
const bcrypt = require('bcrypt')




module.exports={

    

    forsignup:(userdata)=>{
        
          
        return new Promise((resolve, reject) => {

           User.findOne({email:userdata.email}).then((echeck)=>{
            if(echeck)
            {
                resolve({exemail:true})
            }
            else
            {
                User.findOne({phone:userdata.phone}).then((pcheck)=>{
                    if(pcheck)
                    {
                        resolve({exphone:true})
                    }
                    else
                    {
                        bcrypt.hash(userdata.password,10).then((pass)=>{

                            const user = new User({
            
                            
                                uname:userdata.uname,
                                email:userdata.email,
                                phone:userdata.phone,
                                password:pass
                                
                
                            })
                
                            user.save().then(()=>{resolve({existinguser:false,pass:true})})
                        })
                    }
                })
            }
           })


           
            
            
        })
    },

    forlogin:(userdata)=>{
        return new Promise((resolve, reject) => {


            
            
            User.findOne({email:userdata.email}).then((echeck)=>{
                
                if(echeck!=null)
                {
                    
                    console.log(echeck)
                   
                    bcrypt.compare(userdata.password,echeck.password).then((pass)=>{
                      if(pass)
                      {
                        
                        let name = echeck.uname
                    
                        resolve({login:true,name})
                      }
                      else
                      {
                        resolve({login:false})
                      }
                    })
                }
                else
                { 
                
                    User.findOne({phone:userdata.email}).then((pcheck)=>{
                       
                        if(pcheck!=null)
                        {
                            bcrypt.compare(userdata.password,pcheck.password).then((pass)=>{
                                if(pass)
                                {
                                  let name = pcheck.uname
                                  resolve({login:true,name})
                                }
                                else
                                {
                                  resolve({login:false})
                                }
                              })
                        }
                        else
                        {
                            resolve({login:false})
                        }
                    })
                }
            })

           
           
        })
    },

    

   
}