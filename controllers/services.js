import { service } from "../models/service.js"

function index(req, res) {
  // Find all services
  service.find({})
  // When we have all the services
  .then(services => {
    // Do something with the services
    res.render("services/index", {
      title: "🌮",
      services,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/services")
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  service.create(req.body)
  .then(service => {
    res.redirect("/services")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/services")
  })
}

function show(req, res) {
  service.findById(req.params.id)
  .populate("owner")
  .then(service => {
    res.render("services/show", {
      service,
      title: "🌮 show"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/services")
  })
}



function edit(req, res) {
  service.findById(req.params.id)
  .then(service => {
    res.render("services/edit", {
      title: "Edit 🌮",
      service,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/services")
  })
}

function update(req, res) {
  service.findById(req.params.id)
  .then(service => {
    if (service.owner.equals(req.user.profile._id)) {
      // the person that created the service is trying to edit the service
      service.updateOne(req.body, {new: true})
      .then(() => {
        res.redirect(`/services/${service._id}`)
      })
    } else {
      // the person that created the service is NOT the person trying to edit the service
      throw new Error ("🚫 Not Authorized! 🚫")
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect("/services")
  })
}

function deleteservice(req, res) {
  service.findById(req.params.id)
  .then(service => {
    if (service.owner.equals(req.user.profile._id)) {
      // the person that created the service is trying to delete the service
      service.delete()
      .then(() => {
        res.redirect("/services")
      })
    } else {
      // the person that created the service is NOT the person trying to delete the service
      throw new Error ("🚫 Not Authorized! 🚫")
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect("/services")
  })
}


export {
  index,
  create,
  show,
  edit,
  update,
  deleteservice as delete,
  //createReview,
}
