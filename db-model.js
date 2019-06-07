const db = require('./dbConfig.js');


module.exports = {
    addProject,
    // addAction,
    getProjects
}


function addProject(project) {
    return db('projects')
    .insert(project, 'id')

} 

function getProjects() {
    return db('projects')
}
// function getDishes() {
//     return db('dishes');
// }

// function getRecipes() {
//     return db('recipes')
// }
// function getDishById(id) {
//     return db('cohorts')
//         .where( {id} )
//         .first();
// }

// // function findCohortStudentsById(cohort_id) {
// //     return db('students')
// //     .where({cohort_id})
// // }

// function addDish(dish) {
//     return db('cohorts')
//     .insert(dish, 'id')
// }

// function addRecipe(recipe) {
//     return db('recipes')
//     .insert(recipe, 'id')
// }