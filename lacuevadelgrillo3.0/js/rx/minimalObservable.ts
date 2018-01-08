//El objeto suscrito a la suscripción del producer.
interface Observer {
    next(value: any): void

    error(err: any): void

    complete(): void
}

//subscripcion al productor.
class Subscription {
    unsubscribe(): void { /*algo*/
    };
}


//productor
class Observable {
    constructor(subscribe: (observer: Observer) => Subscription) {
        /* algo */
    }

    subscribe(Observer): Subscription {

    }
}



