myApp.controller('customerApiController', ['$scope', 'Api', function($scope, Api){
    $scope.form = {};
    $scope.customers = [];
        
    Api.Customer.query({}, function(data){
        $scope.customers = data;
    });
  
    $scope.delete = function(index){
        bootbox.confirm("Are you sure you want to delete this customer?", function(answer){
            if(answer == true){
                Api.Customer.delete({id: $scope.customers[index]._id}, function(data){
                    $scope.customers.splice(index, 1);
                    bootbox.alert('Customer Deleted');
                }); 
            }
        })
    }

        
    $scope.addToDatabase = function(){
        Api.Customer.save({}, $scope.form, function(){
            $scope.form = {};
        });
    }
}])

