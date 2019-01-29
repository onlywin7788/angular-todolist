// Code goes here

  var app = angular.module('todo', []);

  app.controller('TodoCtrl', function ($scope){
    $scope.todos = [
      {
        id : 1,
        title : 'study angualrjs',
        completed : false,
        createdAt : Date.now()
      },
      {
        id : 2,
        title : 'study ionic framework',
        completed : false,
        createdAt : Date.now()
      },
      {
        id : 3,
        title : 'study electron framework',
        completed : true,
        createdAt : Date.now()
      }
    ];


    $scope.remove = function(todo) {

      var idx = $scope.todos.findIndex(function(item) {
        return item.id = todo.id;
      });

      if(idx > -1){
        $scope.todos.splice(idx, 1)
      }
    }

    $scope.add = function (newTodoTitle){
      var newTodo = {
        title : newTodoTitle,
        completed : false,
        createdAt : Date.now()
      };

      $scope.todos.push(newTodo);

      // empty form
      $scope.newTodoTitle = "";

    }

  });

  app.directive('todoTitle', function ()
  {
    return{
      template : '<h3>TODO LIST</h3>'
    }
  });

  app.directive('todoItem', function ()
  {
    return{
      templateUrl : 'todolist/todoitem.template.html'

    }
  });
