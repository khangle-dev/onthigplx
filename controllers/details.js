app.controller("detailsCtrl", function ($scope) {
    saveDataFromQueryString();

    load();

    function load() {
        $scope.topic = getParaCurr("topic");
        $scope.index = getCurrentQuestionIndex();
        
        if ($scope.topic == "" || $scope.topic == "0") {
            $scope.question = fullQuestions[$scope.index];
        }else{
            $scope.question = fullQuestions.filter(function(question) {return question.topic == parseInt($scope.topic)})[$scope.index];
        }
        
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
        if (index > fullQuestions.length - 1) index = 0;

        localStorage.currentIndex = index;
        load();
    }

    $scope.prevQuestion = function() {
        var index = $scope.index;
        index --;
        if (index < 0) index = fullQuestions.length - 1;

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