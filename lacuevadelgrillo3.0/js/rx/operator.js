//Hay tipos de observables finitos e infinitos.



console.clear();
console.log('cuenco power');

// {...0...9...8...7...6...5...4..3....2..1}
const foo$ = Rx.Observable.interval(500);
let bar$;

//filter esto filtraria solo los pares
// filter(predicate) -> predictate => v % 2 ;

bar$ = foo$
.filter(v => v%2);
// {...1...3....5...7..}


//take , devuelve los X primeros numeros de la secuencia.
// bar$ = foo$.first(a => console.log(a));



//Operador disctinct().

console.log('disctinctUntilChanged');
bar$ = Rx.Observable
    .of('a','b','c','d','e')
    .distinctUntilChanged()
    .do(a => console.log(a))
;

//combinaciones concat.
console.clear();
// {...0..1..2..3...4}
let foo2$ = Rx.Observable
    .interval(500)
    .take(4);

let baz$ = Rx.Observable
    .of(4,5,6,7,8,9)
baz$ = Rx.Observable.concat(foo$,baz$);


//startwith{""cheduler, ...args_)
baz$ = foo$.startWith('hi', 'all')
    .do(a => console.log(a));

//zip . (...arg, {scheduler}
// Une secuencias como una cremallera , tan pronoto como tiene parejas. devuelve un array x, y o lo que devuelve a resultSelector (value,
//     recube un parametro ,  Termina tan pronto como uno de los observables o secuencias finaliza y hace una pareja )
// {0...1...2...3...4..}
// {4,4,5,5,6,7,6}

baz$ = Rx.Observable.zip(foo$, bar$)
    .do(a => console.log(a))
;

//merge([scheduler]), ...args)
// mezcla 2 o más se cuencias como un or en el sentido de que si una no emite y la otra si emite un valor.

//se puede utiliaar tanto foo.merge(bar) o el preferido Observable.merge(foo , barr)
// {...1...3....5...7..}

mergeSecuence$ =  Rx.Observable
    .merge(foo$,bar$)
    .do(a => console.log(a));


//CobineLatest(...args, [resultSelector]
//Mezcla los ultimos valores emitidos por dos o más secuencias.permite rfalizar una operación con los valorees (resultSelector),
// si nos se pasa la operacion, si no se le pasa operacion devuelve un array con los valores.

foo$.combineLatest(foo$,bar$);
Observable.combineLatest(foo$,bar$, (x,y) => x * y);



foo$ = Rx.Observable
    .interval(500)
    .zip(Rx.Observable.of('h','o','l','a','h'), (_,value) => value);

bar$ = Rx.Observable
    .interval(4500)
    .zip(Rx.Observable.of(1,0,1,0,1), (_,value) => value);

bar$ = foo$.withLatestFrom(
 bar$,
    (letter, toUP)
);

const observerA = bar$.subscribe(
 value => console.log(`next ${value}`),
    err => console.log(`err ${err}`),
    end => console.log(`fin`)
);


baz.subscribe(observerA);
