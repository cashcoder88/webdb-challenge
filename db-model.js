const db = require('./dbConfig.js');
const mappers = require('./mappers');


module.exports = {
    addProject,
    addAction,
    getProjects,
    remove,
    getActions,
    getProjectAction,
    get,
    getProjectActions

}


function addProject(project) {
    return db('projects')
    .insert(project, 'id')

} 

function getProjects() {
    return db('projects')
}

function getActions() {
    return db('actions')
}

function remove(id) {
    return db('projects')
      .where('id', id)
      .del();
}

function addAction(action) {
    return db('actions')
    .insert(action, 'id')
}

function getProjectAction(id) {
    return db('projects', 'actions')
    .where({id})
}

function get(id) {
    let query = db('projects as p');
  
    if (id) {
      query.where('p.id', id).first();
  
      const promises = [query, this.getProjectActions(id)]; // [ projects, actions ]
  
      return Promise.all(promises).then(function(results) {
        let [project, actions] = results;
  
        if (project) {
          project.actions = actions;
  
          return mappers.projectToBody(project);
        } else {
          return null;
        }
      });
    }
  
    return query.then(projects => {
      return projects.map(project => mappers.projectToBody(project));
    });
  }


  function getProjectActions(projectId) {
    return db('actions')
      .where('project_id', projectId)
      .then(actions => actions.map(action => mappers.actionToBody(action)));
  }
  
