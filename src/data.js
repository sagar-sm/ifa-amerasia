import {blue, pink, yellow} from '@material-ui/core/colors';

const myPink = '#ff58da';
const myBlue = '#009cff';

export const DATA = [
  // {
  //   id: 'america',                            // This is the URL
  //   x: 0.469,                                 // Use the debug page to find the x coordinate of the point
  //   y: 0.302,                                 // Use the debug page to find the y coordinate of the point
  //   html: require('./articles/america.html'), // link to the HTML page in the articles directory
  //   title: 'Dumbo, Brooklyn',                 // Title to be displayed in search results
  //   keywords: 'Sample, list, of, keywords',   // Keywords to be used for search
  //   pinColor: '#ff58da'                       // Any valid CSS string for indicating Pin colors. Default if no value is provided is #ff58da
  //   pinTooltip: 'Sample tooltip'              // Tooltip that shows when a user hovers over a pin. Default tooltip if no value is provided is the title
  // },
  {
    id: 'cartouche-temixitan',
    x: 0.178,
    y: 0.264,
    html: require('./articles/cartouche-temixitan.html'),
    title: 'Cartouche Temixitan/TenochtitlanTranscription and Translation',
    keywords:
      'Tenochtitlan, Quinsay, Marco Polo, Montezuma, Cortes, Quinsai, Oderic of Pordenone, Venice, Cortés, Francis',
    pinColor: blue[300], // NOTE: Jason will fix this
    pinTooltip: 'Tenochtitlan: Transcription and Translation'
  },
  {
    id: 'lipsman-parrots',
    x: 0.408,
    y: 0.377,
    html: require('./articles/lipsman-parrots.html'),
    title: 'The Parrot’s Tale: the Bird’s Fall from Exotic Temptation to Common Commodity',
    keywords: 'Parrot, Macaw, Van Eyck, Dürer, Sarto, Rubens, Brazil, Cantino, Mappamundi, Paradise, Adam, Eve',
    pinColor: yellow[400]
  },
  {
    id: 'cartouche-reader',
    x: 0.969,
    y: 0.329,
    html: require('./articles/cartouche-reader.html'),
    title: 'Cartouche Benevolent Reader: Transcription and Translation',
    keywords: 'Hyginus, Ptolemy, Charles V, latitude, longitude, America',
    pinColor: blue[300]
  },
  {
    id: 'cartouche-magellan',
    x: 0.466,
    y: 0.306,
    html: require('./articles/cartouche-magellan.html'),
    title: 'Cartouche on Magellan: Transcription and Translation',
    keywords: 'Magellan, China, Charles V, Hesperides, Moluccas, Indian Ocean, Seville',
    pinColor: blue[300]
  },
  {
    id: 'cartouche-america',
    x: 0.331,
    y: 0.436,
    html: require('./articles/cartouche-america.html'),
    title: 'Cartouche on America/Vespucci: Transcription and Translation',
    keywords: 'America, Vespucci, continents, Asia, Europe, Africa, cannibals',
    pinColor: blue[300]
  },
  {
    id: 'cartouche-america-connected',
    x: 0.342,
    y: 0.201,
    html: require('./articles/cartouche-america-connected.html'),
    title: 'Cartouche: America connected to the eastern lands: Transcription and Translation',
    keywords:
      'Peter Martyr, Asia, Africa, Europe, India, Tartary, Florida, Acolhuacan, Columbus, Ganges, Hyperborean, Australian',
    pinColor: blue[300]
  },
  {
    id: 'walsh-utopia',
    x: 0.376,
    y: 0.412,
    html: require('./articles/walsh-utopia.html'),
    title: 'Antiquity Beyond the Horizon: Thomas More’s Utopia and the New World',
    keywords:
      'Thomas More, Vespucci, America, Utopia, New World, Ringmann, Waldseemüller, Thevet, Foucault, heterotopia',
    pinColor: yellow[400]
  },
  {
    id: 'weitzman-armeria',
    x: 0.364,
    y: 0.376,
    html: require('./articles/weitzman-armeria.html'),
    title: 'Conceptualizing Amerasia: Medici Worldview in Ludovico Buti’s Armory frescoes',
    keywords:
      'Ferdinando I de’ Medici, Uffizi, Buti, Mason, Markey, Keating, Asia, America, Brazil, Rhinoceros, Weiditz, Boone, Stradano, Vespucci, Sahagún, Lazzaro, Burgkmair, Hogenberg, Braun, Mason, Guardaroba, Ortelius, Danti',
    pinColor: yellow[400]
  },
  {
    id: 'wu-tangut-cathay-mangi',
    x: 0.186,
    y: 0.144,
    html: require('./articles/wu-tangut-cathay-mangi.html'),
    title: 'Tangut, Cathay, and Mangi on Sixteenth-Century World Maps',
    keywords:
      'Tangut, Cathay, Mangi, Marco Polo, Rosselli, Finé, Waldseemüller, Behaim, Zaiton, Gastaldi, Anian, Ortelius, Ruysch, Ramusio, Mexico, Gruzinski, O’Gorman',
    pinColor: yellow[400]
  },
  {
    id: 'pivar-presterjohn',
    x: 0.687,
    y: 0.314,
    html: require('./articles/pivar-presterjohn.html'),
    title: 'Prester John and The Search for a Christian Utopia',
    keywords:
      'Prester John, Ethiopia, Africa, India, Marco Polo, Abyssinia, Mandeville, Dati, Schedel, Juan de la Cosa, Waldseemüller, Ringmann, Alvares, Olives, Ortelius, Orla, Larmessin, D’Almeida',
    pinColor: yellow[400]
  },
  {
    id: 'strauss-magi',
    x: 0.85,
    y: 0.104,
    html: require('./articles/strauss-magi.html'),
    title: 'Looking Westward: The Image of the American Magus in the Age of Exploration',
    keywords:
      'Tharsis, Balthasar, Melchior, Caspar, Magi, Fernandes, Cabral, Koerner, Prester John, Vespucci, Marco Polo, Inca, Tupinamba, Dürer, Holanda, Mason, Russo, Maino, Moctezuma,',
    pinColor: yellow[400]
  },
  {
    id: 'riccio-india',
    x: 0.177,
    y: 0.092,
    html: require('./articles/riccio-india.html'),
    title: 'India and indiano: the persistence of Amerasia in the Italian language',
    keywords:
      'India, Indiano, Marco Polo, Danti, Guardaroba, Sarto, Ariosto, Tasso, Vasari, ALdrovandi, Benavides, Dürer, Altdorfer, Burgkmair',
    pinColor: yellow[400]
  },
  {
    id: 'agnew-hieroglyphics',
    x: 0.669,
    y: 0.25,
    html: require('./articles/agnew-hieroglyphics.html'),
    title: '(Afro-)Amerasian Hieroglyphics?',
    keywords:
      'Cospi, hieroglyphic, Mixtec, China, writing, Legato, Mendoza, Thevet, Alciato, Valeriano, Dolendo, Mander, Kircher, Hakluyt',
    pinColor: yellow[400]
  },
  {
    id: 'raitt-florentinecodex',
    x: 0.19,
    y: 0.183,
    html: require('./articles/raitt-florentinecodex.html'),
    title: 'Another Indianness: Re-Imagining the Diversity of Figuration in the Florentine Codex',
    keywords:
      'Sahagún, Florentine Codex, Cortés, Tenochtitlan, Aztec, Nahua, Tlatelolco, Indians, tlacuilos, Gruzinksi, Markey, Ferdinando I de’ Medici, Weiditz, Mostaert, Zucchi, Collaert, Magaloni, Russo, Boone',
    pinColor: yellow[400]
  },
  {
    id: 'aethiopia-media',
    x: 0.651,
    y: 0.277,
    html: require('./articles/aethiopia-media.html'),
    title: 'Aethiopia Media',
    keywords:
      'Pliny, Atlantia, Ethiopia, Homer, Odyssey, Africa, India, Mandeville, Nile River, Prester John, Patriarch of Alexandria, Agisymba, Ptolemy, elephants, rhinoceros, Scillacio, Francisco de Támara, Boemus, Americas, Burgkmair, vestments, weapons, Dürer, Calecutish, feathers, salt cellars, cloths, silk, Indian, paradise',
    pinColor: pink[100]
  },
  {
    id: 'amazones',
    x: 0.65,
    y: 0.173,
    html: require('./articles/amazones.html'),
    title: 'Amazones',
    Keywords:
      'Amazons, Herodotus, Mandeville, Caspian Sea, Columbus, bows and arrows, copper, Garci Rodríguez de Montalvo, California, Terrestrial Paradise, Amazon river, Carvajal, Thevet, Asia, Sir Walter Raleigh, War of Troy, America, Collaert, engraving, letter, helmet, battle axe',
    pinColor: pink[100]
  },
  {
    id: 'america-nova-orbis-pars',
    x: 0.328,
    y: 0.366,
    html: require('./articles/america-nova-orbis-pars.html'),
    title: 'America Nova Orbis Pars',
    keywords:
      'America, New World, Waldseemüller, Vespucci, Mundus Novus, Ruysch, Hunt Lenox Globe, Novus Orbis, Münster, Columbus',
    pinColor: pink[100]
  },
  {
    id: 'archipelagus',
    x: 0.054,
    y: 0.188,
    html: require('./articles/archipelagus.html'),
    title: 'Archipelagus',
    keywords:
      'South Sea, islands, Ptolemy, gold, spices, lions, tigers, elephants, parrots, cannibals, tails, manioli, Mandeville, Polo, Behaim globe, Columbus, Caribbean, Indies, woodcut, Coppo, globes, Schöner, Münster, map, Yucatan, Americas, California, Santángel, letter, Grynaeus, Huttich, Novus orbis, isolarii, Flint, precious stones, silver, Cortés, coastline, Villalobos, Mexico, Philippines, Vasco Nuñez de Balboa, Isthmus, multitudo insularum, Marco Polo, South Sea, Polk, Castilians, South Indies Sea, spices, jewels, Padrón, Spanish, Central America',
    pinColor: pink[100]
  },
  {
    id: 'bangala',
    x: 0.182,
    y: 0.109,
    html: require('./articles/bangala.html'),
    title: 'Bangala',
    keywords: 'Bengal, Idolatry, maize, galanga, ginger, sugar, Bangella',
    pinColor: pink[100]
  },
  {
    id: 'bargu',
    x: 0.297,
    y: 0.137,
    html: require('./articles/bargu.html'),
    title: 'Bargu',
    keywords: 'Meditae, Lord Montezuma, China, Mekrit, Kublai Khan',
    pinColor: pink[100]
  },
  {
    id: 'calicut',
    x: 0.815,
    y: 0.2,
    html: require('./articles/calicut.html'),
    title: 'Calicut',
    keywords:
      'Kozhikode, spices, Santaella, Polo, Travels, Cortés, turkey, Molyneux, terrestrial globe, toponym, Calicutan, Mexico, New Spain, India, cartouche',
    pinColor: pink[100]
  },
  {
    id: 'cambalu',
    x: 0.206,
    y: 0.137,
    html: require('./articles/cambalu.html'),
    title: 'Cambalu',
    keywords:
      'Khanbalik, Cathay, Mongol Empire, Mongols, Kublai Khan, palace, Marco Polo, Sebastian Cabot, Montezuma, Tommaso Garzoni, Labrador, Columbus, paradise, Sant�ngel',
    pinColor: pink[100]
  },
  {
    id: 'canibales',
    x: 0.371,
    y: 0.359,
    html: require('./articles/canibales.html'),
    title: 'Canibales',
    keywords:
      'cannibals, antropophagi, androphagi,  Herodotus, Scythia, Ptolemy, Bay of Bengal, Mandeville, Davies, Brazil',
    pinColor: pink[100]
  },
  {
    id: 'carolus-imperator-quintus',
    x: 0.387,
    y: 0.205,
    html: require('./articles/carolus-imperator-quintus.html'),
    title: 'Carolus Imperator Quintus',
    keywords:
      'Charles V, Holy Roman Emperor, Spain, Mediterranean, Tunis, Mauritania Caesariensis, oceanus, occidus, columns of Hercules, Strait of Gibraltar, Atlantis, New World',
    pinColor: pink[100]
  },
  {
    id: 'cattigora',
    x: 0.272,
    y: 0.334,
    html: require('./articles/cattigora.html'),
    title: 'Cattigora',
    keywords:
      'Cattigara, Peru, Ptolemy, sea route, China, port city, Marinus of Tyre, Alexander, Magnus Sinus, Golden Chersonese, Sinae, Magellan, Oronce Finé, Paris Gilt Globe, Münster, Novae insulae, Sanuto, Pedro Sarimento de Gamboa, Pacific',
    pinColor: pink[100]
  },
  {
    id: 'chatay',
    x: 0.187,
    y: 0.146,
    html: require('./articles/chatay.html'),
    title: 'Chatay',
    keywords:
      'Cathay, Mexico, Columbus, Cabot, Martyr, Yàñez, Pinzón, Verrazano, Quivira, Coronado, Gómara, Frobisher, Ketel, pelicans, portrait, India',
    pinColor: pink[100]
  },
  {
    id: 'corte-realis-insula',
    x: 0.448,
    y: 0.164,
    html: require('./articles/corte-realis-insula.html'),
    title: 'Corte Realis Insula',
    keywords:
      'Corte-Real, Portuguese Crown, Fernandes, Orient, Occident, Great Khan, King John II, Tanduch, Mangi, Tangut, Indies',
    pinColor: pink[100]
  },
  {
    id: 'cuba',
    x: 0.278,
    y: 0.227,
    html: require('./articles/cuba.html'),
    title: 'Cuba',
    keywords:
      'Martyr, Columbus, Alpha Omega, sun, India, Spain, Ganges, East, West, Ptolemy, Santella, Polo, Bracciolini, Indies, Malabar, Santo Domingo, Calicut, Waldseemüller, Asia',
    pinColor: pink[100]
  },
  {
    id: 'culuacana',
    x: 0.185,
    y: 0.22,
    html: require('./articles/culuacana.html'),
    title: 'Culuacana',
    keywords: 'Tenochtitlan, Acolhuacan, cartouche, Monachus, Cortés Cathay, Culuacan',
    pinColor: pink[100]
  },
  {
    id: 'draconis',
    x: 0.355,
    y: 0.31,
    html: require('./articles/draconis.html'),
    title: 'Draconis',
    keywords:
      'Khanbalik, Cathay, Mongol Empire, Mongols, Kublai Khan, palace, Marco Polo, Sebastian Cabot, Montezuma, Tommaso Garzoni, Labrador, Columbus, paradise, Santángel',
    pinColor: pink[100]
  },
  {
    id: 'goch',
    x: 0.28,
    y: 0.11,
    html: require('./articles/goch.html'),
    title: 'Goch',
    keywords:
      'Kublai Khan, Gog, Magog, cannibals, Hebrew Bible, Book of Revelation, Josephus, Scythians, Huns, Mongols, Ten Lost Tribes of Israel, Prester John, Tenduch, Shang-tu, Christians, Nuño de Guzman, Panuco River',
    pinColor: pink[100]
  },
  {
    id: 'hispaniola-zipanga',
    x: 0.29,
    y: 0.252,
    html: require('./articles/hispaniola-zipanga.html'),
    title: 'Hispaniola/Zipanga',
    Keywords:
      'Japan, Spagnolla, Zipangum, Martyr, gold, gold mines, Marco Polo, Caribbean, Ruysch, Cipangu, Paris Gilt Globe, Nuremberg Globe Gores, Yucatan, Gerard de Jode, California, Florida, Ophir, Tharsis, Amerasian island, Purchas',
    pinColor: pink[100]
  },
  {
    id: 'iava-major',
    x: 0.044,
    y: 0.16,
    html: require('./articles/iava-major.html'),
    title: 'Iava Major',
    keywords: 'archipelago,island, Indonesia, spice trade, Malipiero, Trevisan, Jamaica, Münster, cannibalism',
    pinColor: pink[100]
  },
  {
    id: 'iava major2',
    x: 0.955,
    y: 0.159,
    html: require('./articles/iava-major.html'),
    title: 'Iava Major',
    keywords: 'archipelago, island, Indonesia, spice trade, Malipiero, Trevisan, Jamaica, Münster, cannibalism',
    pinColor: pink[100]
  },
  {
    id: 'india-extra-gangem',
    x: 0.878,
    y: 0.089,
    html: require('./articles/india-extra-gangem.html'),
    title: 'India Extra Gangem',
    keywords:
      'Riccio, India, Indiano, geography, Pliny, Strabo, Solinus, Ptolemy, Ganges, China, Conti, Ethiopia, Oderico da Pordenone, Polo, Mandeville, Thomas the Apostle, Christian kingdom, Prester John, riches, merchants, Golden Chersonese, Americas, multi-partite, Richard Eden, van Deusen, indio',
    pinColor: pink[100]
  },
  {
    id: 'iucatana',
    x: 0.232,
    y: 0.214,
    html: require('./articles/iucatana.html'),
    title: 'Iucatana',
    keywords:
      'Yucatán, Córdoba, Indies, Isla Rica, Juan de Grijalva, Cortés, map, Gastaldi, Ribeiro, Verrazano World Map, Nuremberg Globe Gores, Japan, Melitensis',
    pinColor: pink[100]
  },
  {
    id: 'london',
    x: 0.536,
    y: 0.199,
    html: require('./articles/london.html'),
    title: 'London',
    keywords:
      'Eden, Columbus, Vespucci, A Treatyse of the Newe India, Münster, Cosmographia, archipelago, Canaries, Moluccas',
    pinColor: pink[100]
  },
  {
    id: 'magellan',
    x: 0.12,
    y: 0.15,
    html: require('./articles/magellan.html'),
    title: 'Magellan',
    keywords:
      'Circumnavigation, Elcano, Victoria, Philippines, Neptune, Padrón, Spice Islands, Moluccas, Fernández de Oviedo y Valdés, Pigafetta, Mar del Sur, South China Sea, Schöner, Ptolemy, Columbus, Vespucci, India, Emperor Charles V',
    pinColor: pink[100]
  },
  {
    id: 'mangi',
    x: 0.157,
    y: 0.158,
    html: require('./articles/mangi.html'),
    title: 'Mangi',
    keywords:
      'Manzi, Mongols, Marco Polo, Southern China, Mexico, Cathay, Monachus, Odoric of Pordenone, Mansus, Messigo, Cortes, Garzoni, Labrador',
    pinColor: pink[100]
  },
  {
    id: 'mare-cathayum',
    x: 0.244,
    y: 0.197,
    html: require('./articles/mare-cathayum.html'),
    title: 'Mare Cathayum',
    keywords: 'Sea of Cathay, Gulf of Mexico, Nancy Globe, Putte',
    pinColor: pink[100]
  },
  {
    id: 'margaritas',
    x: 0.148,
    y: 0.155,
    html: require('./articles/margaritas.html'),
    title: 'Margaritas',
    keywords: 'Coast, pearls, Cortés, gold, spices, Pueblo de los Angeles, Don Juan de Oñate, Pacific',
    pinColor: pink[100]
  },
  {
    id: 'messigo',
    x: 0.158,
    y: 0.148,
    html: require('./articles/messigo.html'),
    title: 'Messigo',
    keywords:
      'Mansi, Monachus, Mangi, Tenochtitlan, Cortés, Polo, Great Khan, Mexico, China, Marcos de Niza, elephants, camels, silk, Golden Fleece, Quinsay,Fra Gregorio García,Mixtec Cospi Codex, Hebrews, Durán, Philippines, trade',
    pinColor: pink[100]
  },
  {
    id: 'moluccae',
    x: 0.074,
    y: 0.139,
    html: require('./articles/moluccae.html'),
    title: 'Moluccae',
    keywords: 'Spice Islands, nutmeg, mace, cloves, Indies, Boemus, Borneo, Philippines, Padrón, Caribbean',
    pinColor: pink[100]
  },
  {
    id: 'pego',
    x: 0.913,
    y: 0.116,
    html: require('./articles/pego.html'),
    title: 'Pego',
    keywords: 'Bago, Myanmar, Gastaldi, Rosaccio, North America, strait, ocean',
    pinColor: pink[100]
  },
  {
    id: 'peru-provincia',
    x: 0.294,
    y: 0.327,
    html: require('./articles/peru-provincia.html'),
    title: 'Peru Provincia',
    keywords:
      'Arvaceas, New Spain, silver, gold, grain, harvest, tropical zone, Ophir, India, Megasthenes, Diodorus Siculus, fruits, copper, iron, tin, equator, New World, America',
    pinColor: pink[100]
  },
  {
    id: 'qvemquinafv',
    x: 0.182,
    y: 0.131,
    html: require('./articles/qvemquinafv.html'),
    title: 'Qvemquinafv',
    keywords: 'Quemquinafu, Quanzhou, Zaiton, porcelain, Ruysch, Zoilon, kingdom, port',
    pinColor: pink[100]
  },
  {
    id: 'serica',
    x: 0.827,
    y: 0.07,
    html: require('./articles/serica.html'),
    title: 'Serica',
    keywords: 'silk, Silk Road, Zorzi, Romans, Han Dynasty, American Southwest',
    pinColor: pink[100]
  },
  {
    id: 'subuth',
    x: 0.077,
    y: 0.13,
    html: require('./articles/subuth.html'),
    title: 'Subuth',
    keywords: 'Cebu, Philippines, trade, Magellan, baptism, Massana Island, ginger',
    pinColor: pink[100]
  },
  {
    id: 'tangut',
    x: 0.198,
    y: 0.102,
    html: require('./articles/tangut.html'),
    title: 'Tangut',
    keywords:
      'Xi Xia, Polo, idolaters, Etzina, Sinja, Su-Chau, silk, Kingdom of Goch, musk, Silk Road, camels, camlet, Kalachan, de Niza, Albornoz, Tamacho, Monachus',
    pinColor: pink[100]
  },
  {
    id: 'tartaria-magna',
    x: 0.671,
    y: 0.14,
    html: require('./articles/tartaria-magna.html'),
    title: 'Tartaria Magna',
    keywords:
      'Great Tartary, Turkic, Mongols, Tatar, Tartar, Frobisher, Cornelis de Jode, Morton, pilgrim colonies, indigenous peoples, Massachusetts, New England, Adair, Carver, Chickasaw',
    pinColor: pink[100]
  },
  {
    id: 'temixtitan',
    x: 0.182,
    y: 0.183,
    html: require('./articles/temixtitan.html'),
    title: 'Temixtitan',
    keywords: 'Tenochtitlan, Cortes, Balbuena, Italy, Japan, Spain, China, Quinsay, Mongols, Great Khan, Montezuma',
    pinColor: pink[100]
  },
  {
    id: 'tharsis',
    x: 0.771,
    y: 0.213,
    html: require('./articles/tharsis.html'),
    title: 'Tharsis',
    keywords:
      'Hebrew Bible, King Solomon, Tarshish, Magi, D’Ailly, Book of Psalms, Cathay, Indies, Columbus, riches, Hispaniola',
    pinColor: pink[100]
  },
  {
    id: 'tholoma',
    x: 0.22,
    y: 0.11,
    html: require('./articles/tholoma.html'),
    title: 'Tholoma',
    keywords:
      'Toloman, idolaters, Great Khan, gold, Behaim Globe, Ruysch, Cathay, Stampfer, Globuspokal, China, Gastaldi, Mercator, Ortelius, strait',
    pinColor: pink[100]
  },
  {
    id: 'venetiae',
    x: 0.578,
    y: 0.22,
    html: require('./articles/venetiae.html'),
    title: 'Venetiae',
    keywords: 'Venice, Marco Polo, printing, printshops, bookstores, Age of Encounters, Ramusio, cartographers',
    pinColor: pink[100]
  },
  {
    id: 'zonal-hemispherical-maps',
    x: 0.357,
    y: 0.032,
    html: require('./articles/zonal-hemispherical-maps.html'),
    title: 'Zonal Hemispherical Maps',
    Keywords:
      'Hapsburg, hemispheric projection, map, climatic zones, Macrobius, Parmenides, frigid zone, torrid zone, temperate zone, Gómez, Columbus, equator, tropics, Caribbean, India, New World, Western hemisphere, Solinus, Strabo, Europe, Africa, Asia, Pomponius Mela, Ptolemy, Apianus, Waldseemüller',
    pinColor: pink[100]
  },
  {
    id: 'zonal-hemispherical-maps2',
    x: 0.642,
    y: 0.032,
    html: require('./articles/zonal-hemispherical-maps.html'),
    title: 'Zonal Hemispherical Maps',
    Keywords:
      'Hapsburg, hemispheric projection, map, climatic zones, Macrobius, Parmenides, frigid zone, torrid zone, temperate zone, Gómez, Columbus, equator, tropics, Caribbean, India, New World, Western hemisphere, Solinus, Strabo, Europe, Africa, Asia, Pomponius Mela, Ptolemy, Apianus, Waldseemüller',
    pinColor: pink[100]
  },
  {
    id: 'walsh-thomas',
    x: 0.758,
    y: 0.139,
    // x: 0.106,
    // y: 0.128,
    html: require('./articles/walsh-thomas.html'),
    title: 'Saint Thomas, Evangelist of the Indies',
    Keywords: 'Saint Thomas',
    pinColor: yellow[400]
  },
  {
    id: 'riccio-ophir',
    x: 0.874,
    y: 0.118,
    html: require('./articles/riccio-ophir.html'),
    title: 'Ophir displaced',
    Keywords: 'Ophir displaced',
    pinColor: yellow[400]
  },
  // {
  //   id: 'riccio-ophir',
  //   x: 0.106,
  //   y: 0.128,
  //   html: require('./articles/riccio-ophir.html'),
  //   title: 'Ophir displaced',
  //   Keywords: 'Ophir displaced',
  //   pinColor: yellow[400]
  // },
  {
    id: 'riccio-ophir2',
    x: 0.424,
    y: 0.446,
    html: require('./articles/riccio-ophir.html'),
    title: 'Ophir displaced',
    Keywords: 'Ophir displaced',
    pinColor: yellow[400]
  },
  {
    id: 'zaphala',
    x: 0.711,
    y: 0.379,
    html: require('./articles/zaphala.html'),
    title: 'Zaphala',
    Keywords:
      'elephant, Africa, Vopel, India, Persia, Mozambique, Portuguese, Vaso da Gama, letter, Giovanni Maria Cretico, Fracanzo da Montalboddo, Simon Grynaeus, Indian Ocean, Calicut, Tomé Lopes, Ophir, John Milton, Paradise Lost, trade, Casa da Guiné, Casa da India e de Guiné, trade',
    pinColor: pink[100]
  },
  {
    id: 'hic rinoceron',
    x: 0.59,
    y: 0.326,
    html: require('./articles/hic-rinoceron.html'),
    title: 'Hic Rinoceron',
    Keywords: 'Lodovico Buti, armeria, Florence, fresco, rhinoceros, Asia, Africa, Americas, Medici, Uffizi',
    pinColor: pink[100]
  },
  {
    id: 'Santa Maria',
    x: 0.439,
    y: 0.237,
    html: require('./articles/santa-maria.html'),
    title: 'Santa Maria',
    Keywords:
      'Azores, Luis de Santángel, Columbus, letter, Asia, Cathay, Indian, Navidad, monsters, Marco Polo, gold, spices, woodcut, Hispaniola, Atlantic, Indian Ocean, traders, island',
    pinColor: pink[100]
  },
  {
    id: 'Sibilia',
    x: 0.518,
    y: 0.251,
    html: require('./articles/sibilia.html'),
    title: 'Sibilia (Seville)',
    Keywords:
      'Castile, Casa de Contratación, trade, finance, taxes, maps, mapmaking, cartographers, Padrón Real, Diogo Ribeiro, Magellan, Asia, Americas, Moluccas, Pacific',
    pinColor: pink[100]
  }
];
