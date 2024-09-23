/* Variables */ {
    var ShowlngLog = false;
    var selectElement = document.querySelector('select');
    var requirelocale = window.location.href.match(/-(\w+)\./)[1];
    var storedLang = localStorage.getItem('selectedLang');
    var selectedLang;

    if (ShowlngLog) console.log('Initial Check of requirelocale:', requirelocale);
    if (ShowlngLog) console.log('Initial Check of storedLang:', storedLang);

    // Check if the <select> element is available
    if (selectElement) {
        let selectedOption = selectElement.querySelector('option[selected="selected"]') ||
            selectElement.options[selectElement.selectedIndex];
        selectedLang = selectedOption ? selectedOption.value : null;

        // Update localStorage if necessary
        if (storedLang !== selectedLang) {
            localStorage.setItem('selectedLang', selectedLang);
            if (ShowlngLog) console.log(`Language stored: ${selectedLang}`);
        }
    }
    else selectedLang = storedLang;


    // Reset handling
    if (selectedLang === "reset") selectedLang = null;
    if (ShowlngLog) console.log('Final Check of selectedLang:', selectedLang);
}


const playerkeys = {
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
    }, 'de': {
        'pid': 'Player ID', // Player ID
        'ally': 'Allianz', // Alliance
        'class': 'Klassenauswahl', // Class Selection
        'email': 'Email', // Email
        'emailchg': 'Email geändert', // email address changed
        'plang': 'Sprache', // Sprache
        'lastlogin': 'Letzter Login', // Last login
        'pip': 'IP Adresse', // IP Address
        'steamid': 'Steam Id', // Steam Id
        'cmdruntil': 'Werbefrei bis', // Commander Until
        'points': 'Punkte', // Points
        'vmode': 'Urlaubsmodus', // Vacation Mode
        'vmodeuntil': 'Vacation mode until', // Vacation mode until
        'banned': 'Gesperrt', // banned
        'Pass': 'Passwort', // Password
        'rhash': 'Revert-Hash', // Revert-Hash
        'validation': 'Validierung', // Validation
        'regemail': 'Initiale Email', // Initial email
        'regdate': 'Registrierungsdatum', // Registration date
        'commander': 'Commander', // Commander
        'Admiral': 'Admiral', // Admiral
        'Engineer': 'Ingenieur', // Engineer
        'Geologist': 'Geologe', // Geologist
        'Technocrat': 'Technokrat', // Technocrat
        'Total Tritium': 'Tritium gesamt', // Total Tritium
        'banlog': 'Prangerauszug', // Pillory Records
        'shortnotes': 'Short Notes', // Short Notes
        'users-sameemail': 'User mit gleicher Emailadresse', // users with same email address
        'planets': 'Planeten', // Planets
        'moon': 'Mond', // moon
        'date': 'Datum', // Date
        'countedTicks': 'Gezählte Ticks', // Counted Ticks
        'activity': 'Aktivität' // Activity
    }, 'fr': {
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
    }, 'es': {
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
    }, 'it': {
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

'research in progress' : 'rqueue',
'construction queue - buildings' : 'bqueue',
'construction queue - fleets' : 'fqueue',
'size' : 'size',
'lifeform resources' : 'lfresources',
'lifeform tech' : 'lfbuildings',
'selected' : 'lftech',
'' : ''

const planetkeys = {
    'en': {
        'resources': 'resources', // resources
        'buildings': 'buildings', // buildings
        'rqueue': 'research in progress', // rqueue
        'bqueue': 'construction queue - buildings', // bqueue
        'fqueue': 'construction queue - fleets', // fqueue
        'size': 'Date', // size
        'lfresources': 'lifeform resources', // lfresources
        'lfbuildings': 'lifeform tech', // lfbuildings
        'lftech': 'selected', // lftech
        'date': 'Date', // Date
        '' : ''
    }, 'de': {
        'resources': 'Ressourcen', // resources
        'buildings': 'Gebäude', // buildings
        'rqueue': 'Laufende Forschung', // rqueue
        'bqueue': 'Bauliste - Gebäude', // bqueue
        'fqueue': 'Bauliste - Flotten', // fqueue
        'size': 'Größe', // size
        'lfresources': 'Ressourcen der Lebensform ', // lfresources
        'lfbuildings': 'Technologien der Lebensform ', // lfbuildings
        'lftech': 'Ausgewählt', // lftech
        'date': 'Date', // Date
        '' : ''
    }, 'fr': {
        'resources': 'Ressources', // resources
        'buildings': 'Bâtiments', // buildings
        'rqueue': 'Recherche en cours', // rqueue
        'bqueue': 'Liste de construction - Bâtiments', // bqueue
        'fqueue': 'Liste de construction - Flottes', // fqueue
        'size': 'Taille', // size
        'lfresources': 'Ressources de forme de vie ', // lfresources
        'lfbuildings': 'Technologie de forme de vie ', // lfbuildings
        'lftech': 'Sélectionné', // lftech
        'date': 'Date', // Date
        '' : ''
    }, 'es': {
        'resources': 'Recursos', // resources
        'buildings': 'Edificios', // buildings
        'rqueue': 'Investigación en curso', // rqueue
        'bqueue': 'Cola de construcción - Edificios', // bqueue
        'fqueue': 'Cola de construcción - Escuadrón', // fqueue
        'size': 'Tamaño', // size
        'lfresources': 'Recursos de la forma de vida ', // lfresources
        'lfbuildings': 'Tecnologías de la forma de vida ', // lfbuildings
        'lftech': 'Selección', // lftech
        'date': 'Date', // Date
        '' : ''
    }, 'it': {
        'resources': 'Risorse', // resources
        'buildings': 'Strutture', // buildings
        'rqueue': 'Ricerca in corso', // rqueue
        'bqueue': 'Coda costruzione - Strutture', // bqueue
        'fqueue': 'Coda costruzione - Flotte', // fqueue
        'size': 'Grandezza', // size
        'lfresources': 'Risorse Forme di vita ', // lfresources
        'lfbuildings': 'Tecnologie Forme di vita ', // lfbuildings
        'lftech': 'Selezionata', // lftech
        'date': 'Date', // Date
        '' : ''
    }
};

var classMapping = {
    'resources' : 'resources',
    'buildings' : 'buildings',
    'research in progress' : 'rqueue',
    'construction queue - buildings' : 'bqueue',
    'construction queue - fleets' : 'fqueue',
    'size' : 'size',
    'lifeform resources' : 'lfresources',
    'lifeform tech' : 'lfbuildings',
    'selected' : 'lftech',
    '' : ''
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
    },'de': {
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
    }, 'fr': {
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
    }, 'es': {
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
    }, 'it': {
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
    if (selectedLang && (!translations[locale] || !translations[locale][key])) locale = selectedLang
    if (selectedLang && selectedLang !== requirelocale) locale = selectedLang;

    if (ShowlngLog) console.log('locale for keys :', locale);
    if (translations[locale] && translations[locale][key]) {
        return translations[locale][key];
    } else if (translations['en'][key]) { // Fallback to English
        return translations['en'][key];
    } else {
        return key; // Fallback to key if no translation found
    }
}

// Function to get translations based on language
function playerkeyTranslation(key, locale) {
    if (!locale) locale = requirelocale
    if (selectedLang && (!playerkeys[locale] || !playerkeys[locale][key])) locale = selectedLang
    if (selectedLang && selectedLang !== requirelocale) locale = selectedLang;

    if (ShowlngLog) console.log('locale for keys :', locale);
    if (playerkeys[locale] && playerkeys[locale][key]) {
        lngkey = playerkeys[locale][key];
        if (ShowlngLog) console.log('lngkey:', lngkey);
        return lngkey;
    } else if (playerkeys['en'][key]) { // Fallback to English
        lngkey = playerkeys['en'][key];
        if (ShowlngLog) console.log('lngkey:', lngkey);
        return lngkey;
    } else {
        return key; // Fallback to key if no translation found
    }

}

// Function to get translations based on language
function planetkeyTrans(key, locale) {
    if (!locale) locale = requirelocale
    if (selectedLang && (!planetkeys[locale] || !planetkeys[locale][key])) locale = selectedLang
    if (selectedLang && selectedLang !== requirelocale) locale = selectedLang;

    if (ShowlngLog) console.log('locale for keys :', locale);
    if (planetkeys[locale] && planetkeys[locale][key]) {
        lngkey = planetkeys[locale][key];
        if (ShowlngLog) console.log('lngkey:', lngkey);
        return lngkey;
    } else if (planetkeys['en'][key]) { // Fallback to English
        lngkey = planetkeys['en'][key];
        if (ShowlngLog) console.log('lngkey:', lngkey);
        return lngkey;
    } else {
        return key; // Fallback to key if no translation found
    }

}
