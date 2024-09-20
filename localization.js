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
        'buildingQueueTxt': 'Construction queue - buildings',
        'activity': 'Activity',
        'countedTicks': 'Counted Ticks'
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
        'buildingQueueTxt': 'Bauliste - Gebäude',
        'activity': 'Aktivität',
        'countedTicks': 'Gezählte Ticks'
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
        'buildingQueueTxt': 'Liste de construction - Bâtiments',
        'activity': 'Activité',
        'countedTicks': 'Ticks comptés'
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
        'buildingQueueTxt': 'Cola de construcción - Edificios',
        'activity': 'Actividad',
        'countedTicks': 'Ticks contados'
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
        'buildingQueueTxt': 'Coda costruzione - Strutture',
        'activity': 'Attività',
        'countedTicks': 'Ticks contati'
    }
};


// Function to get translations based on language
function getTranslation(key, locale) {
if (!locale) var locale = window.location.href.match(/-(\w+)\./)[1];
    if (translations[locale] && translations[locale][key]) {
        return translations[locale][key];
    } else if (translations['en'][key]) { // Fallback to English
        return translations['en'][key];
    } else {
        return key; // Fallback to key if no translation found
    }
}
