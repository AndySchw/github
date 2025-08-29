# 🚀 Git & GitHub Workshop

Willkommen zu unserem **Git und GitHub Workshop**! Heute lernst du Versionskontrolle mit einer kleinen Website als Übungsproject. 

## 📥 Repository herunterladen

```bash
git clone https://github.com/AndySchw/github.git
cd github

🎯 Aufgaben - Git & GitHub Workshop
Aufgabe 1: Repository klonen und Status prüfen 

 Repository mit git clone herunterladen
 Mit cd github in den Ordner wechseln
 Status mit git status prüfen
 Log mit git log --oneline anschauen
 Website kurz im Browser öffnen (nur zum Testen)

Aufgabe 2: Erste Änderungen und Git Add 

 Ändere deinen Namen in der index.html (Zeile mit "Mein Workshop-Projekt")
 Prüfe Status: git status (Was siehst du?)
 Füge Datei hinzu: git add index.html
 Status erneut prüfen: git status (Was hat sich geändert?)
 Unterschiede anzeigen: git diff (vor dem add) und git diff --cached (nach dem add)

Aufgabe 3: Committen lernen 

 Ersten Commit erstellen: git commit -m "Namen in Footer geändert"
 Log prüfen: git log --oneline (Siehst du deinen Commit?)
 Ändere die Hauptüberschrift in index.html
 Commit in einem Schritt: git commit -am "Überschrift angepasst"
 Log erneut prüfen

Aufgabe 4: Mit Remote Repository arbeiten 

 Remote Repository zeigen: git remote -v
 Änderungen hochladen: git push origin main
 Auf GitHub.com schauen: Sind deine Änderungen da?
 Weitere kleine Änderung machen (z.B. in CSS eine Farbe ändern)
 Gesamten Workflow üben: git add → git commit → git push

Aufgabe 5: Git History und Rückgängig machen 

 Commit History anschauen: git log --oneline
 Eine "schlechte" Änderung machen (z.B. Text löschen)
 Änderung rückgängig machen (vor commit): git checkout -- dateiname
 Alternative: Änderung committen, dann git reset --soft HEAD~1
 Status verstehen und aufräumen

Aufgabe 6: Branches kennenlernen 

 Neuen Branch erstellen: git checkout -b mein-experiment
 Aktuelle Branches zeigen: git branch
 Größere Änderung machen (HTML/CSS nach Lust und Laune)
 Änderungen committen
 Zurück zu main: git checkout main
 Unterschiede zwischen Branches im Browser anschauen
 Branch mergen: git merge mein-experiment
 Alles pushen: git push origin main

🆘 Git Hilfe Commands
bashgit status              # Was ist gerade los?
git log --oneline           # Commit History
git diff                    # Änderungen vor add
git diff --cached           # Änderungen nach add
git checkout -- datei.txt   # Änderung rückgängig
git reset --soft HEAD~1     # Letzten commit rückgängig


🎉 Bonus-Aufgaben (Git Advanced)

Erstelle einen zweiten Branch für Experimente
Lerne git stash zum temporären Speichern
Probiere git rebase für saubere History
Experimentiere mit .gitignore Dateien
Forke das Repository und mache Pull Requests

Das Ziel: Git und GitHub meistern 🚀
Die Website ist nur unser Spielplatz zum Üben!