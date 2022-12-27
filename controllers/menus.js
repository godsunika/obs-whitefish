const Menu = require('../models').Menu;
var moment = require('moment');

module.exports = {

	create(req, res) { 
		return Menu
			.create({
					name      : req.body.name,
					created_at: moment().format('YYYY-MM-DD, HH:mm:ss'),
					updated_at: moment().format('YYYY-MM-DD, HH:mm:ss'),
			})
      .then(menu => res.status(201).send(menu))
      .catch(error => res.status(400).send(error));
	},

	update(req, res) {
    return Menu
      .find({
        where: {
          uid: req.params.menu_id,
        },
      })
      .then(menu => {
        if (!menu) {
          return res.status(404).send({
            message: 'Menu Not Found',
          });
        }

        return menu
          .update({
            name      : req.body.name || menu.name,
            updated_at: moment().format('YYYY-MM-DD, HH:mm:ss'),
          })
          .then(updatedMenu => res.status(200).send(updatedMenu))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

	destroy(req, res) {
    return Menu
      .find({
        where: {
          uid: req.params.menu_id,
        },
      })
      .then(menu => {
        if (!menu) {
          return res.status(404).send({
            message: 'Menu Not Found',
          });
        }

        return menu
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
}