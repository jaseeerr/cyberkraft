var express = require('express');

const userHelper = require('../helpers/userHelper')


module.exports = {

    homepage:(req,res)=>{

      if(req.session.user)
      {
        let name = req.session.name
        res.render('index',{name})
      }
      else
      {
        res.render('index')
      }
      
        
   
 
},

userlogin:(req,res)=>{

  

    let loginerr = req.session.loginerr
    let signup = req.session.signup
    req.session.loginerr = false
    req.session.signup = false

    if(loginerr)
    {
        res.render('login',{loginerr})
    }
    else if(signup)
    {
        res.render('login',{signup})
    }
    else
    {
        res.render('login')
    }
},

postuserlogin:(req,res)=>{
    console.log("REQ>BODY HEREEEEEEEEEEEEEEEEEEEEEEE");
    console.log(req.body);


    userHelper.forlogin(req.body).then((response)=>{
        
        if(response.login)
        {
            req.session.user = true
            req.session.name = response.name
            res.redirect('/')
        }
        else
        {
            req.session.loginerr = true
            req.session.user = false
            res.redirect('/login')
        }

    })
},

userlogout:(req,res)=>{

    req.session.user = false
    res.redirect('/')
},



       usersignup:(req,res)=>{
        let exphone = req.session.exphone
        let exemail = req.session.exemail
        req.session.exphone = false
        req.session.exemail = false

        if(exemail)
        {
            res.render('signup',{exemail})
        }
        else if(exphone)
        {
            res.render('signup',{exphone})
        }
        else
        {
            res.render('signup')
        }


        
    },



    postusersignup:(req,res)=>{
        
        console.log(req.body)
    
        userHelper.forsignup(req.body).then((response)=>{
            console.log("confirm kill")
            if(response.exemail)
            {
                req.session.exemail = true
                res.redirect('/signup')
            }
            else if(response.exphone)
            {
                req.session.exphone = true
                res.redirect('/signup')
            }
            else
            {
                req.session.signup = true
                res.redirect('/login')
            }
            
        })
        
    },

    userprofile:(req,res)=>{

   
        let name = req.session.name
        res.render('profile',{name})
  
   
}


}