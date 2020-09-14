(function() {
    var toggleNav = function() {
        var collapseId = "top-navbar"
    
        document.getElementById(collapseId).classList.toggle("hidden");
        document.getElementById(collapseId).classList.toggle("block");
    };
    
    var toggleTargets = document.getElementsByClassName("toggleNav");

    Array.prototype.forEach.call(toggleTargets, function(target) {
        target.addEventListener("click", toggleNav, false);
    });
 })();