
    let hashes = window.location.hash;

    var unvisit = function (){
        unvisited = document.getElementsByClassName("visited");
        for (var x = 0; x < unvisit.length; x++) {
            unvisit[x].classList.remove("visited");
    };


    const stylepics = document.getElementById('styleid');
    var stylefunc = function stylefunction() {
        unvisit ();
        var visit = document.getElementById('styleid');
        visit.classList.add("visited");
        var elements = document.getElementsByClassName("item");
        for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("hidden");
    }
        var classes = ['gr', 'pg', 'pr', 'web']
        for (var j = 0; j < classes.length; j++) {
        var stylefunc = document.getElementsByClassName(classes[j]);
        console.log(stylefunc);
        for (var i = 0; i < stylefunc.length; i++) {
            stylefunc[i].classList.add("hidden");
        }
        
        var elements = document.getElementsByClassName("style");
        for (var z = 0; z < elements.length; z++) {
        elements[z].classList.remove("hidden");
        }
        }
    };

    const prpics = document.getElementById('prid');
    var prfunction = function buttonpr() {
        var unvisit = document.getElementsByClassName("visited");
        for (var x = 0; x < unvisit.length; x++) {
            unvisit[x].classList.remove("visited");
    }
        var visit = document.getElementById('prid');
        visit.classList.add("visited");
        var elements = document.getElementsByClassName("item");
        for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("hidden");
    }
        var classes = ['gr', 'pg', 'style', 'web']
        for (var j = 0; j < classes.length; j++) {
        var stylefunc = document.getElementsByClassName(classes[j]);
        console.log(stylefunc);
        for (var i = 0; i < stylefunc.length; i++) {
            stylefunc[i].classList.add("hidden");
        }
        
        var elements = document.getElementsByClassName("pr");
        for (var z = 0; z < elements.length; z++) {
        elements[z].classList.remove("hidden");
        }
        }
    };

    const pgpics = document.getElementById('pgid');
    var pgfunction = function buttonpg() {

        var unvisit = document.getElementsByClassName("visited");
        for (var x = 0; x < unvisit.length; x++) {
            unvisit[x].classList.remove("visited");
    }
        var visit = document.getElementById('pgid');
        visit.classList.add("visited");

        var elements = document.getElementsByClassName("item");
        for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("hidden");
    }
        var classes = ['gr', 'pr', 'style', 'web']
        for (var j = 0; j < classes.length; j++) {
        var stylefunc = document.getElementsByClassName(classes[j]);
        console.log(stylefunc);
        for (var i = 0; i < stylefunc.length; i++) {
            stylefunc[i].classList.add("hidden");
        }
        
            var elements = document.getElementsByClassName("pg");
            for (var z = 0; z < elements.length; z++) {
            elements[z].classList.remove("hidden");
        }
        
        }
    };



        const grpics = document.getElementById('grid');
        var grfunction = function buttongr() {
        
        var unvisit = document.getElementsByClassName("visited");
            for (var x = 0; x < unvisit.length; x++) {
                unvisit[x].classList.remove("visited");
        }
        var visit = document.getElementById('grid');
        visit.classList.add("visited");

        var elements = document.getElementsByClassName("item");
        
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove("hidden");
        }
            var classes = ['pg', 'pr', 'style', 'web']
            for (var j = 0; j < classes.length; j++) {
        var stylefunc = document.getElementsByClassName(classes[j]);
        console.log(stylefunc);
            for (var i = 0; i < stylefunc.length; i++) {
                stylefunc[i].classList.add("hidden");
            }
            
            var elements = document.getElementsByClassName("gr");
            for (var z = 0; z < elements.length; z++) {
            elements[z].classList.remove("hidden");
            }
        
        }
    };



        const webpics = document.getElementById('webid');
        var webfunction = function buttonweb() {
        
        var unvisit = document.getElementsByClassName("visited");
            for (var x = 0; x < unvisit.length; x++) {
                unvisit[x].classList.remove("visited");
        }
        var visit = document.getElementById('webid');
        visit.classList.add("visited");


        var elements = document.getElementsByClassName("item");
        
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove("hidden");
        }
            var classes = ['pg', 'pr', 'style', 'gr']
            for (var j = 0; j < classes.length; j++) {
        var stylefunc = document.getElementsByClassName(classes[j]);
        console.log(stylefunc);
            for (var i = 0; i < stylefunc.length; i++) {
                stylefunc[i].classList.add("hidden");
            }
            var elements = document.getElementsByClassName("web");
            for (var z = 0; z < elements.length; z++) {
            elements[z].classList.remove("hidden");
            }
        
        }
    };

    
    const ptpics = document.getElementById('ptid');
        var projectsfunction = function buttonprojects () {
            var unvisit = document.getElementsByClassName("visited");
            for (var x = 0; x < unvisit.length; x++) {
                unvisit[x].classList.remove("visited"); 
        }
        var visit = document.getElementById('ptid');
        visit.classList.add("visited");
        var elements = document.getElementsByClassName("item");
        
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove("hidden");
        }
    };

    stylepics.addEventListener('click', stylefunc);
    webpics.addEventListener('click', webfunction);
    prpics.addEventListener('click', prfunction);
    pgpics.addEventListener('click', pgfunction);
    grpics.addEventListener('click', grfunction);
    ptpics.addEventListener('click', projectsfunction);

    document.addEventListener('DOMContentLoaded', function() {
        if (hashes == '#style') {
            stylefunc();
        } else if (hashes == '#presentation') {
            prfunction();            
        } else if (hashes == '#polygraphy') {
            pgfunction();
        } else if (hashes == '#web'){
            webfunction();
        } else if (hashes == '#graphics'){
            grfunction();
        } else {
            projectsfunction();
        }
    });

    


    


    
