app.controller("listDangerCtrl", function ($scope) {
    $scope.list = [];
    for (var i = 0; i < 600; i++) {
        if (isDanger(i)) {
            $scope.list.push(fullQuestions[i]);
        }
    }

    $scope.getResultClass = function (answer) {
        if (answer.correct) {
            return "correct";
        } else {
            return "";
        }
    }
});