function ejercicio11() {
    Array.prototype.concatAll = function ()
    {
        var result = [];

        this.forEach(
           function(item){
               item.forEach(
                  function (subItem) {
                     result.push(subItem.id);
                  }
               )
           }
        );
    }

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

    return movieLists.map(function (movieList) {
        console.log(movieList);
        console.log(movieList.videos);
        return movieList.videos.map(function (video) {
            return video.id;
        });
    }).concatAll();
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
