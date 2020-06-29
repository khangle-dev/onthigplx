app.controller("resetCtrl", function ($scope) {
    $scope.reset = function () {
        localStorage.clear();
        toastr.success("Khôi phục dữ liệu thành công!");
        window.location = "#!index";
    }
});