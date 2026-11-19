# Oathkeeper

A pixel habit game: Habitica meets Tamagotchi. This is the GitHub Pages build of the app that also runs as a Claude artifact.

## Use it
1. Open the site on your phone and Mac.
2. **iPhone:** in Safari, tap Share → **Add to Home Screen**. **Mac:** in Safari, File → **Add to Dock** (or install from Chrome's address bar).
3. Settings (gear icon) → Save data → paste a GitHub token → **Connect GitHub**. Do this once on each device.

### The token
Create a fine-grained token at github.com → Settings → Developer settings → Personal access tokens → Fine-grained tokens:
- Repository access: **Public repositories (read-only)**
- Account permissions: **Gists → Read and write**. Nothing else.

The token is kept only on the device where you paste it. It never goes into the save, the gist or a backup.

### Where the save lives
In one **secret gist** on your account called `oathkeeper-save.json`. Secret gists aren't listed or searchable, but anyone who has the gist's exact link can open it. Don't share that link.

Each device keeps its own copy too. When you open the app or switch back to it, it pulls the newest save from the gist.

## Moving your save over from the Claude version
1. In the Claude version: Settings → Save data → **Download backup** (or **Copy backup**).
2. In this version, on one device: Settings → Save data → **Choose backup file** (or paste) → **Restore** (tap twice).
3. Then **Connect GitHub** on that device first. That creates the gist from your restored save.
4. Connect your other devices. They'll pull the same save.

### If both devices changed things while out of sync
Nothing is thrown away: the two saves are combined. That means an undo made on one device can come back if the other device still had that task done. If one device started over, the newer game wins and the other is kept in Settings → Undo last restore. GitHub also keeps every past version of the gist (open the gist → Revisions).

## Updates
New versions are just a new `index.html` pushed to this repo. Your save is never stored in the repo, and the app upgrades old saves automatically. With an internet connection the newest version loads; offline, the last version opens from the cache.

## Files
- `index.html`: the whole app (built from the Oathkeeper parts)
- `sw.js`: offline support
- `manifest.webmanifest`, `icon-*.png`, `apple-touch-icon.png`: home-screen install
