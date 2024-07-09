const cron = require('node-cron');
const { db } = require('../config/firebase');
const { collection, getDocs } = require('firebase/firestore/lite');

cron.schedule('* * * * Sunday', async () => {
  console.log('Executando tarefa de resetar os dias livres a cada sábado');

  try {
    const enrollmentsCollection = collection(db, 'challengeEnrollments');
    const enrollmentsSnapshot = await getDocs(enrollmentsCollection);
    const batch = db.batch();

    enrollmentsSnapshot.docs.map((enroll) => {
      const data = enroll.data();
      batch.update(db.collection('challengeEnrollments').doc(enroll.id), {
        daysOff: data.originalDaysOff
      });
    })

    await batch.commit();
  } catch (err) {

  }
});
