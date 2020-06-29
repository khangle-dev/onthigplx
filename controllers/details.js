app.controller("detailsCtrl", function ($scope) {
    saveDataFromQueryString();

    load();

    function load() {
        $scope.index = getCurrentQuestionIndex();
        $scope.question = questions[$scope.index];
        $scope.show_result = hasAnswered($scope.index);
    }

    $scope.getAnswerClass = function (answerIndex) {
        if (!$scope.show_result) {
            return "";
        }

        var answer = $scope.question.answers[answerIndex];
        if (answer.correct) {
            return "correct";
        } else if (isAnswered($scope.index, answerIndex)) {
            return "wrong";
        } else {
            return "";
        }
    };

    $scope.toggleAnswer = function (answerIndex) {
        toggleAnswer($scope.index, answerIndex);
    };

    $scope.isAnswered = function(answerIndex) {
        console.log(isAnswered($scope.index, answerIndex))
        return isAnswered($scope.index, answerIndex) == true ? "checked" : ""
    }

    $scope.nextQuestion = function() {
        var index = $scope.index;
        index ++;
        if (index > questions.length - 1) index = 0;

        localStorage.currentIndex = index;
        load();
    }

    $scope.prevQuestion = function() {
        var index = $scope.index;
        index --;
        if (index < 0) index = questions.length - 1;

        localStorage.currentIndex = index;
        load();
    }

    $scope.toggleResult = function () {
        $scope.show_result = !$scope.show_result;
    };

    function saveDataFromQueryString() {
        var index = getParaCurr("index");
        if (index != "") {
            db.set("currentIndex", index);
        }
    }
});