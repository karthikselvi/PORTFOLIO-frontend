const router = require("express").Router();
const { Intro, About, Experience, Project, Course, Contact } = require('../models/portfolioModel')
const User = require("../models/userModel")
//get all portfolio data
router.get("/get-portfolio-data", async (req, res) => {
    try {
        const intros = await Intro.find();
        const abouts = await About.find();
        const experiences = await Experience.find();
        const projects = await Project.find();
        const courses = await Course.find();
        const contacts = await Contact.find();
        res.status(200).send({
            Intro: intros[0],
            About: abouts[0],
            Experience: experiences,
            Project: projects,
            Course: courses,
            Contact: contacts[0]
        })

    } catch (error) {
        res.status(500).send(error);
    }
});

// //update intro
// router.post("/update-intro", async (req, res) => {
//     try {
//         const intro = await Intro.findOneAndUpdate(
//             { _id: req.body._id },
//             req.body,
//             { new: true }
//         );
//         res.status(200).send({
//             data: intro,
//             success: true,
//             message: "Intro updated succesfully"
//         }
//         );
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

router.post("/update-About", async (req, res) => {
    try {
        const about = await About.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: about,
            success: true,
            message: "About updated succesfully"
        }
        );
    } catch (error) {
        res.status(500).send(error);
        //console.error(error)
    }
});
//add experience 

router.post("/add-experience", async (req, res) => {
    try {
        const experience = new Experience(req.body);
        await experience.save();
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience Added successfully",
        })
    } catch (error) {
        res.status(500).send(error)
    }
});

//update Experience
// router.post("/update-experience", async (req, res) => {
//     try {
//         const experience = await Experience.findOneAndUpdate(
//             { id: req.body._id },
//             req.body,
//             { new: true }
//         );
//         res.status(200).send({
//             data: experience,
//             success: true,
//             message: "Experience Updated Successfully",
//         })
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });
//delete Experience
router.post("/delete-experience", async (req, res) => {
    try {
        const experience = await Experience.findOneAndDelete({
            _id: req.body._id
        })
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience deleted  Successfully",
        })
    } catch (error) {
        res.status(500).send(error);
    }
});

//add Project
router.post("/add-project", async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(200).send({
            data: project,
            success: true,
            message: "Project added successfully"
        });

    } catch (error) {
        res.status(500).send(error)
    }
});
// //update project
// router.post("/update-project", async (res, req) => {
//     try {
//         const project = await Project.findOneAndUpdate(
//             {
//                 _id: req.body._id
//             },
//             req.body,
//             { new: true }
//         );
//         res.status(200).send(
//             {
//                 data: project,
//                 success: true,
//                 message: "project updated succesfully"
//             }
//         );
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });
//delete project
router.post("/delete-project", async (req, res) => {
    try {
        const project = await Project.findOneAndDelete({
            _id: req.body._id
        });
        res.status(200).send(
            {
                data: project,
                success: true,
                message: "project deleted succesfully"
            }
        );
    } catch (error) {
        res.status(500).send(error)
    }
});
//add Course
// add course
router.post("/add-course", async (req, res) => {
    try {
      const course = new Course(req.body);
      await course.save();
      res.status(200).send({
        data: course,
        success: true,
        message: "Course added successfully",
      });
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
//update course
router.post("/update-course", async (req, res) => {
    try {
        const course = await course.findOneAndUpdate(
            { id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: course,
            success: true,
            message: "Course Updated Successfully",
        })
    } catch (error) {
        res.status(500).send(error);
    }
});
//delete course
router.post("/delete-course", async (req, res) => {
    try {
        const course = await course.findOneAndDelete({
            _id: req.body._id
        })
        res.status(200).send({
            data: course,
            success: true,
            message: "Course deleted  Successfully",
        })
    } catch (error) {
        res.status(500).send(error);
    }
});
// update contact
router.post("/update-contact", async (req, res) => {
    try {
      const contact = await Contact.findOneAndUpdate(
        { _id: req.body._id },
        req.body,
        { new: true }
      );
      res.status(200).send({
        data: contact,
        success: true,
        message: "Contact updated successfully",
      });
    } catch (error) {
      res.status(500).send(error);
    }
  });
  //admin login 
router.post("/admin-login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username, password: req.body.password })
        if (user) {
            res.status(200).send({
                data: user,
                success: true,
                message: "Login successfully",
            })
        }
        else {
            res.status(200).send({
                data: user,
                success: false,
                message: "Invalid username or password"
            });
        }
    } catch (error) {
        res.status(500).send(error)
    }
})


module.exports = router