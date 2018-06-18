# **Feedreader Test mit Jasmine**

Deutsch:

## Projektübersicht

In diesem Projekt erhalten Sie eine webbasierte Anwendung, die RSS-Feeds liest. Der ursprüngliche Entwickler dieser Anwendung erkannte deutlich den Wert beim Testen, sie haben bereits [Jasmine] (http://jasmine.github.io/) eingeschlossen und begannen sogar, ihre erste Testsuite zu schreiben! Leider haben sie sich dazu entschlossen, ihre eigene Firma zu gründen, und wir haben jetzt eine Anwendung mit einer unvollständigen Testsuite. Da kommst du rein.

## Schritte zum Ausführen
1. Laden Sie das Repo herunter.
2. Öffnen Sie index.html im Browser Ihrer Wahl.
3. Nach dem Laden sollten die Testergebnisse unten auf der Seite angezeigt werden.


## Was wird getestet?

### Allgemeiner Futtertest
1. Testen Sie, ob in der allFeed-Variable ein Wert vorhanden ist oder nicht.
2.Test wenn eine URL mit http / s: Anfrage.
3. Testen Sie, ob ein Name angegeben wurde.

### Teste das Menü
1. Beim Laden der Seitentests, wenn das Hamburgermenü ausgeblendet ist
2. Testet, ob das Hamburger-Menü nach dem Klicken erscheint.

### Teste den ersten Eintrag
1. Wenn nach dem asynchronen Laden mindestens ein Eintrag vorhanden ist.

### Ein neuer Feed-Auswahltest
1. Testeintrag Wählen Sie Änderungen im Menü.

## Lösungen, um den Test zu bestehen
1. Stellt sicher, dass eine URL definiert ist und dass die URL nicht leer ist.
2. Stellt sicher, dass ein Name definiert ist und der Name nicht leer ist.
3. Stellt sicher, dass das Menüelement standardmäßig ausgeblendet ist.
4. Stellen Sie sicher, dass das Menü beim Klicken angezeigt wird. Es verschwindet, wenn Sie erneut auf klicken
5. Schreiben Sie eine Testsuite namens "Initial Entries".
6. Wenn die loadFeed-Funktion aufgerufen wird und ihre Arbeit abgeschlossen ist, gibt es mindestens ein einzelnes .entry-Element im .feed-Container.
7. Stellt sicher, dass ein neuer Feed von der loadFeed-Funktion geladen wird, dass sich der Inhalt tatsächlich ändert.


English:

## Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

## Steps to Run
1. Download the repo.
2. Open index.html in the browser of your choice.
3. After loading, the test results should be displayed at the bottom of the page.


## What will be tested?

### General feed test
1.Test if there is a value in the allFeed variable or is it undefind.
2.Test if a url with http / s: request.
3.Test if a name has been specified.

### Test the menu
1. When loading the page tests if the hamburger menu is hidden
2. Tests if the hamburger menu appears after clicking.

### Test the first Entry
1. If there is at least one entry after asynchronous loading.

### A new Feed selection test
1. Test entry Select changes in the menu.

## Solutions to pass the test
1. Ensures it has a URL defined and that the URL is not empty.
2. Ensures it has a name defined and that the name is not empty.
3. Ensures the menu element is hidden by default. 
4. Make sure the menu is displayed when clicking, it will disappear when clicked again
5. Write a test suite named "Initial Entries".
6. Ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
7. Ensures when a new feed is loaded by the loadFeed function that the content actually changes.


