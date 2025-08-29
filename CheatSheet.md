# Git – Der knackige Praxis-Guide (mit Cheatsheet)

> **Ziel:** Dieses Markdown ist deine schnelle, aber vollständige Anleitung für Alltag mit Git – von Setup bis Branching, von Push/Pull bis „Huch, wie mach’ ich das rückgängig?“

---

## 1) Voraussetzungen

* **Git installiert** (Windows: Git for Windows, macOS: Xcode Command Line Tools oder Homebrew, Linux: Paketmanager)
* **GitHub-Account** vorhanden
* **Auth:** Entweder **HTTPS + Personal Access Token (PAT)** *oder* **SSH-Key** eingerichtet (empfohlen: SSH)

---

## 2) Identität konfigurieren

```bash
git config --global user.name "Dein Name"
git config --global user.email "deine@email.com"
```

> `--global` = gilt für alle Repos dieses Users. Ohne `--global` nur für das aktuelle Repo.

**Konfiguration anzeigen**

```bash
git config --list
```

**Tipp:** Editor & Standardbranch festlegen

```bash
git config --global core.editor "code --wait"   # VS Code als Editor
git config --global init.defaultBranch main        # neuer Standard-Branch: main
```

---

## 3) Neues Repo lokal erstellen & zu GitHub pushen

```bash
echo "# github" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
# Remote hinterlegen (Beispiel: dein Repo)
git remote add origin https://github.com/AndySchw/github.git
# oder per SSH: git remote add origin git@github.com:AndySchw/github.git

git push -u origin main
```

**Was passiert hier?**

* `git init`: leeres Git-Repo anlegen
* `git add`: Datei zum Commit vormerken (Index/Stage)
* `git commit`: Änderung festschreiben (lokal)
* `git branch -M main`: Branch umbenennen/erzwingen auf `main`
* `git remote add origin …`: Remote „origin“ setzen
* `git push -u origin main`: pushen **und** Upstream verknüpfen (später reicht `git push`)

---

## 4) Repo von GitHub klonen

```bash
git clone https://github.com/AndySchw/github.git
# oder: git clone git@github.com:AndySchw/github.git
cd github
```

---

## 5) Bereits vorhandenes lokales Projekt zu GitHub hochladen

```bash
git init
git add .
git commit -m "Initial"
git branch -M main
git remote add origin https://github.com/AndySchw/github.git
# oder: git remote add origin git@github.com:AndySchw/github.git

git push -u origin main
```

> **Achtung:** Wenn auf GitHub bereits Commits existieren, zuerst `git pull --rebase origin main` machen, Konflikte lösen und dann pushen.

---

## 6) Tägliche Essentials

**Status & Änderungen anschauen**

```bash
git status
```

**Änderungen kurz & knackig**

```bash
git log --oneline     # kompakte Historie
```

**Unterschiede anzeigen**

```bash
git diff              # unstaged Änderungen
git diff --staged     # was bereits gestaged ist
```

**Letzte Änderungen verwerfen (eine Datei)**

```bash
git checkout -- dateiname.txt     # (älter) – ersetzt Arbeitskopie durch HEAD-Version
# moderner (empfohlen):
git restore dateiname.txt          # verwirft unstaged Änderungen
```

**Datei vom Index nehmen (aber in der Arbeitskopie behalten)**

```bash
git restore --staged dateiname.txt
```

---

## 7) Branching & Merging

**Neuen Branch erstellen & wechseln**

```bash
git checkout -b feature/neuer-branch-name
# moderner (äquivalent):
git switch -c feature/neuer-branch-name
```

**Zurück zum Main wechseln**

```bash
git checkout main
# moderner:
git switch main
```

**Branch pushen (erstmalig)**

```bash
git push -u origin feature/neuer-branch-name
```

**Merge in main** (lokal)

```bash
git switch main
git pull               # first: main aktualisieren
git merge feature/neuer-branch-name
# Konflikte lösen, committen, dann pushen:
git push
```

> **Tipp:** Auf GitHub per Pull Request mergen = Code Review + CI nutzen.

---

## 8) Pull, Fetch, Rebase – was ist was?

* `git fetch`: holt **nur** neue Daten/Refs, ändert **nicht** deinen Arbeitsstand
* `git pull`: `fetch` **+** anschließend `merge` (Standard)
* `git pull --rebase`: `fetch` **+** rebase deine lokalen Commits oben drauf → lineare Historie

**Empfohlener Flow für saubere Historie**

```bash
git pull --rebase
```

---

## 9) Undo-Strategien (richtig rückgängig machen)

