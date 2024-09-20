// localization.js

const translations = {
    'en': {
        'pid': 'Player ID',
        'plogin': 'Last login',
        'pip': 'IP Address',
        'pscore': 'Points',
        'pvmode': 'Vacation Mode',
        'selectedLifeformsTxt': 'Selected',
        'researchQueueTxt': 'Research in progress',
        'fleetQueueTxt': 'Construction queue - Fleets',
        'buildingQueueTxt': 'Construction queue - buildings'
    },
    'de': {
        'pid': 'Player ID',
        'plogin': 'Letzter Login',
        'pip': 'IP Adresse',
        'pscore': 'Punkte',
        'pvmode': 'Urlaubsmodus',
        'selectedLifeformsTxt': 'Ausgewählt',
        'researchQueueTxt': 'Laufende Forschung',
        'fleetQueueTxt': 'Bauliste - Flotten',
        'buildingQueueTxt': 'Bauliste - Gebäude'
    },
    'fr': {
        'pid': 'ID du joueur',
        'plogin': 'Dernier login',
        'pip': 'Adresse IP',
        'pscore': 'Points',
        'pvmode': 'Mode vacances',
        'selectedLifeformsTxt': 'Sélectionné',
        'researchQueueTxt': 'Recherche en cours',
        'fleetQueueTxt': 'Liste de construction - Flottes',
        'buildingQueueTxt': 'Liste de construction - Bâtiments'
    },
    'es': {
        'pid': 'ID del jugador',
        'plogin': 'Último login',
        'pip': 'Dirección de IP',
        'pscore': 'Puntos',
        'pvmode': 'Modo de vacaciones',
        'selectedLifeformsTxt': 'Selección',
        'researchQueueTxt': 'Investigación en curso',
        'fleetQueueTxt': 'Cola de construcción - Escuadrón',
        'buildingQueueTxt': 'Cola de construcción - Edificios'
    },
    'it': {
        'pid': 'ID giocatore',
        'plogin': 'Ultimo login',
        'pip': 'Indirizzo IP',
        'pscore': 'Punti',
        'pvmode': 'Modalità vacanza',
        'selectedLifeformsTxt': 'Selezionata',
        'researchQueueTxt': 'Ricerca in corso',
        'fleetQueueTxt': 'Coda costruzione - Flotte',
        'buildingQueueTxt': 'Coda costruzione - Strutture'
    },
    'nl': {
        'pid': 'Speler ID',
        'plogin': 'Laatste login',
        'pip': 'IP-adres',
        'pscore': 'Punten',
        'pvmode': 'Vakantiemodus',
        'selectedLifeformsTxt': 'Geselecteerd',
        'researchQueueTxt': 'Onderzoek in uitvoering',
        'fleetQueueTxt': 'Constructie wachtrij - Vloten',
        'buildingQueueTxt': 'Constructie wachtrij - Gebouwen'
    },
    'pl': {
        'pid': 'ID gracza',
        'plogin': 'Ostatnie logowanie',
        'pip': 'Adres IP',
        'pscore': 'Punkty',
        'pvmode': 'Tryb wakacyjny',
        'selectedLifeformsTxt': 'Wybrane',
        'researchQueueTxt': 'Badania w toku',
        'fleetQueueTxt': 'Kolejka budowy - Floty',
        'buildingQueueTxt': 'Kolejka budowy - Budynki'
    },
    'tk': {
        'pid': 'Oýunçy ID',
        'plogin': 'Soňky giriş',
        'pip': 'IP salgy',
        'pscore': 'Punkty',
        'pvmode': 'Dynç alyş reimi',
        'selectedLifeformsTxt': 'Gözleýän',
        'researchQueueTxt': 'Gözleýän gözleg',
        'fleetQueueTxt': 'Gurluşy ýazgy - Flotlar',
        'buildingQueueTxt': 'Gurluşy ýazgy - Binalar'
    },
    'ro': {
        'pid': 'ID jucător',
        'plogin': 'Ultima conectare',
        'pip': 'Adresă IP',
        'pscore': 'Puncte',
        'pvmode': 'Mod vacanță',
        'selectedLifeformsTxt': 'Selectat',
        'researchQueueTxt': 'Cercetare în curs',
        'fleetQueueTxt': 'Coada de construcție - Flote',
        'buildingQueueTxt': 'Coada de construcție - Clădiri'
    },
    'ru': {
        'pid': 'ID игрока',
        'plogin': 'Последний вход',
        'pip': 'IP адрес',
        'pscore': 'Очки',
        'pvmode': 'Режим отпуска',
        'selectedLifeformsTxt': 'Выбранный',
        'researchQueueTxt': 'Исследование в процессе',
        'fleetQueueTxt': 'Очередь строительства - Флоты',
        'buildingQueueTxt': 'Очередь строительства - Здания'
    },
    'dk': {
        'pid': 'Spiller ID',
        'plogin': 'Sidste login',
        'pip': 'IP-adresse',
        'pscore': 'Point',
        'pvmode': 'Ferie tilstand',
        'selectedLifeformsTxt': 'Valgt',
        'researchQueueTxt': 'Forskning i gang',
        'fleetQueueTxt': 'Bygge kø - Flåder',
        'buildingQueueTxt': 'Bygge kø - Bygninger'
    },
    'sk': {
        'pid': 'ID hráča',
        'plogin': 'Posledné prihlásenie',
        'pip': 'IP adresa',
        'pscore': 'Body',
        'pvmode': 'Dovolenka',
        'selectedLifeformsTxt': 'Vybrané',
        'researchQueueTxt': 'Výskum prebieha',
        'fleetQueueTxt': 'Stavebný rad - Flotily',
        'buildingQueueTxt': 'Stavebný rad - Budovy'
    }
};

// Function to get translations based on language
function getTranslation(key, locale) {
    if (translations[locale] && translations[locale][key]) {
        return translations[locale][key];
    } else if (translations['en'][key]) { // Fallback to English
        return translations['en'][key];
    } else {
        return key; // Fallback to key if no translation found
    }
}
