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


const observerA = bar$.subscribe(
 value => console.log(`next ${value}`),
    err => console.log(`err ${err}`),
    end => console.log(`fin`)
);



