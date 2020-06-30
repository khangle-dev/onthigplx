app.controller("signsCtrl", function ($scope) {
    $scope.signType = getParaCurr("signType");
    $scope.signs = fullSigns.filter(function(sign){return sign.signType == $scope.signType})
    $scope.signTopic = signTopics.filter(function(topic){return topic.signType == $scope.signType})[0]
    load(0);

    function load(index) {
        $scope.index = index;
        $scope.sign = $scope.signs[index]
    }

    $scope.nextQuestion = function() {
        var index = $scope.index;
        index ++;
        if (index > $scope.signs.length - 1) index = 0;
        load(index);
    }

    $scope.prevQuestion = function() {
        var index = $scope.index;
        index --;
        if (index < 0) index = $scope.signs.length - 1;
        load(index);
    }
});