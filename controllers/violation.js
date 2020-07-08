app.controller("violationCtrl", function ($scope) {
    $scope.violationNo = getParaCurr("index")
    $scope.violation = fullViolations.filter(function(violation){
        return violation.no == $scope.violationNo
    })[0]

    $scope.list = fullViolations.filter(function(violation){
        return $scope.violation.relations.includes(violation.no) 
    })
});