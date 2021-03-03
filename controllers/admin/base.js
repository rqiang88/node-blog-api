class BaseController {
   constructor() {
     this.index = this.index.bind(this);
     this.create = this.create.bind(this);
     this.show = this.show.bind(this);
     this.update = this.update.bind(this);
     this.destroy = this.destroy.bind(this);
   }

   get currentAdmin() {
     return { name: 'admin' };
   }

   async index(req, res) {}
   async create(req, res) {}
   async show(req, res) {}
   async update(req, res) {}
   async destroy(req, res) {}
}

module.exports = BaseController;
