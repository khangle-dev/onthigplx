app.controller("listExamCtrl", function ($scope) {
    $scope.list = [];

    for (var i = 0; i < 15; i++) {
        var css_class = ""
        $scope.list.push({index: i, css_class: css_class});
    }
});