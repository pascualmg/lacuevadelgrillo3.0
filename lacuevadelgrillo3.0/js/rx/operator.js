//Hay tipos de observables finitos e infinitos.

function transformacion_scan(){
    console.clear();
// Transformaciones

    const foo$ = Rx.Observable.of('h', 'e', 'l', 'l', 'o');
    const bar$ = Rx.Observable.interval(600).take(5);
    const baz$ = Rx.Observable.zip(foo$, bar$, (x, _) => x);
    let qux$;

//scan

//...1....3....4....5.....6... | a menos que una secuencia temrine
//no podriamos hacer un reduce.  scan seria un reducer temporal

//scan(accumulator: (acc , curr, idx, obs)) => amy, [seed]: any
//Acepta una funcion que usaqremos para transformar valores ,
//teniendo el anteror (modificado normalmente) y el actual.


//...{h}....{e}.....{l}....({o}|)

//...{h}....{he}.....{hel}....

    qux$ = baz$.scan( (acc, curr) => acc+curr );

    observer = {
        next(value) {console.log('next', value);},
        error(err) {console.log('error', err);},
        complete() {console.log('complete');},
    }

    qux$.subscribe(observer);
}


console.clear();
console.log('cuenco power');

/*
SCAN  .
Funciones de algo orden , las m''a importantes son la map filter y reduce
map  , funcion de projeccion
filterQ funcion de predicado
reduce i funcion con acumulador y valor actual de iteracion .

Diferencias entre may y filter y reduce.
Reduce , necesita conocer el valor de todos los elementos de la secuencia,

 */

//combinaciones .
const foo$ = Rx.Observable.of('h','e','l','o', 'w');
//h.e.l.o
const bar$ = Rx.Observable.interval(600);
//x...x....x....x.....x..
const baz$ = Rx.Observable.zip(foo$, bar$, (x, _ ) => x);

const col = [1,2,3,4,5,6,7,8,9];
const colTransformed = col.map(element => element *2);
console.log(colTransformed);

const colFiltered = col.filter(item => (item % 2));

col = [
    {id: 'x',otras:'foo'},
    {id: 'y',otras:'bar'},
    {id: 'z',otras:'baz'}
];

 const ReducedCol = col.reduce(
   function(acc, curr)  {
       //acc tiene la primera vez el valor inicial y el current el primer valor de la lista.
      return acc[curr.id] = cur.otras;
      //primera iteracion {'x': 'foo'}
       //segunda  iteracion {
       // 'x': 'foo',
       // 'y': 'bar',
       // }
   }
   ,{}
);

 const ReducedColInmutableInS5 = col.reduce(
   function(acc, curr)  {
       //es5 - inmutable.
       const elemento = {};
       elemento[curr.id]: curr.otras;
       const obj = Object.assign({}, acc, curr);
       return obj;
   }
   ,{}
);

 const ReducedColInmutableInS6 = col.reduce(
   function(acc, curr)  {
       const elemento {
          [curr.id]: curr.otras;
       }

       return{...acc, ...elemento};
   }
   ,{}
);




/////////////////////////////////////////////////////////////////////////////////////////////////////
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
    .do(a => console.log(a);


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
