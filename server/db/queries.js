const database = require("./knex");

module.exports = {
    list(){
        return database("snip")
    },
    read(id){
        return database("snip").where("id", id)
    },
    create(snip){
        return database("snip").insert(snip).returning('*') 
    },
    update(id, snip){
        return database("snip").where("id", id).update(snip, '*')
    },
    delete(id){
        return database("snip").where("id", id).delete()
    }
};
