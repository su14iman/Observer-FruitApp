// Run: `tsc src/index.ts && node src/index.js` || `bun start`
// Author: Sulaiman Sulaiman <s.su14iman@gmail.com>
// Date: 16.03.2024
// Aufgabe: Observer Pattern - https://hhek-bonn.lms.schulon.org/mod/assign/view.php?id=85787

import ObservableFruit from "./observableFruit";
import ObserverPirate from "./observerPirate";


const observableFruit = new ObservableFruit(); // Observable initalisieren

const pirateOne = new ObserverPirate("Nami", "Zoan", observableFruit); // Observer initalisieren
const pirateTwo = new ObserverPirate("Sanji", "Devil_Fruit", observableFruit); // Observer initalisieren
const pirateThree = new ObserverPirate("Nico Robin", "Paramecia", observableFruit); // Observer initalisieren
const pirateFour = new ObserverPirate("Jinbe", "Logia", observableFruit); // Observer initalisieren


observableFruit.addObserver(pirateOne); // Observer zu Observable hinzugefügt
observableFruit.addObserver(pirateTwo); // Observer zu Observable hinzugefügt
observableFruit.addObserver(pirateThree); // Observer zu Observable hinzugefügt
observableFruit.addObserver(pirateFour); // Observer zu Observable hinzugefügt

observableFruit.addFruit("Logia"); // Frucht hinzugefügt
observableFruit.addFruit("Paramecia"); // Frucht hinzugefügt
observableFruit.addFruit("Zoan"); // Frucht hinzugefügt

observableFruit.notifyObservers(); // Observers benachrichtigen
