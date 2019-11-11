const moodsService = {

    getAllMoods(knex) {
        return knex
            .select('*')
            .from('moods')
            .orderBy('created', "desc")
    }, 
    
    addArticle(knex, newMood) {
        return knex
            .insert(newMood)
            .into('moods')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    }


}

module.export = moodsService