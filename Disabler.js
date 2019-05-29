module.exports = (Model, options) => {
  if (options && ["relation", "model", "limited"].includes(options.type)) {
    const { type } = options;
    if (type === "relation" && "relation" in options) {
      const { relation } = options;
      Model.disableRemoteMethodByName(`prototype.__create__${relation}`);
      Model.disableRemoteMethodByName(`prototype.__delete__${relation}`);
      Model.disableRemoteMethodByName(`prototype.__findById__${relation}`);
      Model.disableRemoteMethodByName(`prototype.__updateById__${relation}`);
      Model.disableRemoteMethodByName(`prototype.__destroyById__${relation}`);
      Model.disableRemoteMethodByName(`prototype.__count__${relation}`);
      Model.disableRemoteMethodByName(`prototype.__update__${relation}`);
      Model.disableRemoteMethodByName(`prototype.__destroy__${relation}`);
    } else if (type === "model") {
      Model.disableRemoteMethodByName("upsert");
      Model.disableRemoteMethodByName("get");
      Model.disableRemoteMethodByName("create");
      Model.disableRemoteMethodByName("exists");
      Model.disableRemoteMethodByName("find");
      Model.disableRemoteMethodByName("findOne");
      Model.disableRemoteMethodByName("destroyById");
      Model.disableRemoteMethodByName("deleteById");
      Model.disableRemoteMethodByName("count");
      Model.disableRemoteMethodByName("updateAll");
      Model.disableRemoteMethodByName("prototype.updateAttributes");
      Model.disableRemoteMethodByName("createChangeStream");
      Model.disableRemoteMethodByName("replaceOrCreate");
      Model.disableRemoteMethodByName("patchOrCreate");
      Model.disableRemoteMethodByName("upsertWithWhere");
      Model.disableRemoteMethodByName("replaceById");
      Model.disableRemoteMethodByName("updateById");
      Model.disableRemoteMethodByName("findById");
    } else if (type === "limited") {
      Model.disableRemoteMethodByName("exists");
      Model.disableRemoteMethodByName("replaceById");
      Model.disableRemoteMethodByName("replaceOrCreate");
      Model.disableRemoteMethodByName("update");
      Model.disableRemoteMethodByName("upsert");
      Model.disableRemoteMethodByName("createChangeStream");
      Model.disableRemoteMethodByName("upsertWithWhere");
    }
  }
};
