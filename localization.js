var requirelocale = window.location.href.match(/-(\w+)\./)[1];
const selectElement = document.querySelector('select');
const selectedOption = selectElement.options[selectElement.selectedIndex];
const selectedLang = selectedOption.value;  // Get selectedLang

const keytrans = {
    'en': {
        'pid': 'Player ID', // Player ID
        'ally': 'Alliance', // Alliance
        'class': 'Class Selection', // Class Selection
        'email': 'Email', // Email
        'emailchg': 'email address changed', // email address changed
        'plang': 'Sprache', // Sprache
        'lastlogin': 'Last login', // Last login
        'pip': 'IP Address', // IP Address
        'steamid': 'Steam Id', // Steam Id
        'cmdruntil': 'Commander Until', // Commander Until
        'points': 'Points', // Points
        'vmode': 'Vacation Mode', // Vacation Mode
        'vmodeuntil': 'Vacation mode until', // Vacation mode until
        'banned': 'banned', // banned
        'Pass': 'Password', // Password
        'rhash': 'Revert-Hash', // Revert-Hash
        'validation': 'Validation', // Validation
        'regemail': 'Initial email', // Initial email
        'regdate': 'Registration date', // Registration date
        'commander': 'Commander', // Commander
        'Admiral': 'Admiral', // Admiral
        'Engineer': 'Engineer', // Engineer
        'Geologist': 'Geologist', // Geologist
        'Technocrat': 'Technocrat', // Technocrat
        'Technocrat': 'Technocrat', // Technocrat
        'Total Tritium': 'Total Tritium', // Total Tritium
        'banlog': 'Pillory Records', // Pillory Records
        'shortnotes': 'Short Notes', // Short Notes
        'users-sameemail': 'users with same email address', // users with same email address
        'planets': 'Planets', // Planets
        'moon': 'moon', // moon
        'date': 'Date', // Date
        'countedTicks': 'Counted Ticks', // Counted Ticks
        'activity': 'Activity' // Activity
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
        'date': 'Datum',
        'activity': 'Aktivität',
        'countedTicks': 'Gezählte Ticks'
    },
    'fr': {
        'pid': 'ID du joueur', // Player ID
        'ally': 'Alliance', // Alliance
        'class': 'Sélection de classe', // Class Selection
        'email': 'Email', // Email
        'emailchg': 'Changement d`adresse mail', // email address changed
        'plang': 'Sprache', // Sprache
        'lastlogin': 'Dernier login', // Last login
        'pip': 'Adresse IP', // IP Address
        'steamid': 'Steam Id', // Steam Id
        'cmdruntil': 'Commandant jusqu`au', // Commander Until
        'points': 'Points', // Points
        'vmode': 'Mode vacances', // Vacation Mode
        'vmodeuntil': 'Vacation mode until', // Vacation mode until
        'banned': 'Bloqué', // banned
        'Pass': 'Mot de passe', // Password
        'rhash': 'Revert-Hash', // Revert-Hash
        'validation': 'Validation', // Validation
        'regemail': 'Adresse initiale', // Initial email
        'regdate': 'Date d`inscription', // Registration date
        'commander': 'Commandant', // Commander
        'Admiral': 'Amiral', // Admiral
        'Engineer': 'Ingénieur', // Engineer
        'Geologist': 'Géologue', // Geologist
        'Technocrat': 'Technocrate', // Technocrat
        'Total Tritium': 'Somme tritium', // Total Tritium
        'banlog': 'Extrait du pilori', // Pillory Records
        'shortnotes': 'Shortnews', // Short Notes
        'users-sameemail': 'Joueurs avec la même adresse mail', // users with same email address
        'planets': 'Planètes', // Planets
        'moon': 'Lune', // moon
        'date': 'Date', // Date
        'countedTicks': 'Tics comptés', // Counted Ticks
        'activity': 'Activité' // Activity
    },
    'es': {
        'pid': 'ID del jugador', // Player ID
        'ally': 'Alianza', // Alliance
        'class': 'Selección de clase', // Class Selection
        'email': 'Email', // Email
        'emailchg': 'Cambio de correo-e', // email address changed
        'plang': 'Sprache', // Sprache
        'lastlogin': 'Último login', // Last login
        'pip': 'Dirección de IP', // IP Address
        'steamid': 'Steam Id', // Steam Id
        'cmdruntil': 'Libre de publicidad hasta', // Commander Until
        'points': 'Puntos', // Points
        'vmode': 'Modo de vacaciones', // Vacation Mode
        'vmodeuntil': 'Vacation mode until', // Vacation mode until
        'banned': 'Bloqueado', // banned
        'Pass': 'Contraseña', // Password
        'rhash': 'Revert-Hash', // Revert-Hash
        'validation': 'Validación', // Validationh
        'regemail': 'Correo electrónico inicial', // Initial email
        'regdate': 'Fecha de registro', // Registration date
        'commander': 'Comandante', // Commander
        'Admiral': 'Almirante', // Admiral
        'Engineer': 'Ingeniero', // Engineer
        'Geologist': 'Geólogo', // Geologist
        'Technocrat': 'Tecnócrata', // Technocrat
        'Total Tritium': 'Tritio total', // Total Tritium
        'banlog': 'Sumario de denuncias', // Pillory Records
        'shortnotes': 'Notas breves', // Short Notes
        'users-sameemail': 'Usuarios con la misma dirección de correo-e', // users with same email address
        'planets': 'Planetas', // Planets
        'moon': 'Luna', // moon
        'date': 'Fecha', // Date
        'countedTicks': 'Ticks registrados', // Counted Ticks
        'activity': 'Actividad' // Activity
    },
    'it': {
        'pid': 'ID giocatore', // Player ID
        'ally': 'Alleanza', // Alliance
        'class': 'Seleziona classe', // Class Selection
        'email': 'Email', // Email
        'emailchg': 'Indirizzo email cambiato', // email address changed
        'plang': 'Sprache', // Sprache
        'lastlogin': 'Ultimo login', // Last login
        'pip': 'Indirizzo IP', // IP Address
        'steamid': 'Steam Id', // Steam Id
        'cmdruntil': 'Commander fino al', // Commander Until
        'points': 'Punti', // Points
        'vmode': 'Modalità vacanza', // Vacation Mode
        'vmodeuntil': 'Vacation mode until', // Vacation mode until
        'banned': 'Bannato', // banned
        'Pass': 'Password', // Password
        'rhash': 'Revert-Hash', // Revert-Hash
        'validation': 'Convalida', // Validation
        'regemail': 'E-mail iniziale', // Initial email
        'regdate': 'Data di registrazione', // Registration date
        'commander': 'Commander', // Commander
        'Admiral': 'Ammiraglio', // Admiral
        'Engineer': 'Ingegnere', // Engineer
        'Geologist': 'Geologo', // Geologist
        'Technocrat': 'Tecnico', // Technocrat
        'Total Tritium': 'Tritium totale', // Total Tritium
        'banlog': 'Lista Bans', // Pillory Records
        'shortnotes': 'Appunti', // Short Notes
        'users-sameemail': 'Utenti con lo stesso indirizzo email', // users with same email address
        'planets': 'Pianeti', // Planets
        'moon': 'Luna', // moon
        'date': 'Data', // Date
        'countedTicks': 'Conteggio delle spunte', // Counted Ticks
        'activity': 'Attività' // Activity
    }
};
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
        'date': 'Date',
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
        'date': 'Datum',
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
        'date': 'Date',
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
        'date': 'Fecha',
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
        'date': 'Data',
        'activity': 'Attività',
        'countedTicks': 'Ticks contati'
    }
};

// Function to get translations based on language
function getTranslation(key, locale) {
if (!locale) locale = requirelocale
    if (translations[locale] && translations[locale][key]) {
        return translations[locale][key];
    } else if (translations['en'][key]) { // Fallback to English
        return translations['en'][key];
    } else {
        return key; // Fallback to key if no translation found
    }
}

// Function to get translations based on language
function keyTranslation(key, locale) {
    if (!locale) locale = requirelocale
    if (!locale && selectedLang) locale = selectedLang
    if (keytrans[locale] && keytrans[locale][key]) {
        return keytrans[locale][key];
    } else if (keytrans['en'][key]) { // Fallback to English
        return keytrans['en'][key];
    } else {
        return key; // Fallback to key if no translation found
    }
}
