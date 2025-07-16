class HomeController {
  index(req,resp){
    resp.json({
      testeJson: true,
    })
  }
}

export default new HomeController();
