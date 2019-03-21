// const User = require("../models/User");
// const Stuff  = require("../models/Stuff");

// const stuffController = {
//   index: (req, res) => {
//     User.findById(req.params.userId)
//       .populate("myStuff")
//       .then((user)=> {
//         // res.render("planner/index", {
//         //   user
          
//         // });
//         res.send(user)
//       });
//   },
//   new: (req, res) => {
//     // res.render("planner/new", {
//     //     userId: req.params.userId,
        
//     // });
//     res.send('new page')
//   },
//   create: (req, res) => {
//     User.findById(req.params.userId)
//     .then(user => {
//       Stuff.create({
//         name: req.body.name,
//         description: req.body.description
        
//       }).then(stuff=> {
//         console.log(req.body)
//         user.myStuff.push(stuff);
//         user.save();
//         res.send(user)
//         // res.redirect(`/users/${req.params.userId}/stuff`);
//       });

//       //     .then(()=>res.redirect(`/users/${req.params.userId}/events`,{
//       //     userId: req.params.userId,
//       //     eventId: req.params.eventId
//       //     }))
//     });
//   },

//   show: (req, res) => {
//         let{userId, stuffId}=req.params
//         User.findById(userId).then(user =>{
        
//         //    res.render('planner/show',{stuff})
//             res.send(user)
//     })
//   },
//   edit: (req, res) => {
//       let{userId, stuffId}=req.params
      
//     Stuff.findById(stuffId).then(stuff => {
//     //   res.render("planner/edit", {
//     //     event,
//     //     userId: req.params.userId,
//     //     eventId: req.params.eventId
//     //   });
//     res.send(stuff)
//     });
//   },
//   update: (req, res) => {
//       let {userId, stuffId}=req.params
//    Stuff.findByIdAndUpdate(
//       stuffId
//     ).then(updatedStuff => {
//       updatedStuff.save();
//       res.send(updatedStuff + "fhj")
//     });
//   },

//   delete: (req, res) => {
//    Stuff.findByIdAndDelete(req.params.stuffId).then(() => {
//       console.log("deleted stuff");
//       res.redirect(`/users/${req.params.userId}/stuff`);
//     });
//   }
// };

// module.exports = stuffController;
