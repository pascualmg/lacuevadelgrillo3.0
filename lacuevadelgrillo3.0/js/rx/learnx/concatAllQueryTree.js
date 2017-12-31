
/*
Exercise 12: Retrieve id, title, and a 150x200 box art url for every video
You've managed to flatten a tree that's two levels deep, let's try for three!
 Let's say that instead of a single boxart url on each video, we had a collection of boxart objects
 , each with a different size and url. Create a query that selects {id, title, boxart} for every video in
 the movieLists. This time though, the boxart property in the result will be the url of the boxart object with
 dimensions of 150x200px. Let's see if you can solve this problem with map(), concatAll(), and filter().
There's just more one thing: you can't use indexers. In other words, this is illegal:
var itemInArray = movieLists[0];
Furthermore, you're not allowed to use indexers in any of the remaining exercises unless you're implementing one of the five functions. There is a very good reason for this restriction, and that reason will eventually be explained. For now, you'll simply have to accept it on faith that this restriction serves a purpose. :-)
 */
function ejercicio12() {
    Array.prototype.concatAll = function () {
        var results = [];
        this.forEach(function (subArray) {
            // ------------ INSERT CODE HERE! ----------------------------
            // Add all the items in each subArray to the results array.
            // ------------ INSERT CODE HERE! ----------------------------
            subArray.videos.forEach(
                function (item) {
                    results.push(item);
                }
            );
        });

        return results;
    };
    var movieLists = [
        {
            name: "Instant Queue",
            videos : [
                {
                    "id": 70111470,
                    "title": "Die Hard",
                    "boxarts": [
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 654356453,
                    "title": "Bad Boys",
                    "boxarts": [
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{ id: 432534, time: 65876586 }]
                }
            ]
        },
        {
            name: "New Releases",
            videos: [
                {
                    "id": 65432445,
                    "title": "The Chamber",
                    "boxarts": [
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 675465,
                    "title": "Fracture",
                    "boxarts": [
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
                        { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{ id: 432534, time: 65876586 }]
                }
            ]
        }
    ];


    // Use one or more map, concatAll, and filter calls to create an array with the following items
    // [
    //	 {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
    //	 {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
    //	 {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
    //	 {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
    // ];

    return movieLists.concatAll() // Complete this expression!

}

/*
concatAll is a very simple function, so much so that it may not be obvious yet how it can be combined with map() to query a tree. Let's try an example...
Exercise 11: Use map() and concatAll() to project and flatten the movieLists into an array of video ids
Hint: use two nested calls to map() and one call to concatAll().
*/
function ejercicio11() {

    Array.prototype.concatAll = function () {
        var results = [];
        this.forEach(function (subArray) {
            // ------------ INSERT CODE HERE! ----------------------------
            // Add all the items in each subArray to the results array.
            // ------------ INSERT CODE HERE! ----------------------------
            subArray.forEach(
                function (item) {
                    results.push(item);
                }
            );
        });

        return results;
    };

    console.log('sobreescrita la contactAll de Array ', Array.prototype.concatAll);


    var movieLists = [
        {
            name: "New Releases",
            videos: [
                {
                    "id": 70111470,
                    "title": "Die Hard",
                    "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 654356453,
                    "title": "Bad Boys",
                    "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{id: 432534, time: 65876586}]
                }
            ]
        },
        {
            name: "Dramas",
            videos: [
                {
                    "id": 65432445,
                    "title": "The Chamber",
                    "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 675465,
                    "title": "Fracture",
                    "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{id: 432534, time: 65876586}]
                }
            ]
        }
    ];

    return movieLists
        .map(function (item) {
            return item.videos.map(
                function (video) {
                    return video.id;
                }
            );
        })
        .concatAll()
        ;
};


/* Ejercicio 10 ,about concatAll(),  si tenemos un tree ( treeFoo que no es más que un array de más de 2 dimensiones ...
   implementamos una concatAll , que se usa para obtener un array unidimensional sobre el que
   sí que podamos aplicar las funciones como map, filter y analogas.

    Vamos a  sobrescribir los metodos con con el prototype de la clase array concatAll y filter
 */
function ejercicio10() {
    console.clear();

    var treeFoo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

    /**
     * Override de la built-in, dado un arrFoo
     * @returns {Array}
     */
    Array.prototype.miConcatAll = function () {
        var results = [];
        this.forEach(
            function (subArray) {
                subArray.forEach(
                    function (item) {
                        results.push(item);
                    }
                );
            }
        );
        return results;
    };

    Array.prototype.miFilter = function (predicateFunction) {
        var results = [];

        this.forEach(
            function (item) {
                if (predicateFunction(item)) {
                    results.push(item);
                }
            }
        );
        return results;
    };

    Array.prototype.miMap = function (projectionFunction) {
        var results = [];

        this.forEach
        (
            function (item) {
                results.push(projectionFunction(item));
            }
        );
        return results;
    };

    /**
     * predicate Function, para fistros
     * @param item
     * @returns {boolean}
     */
    function losMenoresDeCinco(item) {
        return item < 5;
    };

    /**
     * projection Function, para los mapeos.
     * @param item
     * @returns {string}
     */
    function toHumanWords(item) {
        var numberName = [
            'cero',
            'uno',
            'dos',
            'tres',
            'cuatro',
            'cinco',
            'seis',
            'siete',
            'ocho',
            'nueve'
        ];
        return numberName[item];
    };

    console.log('Ejercicio 10 learnRx')
    console.log('si tenemos el tree ', treeFoo);
    console.log('cuando aplicamos treefoo.concatAll() obtenemos un array con los ids', treeFoo.miConcatAll());
    console.log('esto lo podemos filtrar', treeFoo.miConcatAll().miFilter(losMenoresDeCinco));
    console.log('y luego lo podemos mapear o lo que haga falta...',
        treeFoo
            .miConcatAll()
            .miFilter(losMenoresDeCinco)
            .miMap(toHumanWords)
    );

}

//funcion del ejercicio 9, con un foreach
function ejercicio09() {
    var movieLists = [
            {
                name: "New Releases",
                videos: [
                    {
                        "id": 70111470,
                        "title": "Die Hard",
                        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 4.0,
                        "bookmark": []
                    },
                    {
                        "id": 654356453,
                        "title": "Bad Boys",
                        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 5.0,
                        "bookmark": [{id: 432534, time: 65876586}]
                    }
                ]
            },
            {
                name: "Dramas",
                videos: [
                    {
                        "id": 65432445,
                        "title": "The Chamber",
                        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 4.0,
                        "bookmark": []
                    },
                    {
                        "id": 675465,
                        "title": "Fracture",
                        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 5.0,
                        "bookmark": [{id: 432534, time: 65876586}]
                    }
                ]
            }
        ],
        allVideoIdsInMovieLists = [];

    // ------------   INSERT CODE HERE!  -----------------------------------
    // Use two nested forEach loops to flatten the movieLists into a list of
    // video ids.
    // ------------   INSERT CODE HERE!  -----------------------------------

    movieLists.forEach(
        function (movieListsItem) {
            movieListsItem.videos.forEach(
                function (video) {
                    allVideoIdsInMovieLists.push(video.id);
                }
            )
        }
    );
    return allVideoIdsInMovieLists;
}
