// node seed-stock.js PROJECT_ID API_KEY   (creates stock/<id> docs once; edit amounts later in Firebase console)
const [P, K] = process.argv.slice(2);
const ids = ['violet','bordeaux','sun','charcoal','black','top','down'];
const QTY = 10; // starting stock per size
(async () => {
  for (const id of ids) {
    const fields = Object.fromEntries(['S','M','L','XL'].map(k => [k, { integerValue: String(QTY) }]));
    const r = await fetch(`https://firestore.googleapis.com/v1/projects/${P}/databases/(default)/documents/stock?documentId=${id}&key=${K}`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ fields }) });
    console.log(id, r.status);
  }
})();
