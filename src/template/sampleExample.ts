// here is a simple example of the observer pattern.

/**
 * interface for the observer
 */
interface IObserver{
    /**
     * Method to update the observer
     * 
     * @returns {void}
     */
    update(): void;
}

/**
 * interface for the observable
 */
interface IObservable{
    /**
     * Method to add an observer
     * 
     * @param observer - observer to be added
     * @returns {void}
     */
    add(observer: IObserver): void;
    /**
     * Method to remove an observer
     * 
     * @param observer - observer to be removed
     * @returns {void}
     */
    remove(observer: IObserver): void;
    /**
     * Method to notify the observers
     * 
     * @returns {void}
     */
    notify(): void;
    /**
     * Method to say hello
     * 
     * @returns {string}
     */
    sayHello(): string;
}

/**
 * class for the observable
 */
class Observable implements IObservable{
    /**
     * @param {IObserver[]} observers - Array for the observers
     */
    private observers: IObserver[] = [];

    /**
     * Method to add an observer
     * 
     * @param {IObserver} observer - observer to be added
     * @returns {void}
     */
    public add(observer: IObserver): void{
        this.observers.push(observer);
    }

    /**
     * Method to remove an observer
     * 
     * @param {IObserver} observer - observer to be removed
     * @returns {void}
     */
    public remove(observer: IObserver): void{
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    /**
     * Method to notify the observers
     * 
     * @returns {void}
     */
    public notify(): void{
        this.observers.forEach(observer => observer.update());
    }

    /**
     * Method to say hello
     * 
     * @returns {string}
     */
    public sayHello(): string {
        return "Hello World!";
    }
}

/**
 * class for the observer
 */
class observer implements IObserver{
    /**
     * @param {string} name - name of the observer
     */
    private name: string;
    /**
     * @param {IObservable} observable - observable
     */
    private observable: IObservable; // observable
    /**
     * Constructor
     * 
     * @param {string} name 
     * @param {IObservable} observable 
     */
    public constructor(name: string, observable: IObservable){
        this.name = name;
        this.observable = observable;
    }
    /**
     * Method to update the observer
     * 
     * @returns {void}
     */
    update(): void{
        console.log(`${this.name}: ${this.observable.sayHello()}`);
    }
}



const observable = new Observable(); // create an observable
const observerA = new observer("A",observable); // create an observer
const observerB = new observer("B", observable); // create an observer

observable.add(observerA); // add the observer to the observable
observable.add(observerB); // add the observer to the observable

observable.notify(); // notify the observers