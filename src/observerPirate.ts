import { type IObservableFruit } from './observableFruit';

/**
 * Interface für die Implementierung eines Observers
 */
export interface IObserverPirate {
    /**
     * Name des Piraten
     * 
     * @type {string}
     */
    name: string;
    /**
     * Lieblingsfrucht des Piraten
     * 
     * @type {string}
     */
    favoriteFruit: string;
    /**
     * Methode zum Aktualisieren des Piraten
     * 
     * @returns {void}
     */
    update(): void;
    /**
     * Methode zum Essen der Lieblingsfrucht
     * 
     * @returns {void}
     */
    eat(): void;
}
/**
 * Klasse für die Implementierung eines Observers
 */
export default class ObserverPirate implements IObserverPirate {
    /**
     * @param {string} name - Name des Piraten
     */
    public name: string;
    /**
     * @param {string} favoriteFruit - Lieblingsfrucht des Piraten
     */
    public favoriteFruit: string;
    /**
     * @param {IObservableFruit} observable - Observable
     */
    private observable: IObservableFruit;
    /**
     * Constructor für die Klasse ObserverPirate
     * @param {string} name - Name des Piraten
     * @param {string} favoriteFruit - Lieblingsfrucht des Piraten
     * @param {IObservableFruit} observable - Observable
     */
    constructor(name: string, favoriteFruit: string, observable: IObservableFruit) {
        this.name = name;
        this.favoriteFruit = favoriteFruit;
        this.observable = observable;
    }
    /**
     * Methode zum Essen der Lieblingsfrucht
     * 
     * @returns {void}
     */
    public eat(): void {
        console.log(`${this.name}: Ich isse ${this.favoriteFruit}`);
        this.observable.removeFruit(this.favoriteFruit);
    }
    /**
     * Methode zum Aktualisieren des Piraten
     * 
     * @returns {void}
     */
    public update(): void {
        console.log(`${this.name}: Ich mag ${this.favoriteFruit}`);
        if(this.observable.getFruits().includes(this.favoriteFruit)){
            this.eat();
        }else{
            console.log(`${this.name}: Aber es gibt keine mehr`);
        }
    }
}