**Letzten Commit ändern (Message oder zusätzliche Dateien)**

```bash
git commit --amend
```

**Letzten Commit „zurücknehmen“, aber Änderungen behalten**

```bash
git reset --soft HEAD~1
```

**Index zurücksetzen, Änderungen behalten**

```bash
git reset --mixed HEAD~1   # Standard, wenn kein Modus angegeben
```

**Komplett hart zurücksetzen (auch Arbeitsverzeichnis!)**

```bash
git reset --hard HEAD~1    # Vorsicht: verwirft Änderungen endgültig
```

**Einen bestimmten Commit rückgängig machen (ohne Historie umzuschreiben)**

```bash
git revert <commit-hash>
```

> `revert` erstellt einen neuen Commit, der die Änderung des angegebenen Commits rückgängig macht – **sicher** für schon gepushte Historie.

---

## 10) Stash (Zwischenspeichern, ohne zu committen)

```bash
git stash                 # Änderungen weglegen
git stash list            # Stashes anzeigen
git stash pop             # obersten Stash anwenden + entfernen
# oder sicherer:
git stash apply           # anwenden, aber Stash behalten
```

---

## 11) Remotes verwalten

```bash
git remote -v                                 # anzeigen
git remote set-url origin <neu>               # URL ändern
git remote add upstream <url>                 # z.B. Original-Repo
```

---

## 12) Tags & Releases

```bash
git tag v1.0.0
git push origin v1.0.0
# oder annotiert (mit Message & Datum, empfohlen):
git tag -a v1.0.0 -m "First release"
git push origin --tags
```

---

## 13) .gitignore schnell erklärt

* Dateien/Ordner, die **nicht** versioniert werden sollen
* Beispiel `.gitignore`:

```
# Node
node_modules/
.env
.DS_Store
/dist
```

**Tipp:** Wenn bereits getrackt: erst entfernen & neu committen

```bash
git rm -r --cached .
git add .
git commit -m "Apply .gitignore"
```

---

## 14) HTTPS vs. SSH – und Credentials

* **HTTPS**: benötigt **Personal Access Token (PAT)** statt Passwort
* **SSH**: einmal Key erstellen & bei GitHub hinterlegen, danach bequeme Auth

**SSH-Key erstellen (Kurzform)**

```bash
ssh-keygen -t ed25519 -C "deine@email.com"
# Key hinzufügen (macOS/Linux):
ssh-add ~/.ssh/id_ed25519
# Public Key anzeigen & bei GitHub eintragen:
cat ~/.ssh/id_ed25519.pub
```

**Credential Helper (HTTPS)**

```bash
git config --global credential.helper manager-core   # Windows/macOS
git config --global credential.helper store          # (einfach, unverschlüsselt!)
```

---

## 15) Häufige Probleme & Fixes

**„non-fast-forward“ beim Push**

```bash
git pull --rebase origin main
# Konflikte lösen → weiter:
git rebase --continue
# dann pushen:
git push
```

**„fatal: refusing to merge unrelated histories“**

```bash
git pull --rebase --allow-unrelated-histories
```

**Remote falsch gesetzt**

```bash
git remote -v
git remote set-url origin <richtige-url>
```

---

## 16) Mini-Cheatsheet (Kopierbar)

```bash
# Setup
git config --global user.name "Dein Name"
git config --global user.email "deine@email.com"

# Neues Repo → GitHub
git init && git add . && git commit -m "init"
git branch -M main
git remote add origin <url>
git push -u origin main

# Klonen
git clone <url> && cd <ordner>

# Status / Diff / Log
git status
git diff
git log --oneline

# Branching
git switch -c feature/xyz
git switch main

git merge feature/xyz

git push -u origin feature/xyz

# Pull/Fetch
git fetch
git pull --rebase

# Undo
git commit --amend
git reset --soft HEAD~1
# hart:
# git reset --hard HEAD~1

git revert <hash>

# Stash
git stash && git stash pop

# Tags
git tag -a v1.0.0 -m "release" && git push origin --tags
```

---

## 17) Good Practices

* Kleine, thematisch saubere Commits mit klaren Messages
* Branch pro Feature/Bugfix; PRs für Reviews & CI
* `git pull --rebase` für lineare Historie
* `.gitignore` früh sauber halten
* Keine Secrets (Passwörter, Tokens) commiten → `.env` + Secrets Manager

---

**Viel Spaß beim Versionieren!** Wenn du magst, kann ich dir daraus direkt eine hübsche PDF erzeugen oder das Markdown an dein konkretes Projekt (Struktur, Tech-Stack) anpassen.
