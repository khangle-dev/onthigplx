app.controller("listCtrl", function ($scope) {
    $scope.countChuaLam = 0;
    $scope.countDung = 0;
    $scope.countSai = 0;
    $scope.list = [];

    for (var i = 0; i < 600; i++) {
        var danger_css = isDanger(i) == true ? "danger" : ""
        var css_class = "" + danger_css;

        if (!hasAnswered(i)) {
            $scope.countChuaLam ++;
        } else if (isAnsweredWrong(i)) {
            $scope.countSai ++;
            css_class = "wrong" + danger_css;
        } else {
            $scope.countDung ++;
            css_class = "correct" + danger_css;
        }

        $scope.list.push({index: i, css_class: css_class});
    }
});