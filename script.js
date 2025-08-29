// Warte bis die Seite geladen ist
document.addEventListener('DOMContentLoaded', function() {
    
    // Button und Output-Element finden
    const magicButton = document.getElementById('magic-button');
    const output = document.getElementById('output');
    
    // Array mit verschiedenen Nachrichten
    const messages = [
        "🎉 Herzlichen Glückwunsch! Du hast JavaScript gemeistert!",
        "🌟 Du bist ein wahrer Programmierer!",
        "🚀 Weiter so - du machst großartige Fortschritte!",
        "💡 Coding macht Spaß, oder?",
        "🏆 Du rockst diese Website!",
        "🎯 Perfekt! Du verstehst es!",
        "⚡ Wow, das war schnell geklickt!"
    ];
    
    // Counter für Klicks
    let clickCount = 0;
    
    // Klick-Event für den Button
    magicButton.addEventListener('click', function() {
        clickCount++;
        
        // Zufällige Nachricht auswählen
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        // Output-Text setzen
        output.innerHTML = `
            <h3>🎊 Button wurde ${clickCount}x geklickt!</h3>
            <p>${randomMessage}</p>
            <small>Klick weiter für mehr Überraschungen!</small>
        `;
        
        // Output anzeigen
        output.classList.add('show');
        
        // Button-Text ändern
        if (clickCount === 1) {
            magicButton.textContent = "🔥 Noch einmal!";
        } else if (clickCount >= 5) {
            magicButton.textContent = "🏆 Du bist Champion!";
        }
        
        // Kleine Animation für den Button
        magicButton.style.transform = 'scale(0.95)';
        setTimeout(() => {
            magicButton.style.transform = 'scale(1)';
        }, 100);
    });
    
    // Willkommensnachricht in der Konsole
    console.log("🎉 Website erfolgreich geladen!");
    console.log("💡 Tipp: Öffne die Browser-Entwicklertools (F12) zum Experimentieren!");
});

// Zusätzliche Funktion für Bonus-Aufgaben
function showAlert() {
    alert("Das ist eine Alert-Box! Du kannst sie für deine eigenen Funktionen verwenden.");
}

// Funktion um die aktuelle Zeit zu zeigen
function showCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('de-DE');
    return `Aktuelle Zeit: ${timeString}`;
}