app.controller("listWrongCtrl", function ($scope) {
    $scope.list = [];
    for (var i = 0; i < 450; i++) {
        if (hasAnswered(i) && isAnsweredWrong(i)) {
            $scope.list.push(fullQuestions[i]);
        }
    }

    $scope.hasChecked = function (questionIndex, answerIndex) {
        return isAnswered(questionIndex, answerIndex);
    }

    $scope.getResultClass = function (questionIndex, answerIndex, answer) {
        if (answer.correct) {
            return "correct";
        } else if (isAnswered(questionIndex, answerIndex)) {
            return "wrong";
        } else {
            return "";
        }
    }
});