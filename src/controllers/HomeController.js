class HomeController {
  index(req, resp) {
    resp.status(200).json({
      testeJson: true,
    });
  }
}

export default new HomeController();
