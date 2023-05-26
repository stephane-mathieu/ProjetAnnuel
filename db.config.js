
// Créer une connexion à la base de données
import mysql from "mysql";

const connection = mysql.createConnection({
    host: 'database.cyukagvswn49.eu-west-3.rds.amazonaws.com',
    port: 3306,
    user: 'admin',
    password: 'admin1234',
    database: 'missionbdd'
});

// Connecter à la base de données
connection.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données :', err);
        return;
    }
    console.log('Connecté à la base de données !');
});

export default connection;