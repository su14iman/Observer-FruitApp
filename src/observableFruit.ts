import { type IObserverPirate } from './observerPirate';

/**
 * Interface für die Implementierung eines Observables
 */
export interface IObservableFruit {
    /**
     * Methode zum Hinzufügen eines Beobachters
     * 
     * @param {IObserverPirate} observer - Beobachter
     * @returns {void}
     */
    addObserver(observer: IObserverPirate): void;
    /**
     * Methode zum Entfernen eines Beobachters
     * 
     * @param {IObserverPirate} observer - Beobachter
     * @returns {void}
     */
    removeObserver(observer: IObserverPirate): void;
    /**
     * Methode zum Benachrichtigen der Beobachter
     * 
     * @returns {void}
     */
    notifyObservers(): void;
    /**
     * Methode zum Hinzufügen einer Frucht
     * 
     * @param {string} name - Name der Frucht
     * @returns {void}
     */
    addFruit(name: string): void;
    /**
     * Methode zum Entfernen einer Frucht
     * 
     * @param {string} name - Name der Frucht
     * @returns {void}
     */
    removeFruit(name: string): void;
    /**
     * Methode zum Abrufen der Früchte
     * 
     * @returns {string[]} - Array mit Früchten
     */
    getFruits(): string[];
}

/**
 * Klasse für die Implementierung eines Observables
 * */
export default class ObservableFruit implements IObservableFruit {
    /**
     * @param {IObserverPirate[]} observers - Array zum Speichern der Beobachter
     */
    private observers: IObserverPirate[] = [];
    /**
     * @param {string[]} fruits - Array zum Speichern der Früchte
     */
    private fruits: string[] = [];
    /**
     * Methode zum Hinzufügen eines Beobachters
     * 
     * @param {IObserverPirate} observer - Beobachter
     * @returns {void}
     */
    public addObserver(observer: IObserverPirate): void {
        this.observers.push(observer);
    }
    /**
     * Methode zum Entfernen eines Beobachters
     * 
     * @param {IObserverPirate} observer - Beobachter
     * @returns {void}
     */
    public removeObserver(observer: IObserverPirate): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    /**
     * Methode zum Benachrichtigen der Beobachter
     * 
     * @returns {void}
     */
    public notifyObservers(): void {
        this.observers.forEach(observer => observer.update());
    }
    /**
     * Methode zum Hinzufügen einer Frucht
     * 
     * @param {string} name - Name der Frucht
     * @returns {void}
     */
    public addFruit(name: string): void {
        this.fruits.push(name);
    }
    /**
     * Methode zum Entfernen einer Frucht
     * 
     * @param {string} name - Name der Frucht
     * @returns {void}
     */
    public removeFruit(name: string): void {
        this.fruits = this.fruits.filter(fruit => fruit !== name);
    }
    /**
     * Methode zum Abrufen der Früchte
     * 
     * @returns {string[]} - Array mit Früchten
     */
    public getFruits(): string[] {
        return this.fruits;
    }
}