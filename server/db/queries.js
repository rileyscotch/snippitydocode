const database = require("./knex");

module.exports = {
    list(){
        return database("snip")
    },
    read(id){
        return database("snip").where("id", id)
    },
    // read(id){
    //     return database('snip').innerJoin('snip', 'language.id', 'snip.language_id')
    //     // .where('snip.id', request.params.id)
    //     .where("id", id)
    // },
    create(snip){
        return database("snip").insert(snip).returning('*') 
    },
    update(id, snip){
        return database("snip").where("id", id).update(snip, '*')
    },
    delete(id){
        return database("snip").where("id", id).delete()
    },
    // createLang(snip){
    //     return database("language").insert(snip).returning('*') 
    // },
    // updateLang(id, snip){
    //     return database("language").where("id", id).update(language, '*')
    // },
    // deleteLang(id){
    //     return database("language").where("id", id).delete()
    // },
    // getLang(id){
    //     return database("language").where("id", id)
    // }
};
