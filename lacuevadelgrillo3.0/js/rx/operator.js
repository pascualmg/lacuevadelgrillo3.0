


console.clear();
console.log('cuenco power');

// {...0...9...8...7...6...5...4..3....2..1}
const foo$ = Rx.Observable.interval(500);
let bar$;

//filter esto filtraria solo los pares
// filter(predicate) -> predictate => v % 2 ;

bar$ = foo$
.filter(v => v%2)
// {...1...3....5...7..}


//take , devuelve los X primeros numeros de la secuencia.



