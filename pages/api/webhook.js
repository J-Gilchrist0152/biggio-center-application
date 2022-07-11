const algoliasearch = require('algoliasearch');

const algolia = algoliasearch('6OW40CHNJ1', '63301ce9d05ca40b3c66756d7b0063a5');

const index = algolia.initIndex('biggio-index');

export default async (req, res) => {
  if (req.method !== 'POST') return res.end();

  if (req.headers['authorization'] !== process.env.WEBHOOK_SECRET_KEY)
    return res.status(401).end();

    try {
        const { data } = req.body;
  
        const { id: objectID } = data;
  
        await index.saveObject({ objectID, ...data });
  
        res.send(201);
     } catch (err) {
        res.status(400).send(err?.message);
     }
};