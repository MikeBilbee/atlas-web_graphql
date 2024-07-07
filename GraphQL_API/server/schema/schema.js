const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLID, GraphQLList, GraphQLNonNull } = require('graphql');
const lodash = require('lodash');
const Project = require('../models/project');
const Task = require('../models/task');

const TaskType = new GraphQLObjectType({
  name: 'Task',
    fields: () => ({
      id: { type: GraphQLID },
      title: { type: GraphQLString },
      weight: { type: GraphQLInt },
      description: { type: GraphQLString },
      project: {
        type: ProjectType,
        resolve(parent, args) {
          return Project.find({ 'id': parent.projectId })
        }
      }
    })
  });

const ProjectType = new GraphQLObjectType({
  name: 'Project',
    fields: () => ({
      id: { type: GraphQLID },
      title: { type: GraphQLString },
      weight: { type: GraphQLInt },
      description: { type: GraphQLString },
      tasks: {
        type: new GraphQLList(TaskType),
        resolve(parent, args) {
          return Task.find({ 'projectId': parent.id });
        }
      }
    })
  });

  const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    task: {
      type: TaskType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Task.find({ 'id': args.id });
      }
    },
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Project.find({ 'id': args.id });
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addProject: {
      type: ProjectType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        weight: { type: new GraphQLNonNull(GraphQLInt) },
        description: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        const newProject = new Project({
          title: args.title,
          weight: args.weight,
          description: args.description
        });
        return newProject.save();
      }
    },
    addTask: {
      type: TaskType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        weight: { type: new GraphQLNonNull(GraphQLInt) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        projectId: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        const newTask = new Task({
          title: args.title,
          weight: args.weight,
          description: args.description,
          projectId: args.projectId
        });
        return newTask.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation: Mutation
});
