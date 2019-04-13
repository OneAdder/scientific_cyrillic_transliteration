/**
 _Copyright © 2019, Michael Voronov
_All rights reserved._
**/
//Этот скрипт про транслитерацию по ГОСТ 7.79-2000 (научная транслитерация)
        
mapping = {
    'а': 'a',
    'б': 'b',
    'в': 'v',
    'г': 'g',
    'д': 'd',
    'е': 'e',
    'ё': 'ë',
    'ж': 'ž',
    'з': 'z',
    'и': 'i',
    'й': 'j',
    'к': 'k',
    'л': 'l',
    'м': 'm',
    'н': 'n',
    'о': 'o',
    'п': 'p',
    'р': 'r',
    'с': 's',
    'т': 't',
    'у': 'u',
    'ф': 'f',
    'х': 'h',
    'ц': 'c',
    'ч': 'č',
    'ш': 'š',
    'щ': 'ŝ',
    'ъ': '"',
    'ы': 'y',
    'ь': '’',
    'э': 'è',
    'ю': 'û',
    'я': 'â'
}
        
_transliterate = function(mapping, text){
    //Транслитерировать по имеющемуся маппингу и тексту
    MAPPING = {}
    for (var key in mapping){
        MAPPING[key.toUpperCase()] = mapping[key].toUpperCase()
    }
    
    new_text = ''
    for (index = 0; index < text.length; ++index) {
        if (mapping.hasOwnProperty(text[index])) new_text = new_text + mapping[text[index]];
        else if (MAPPING.hasOwnProperty(text[index])) new_text = new_text + MAPPING[text[index]];
        else new_text = new_text + text[index];
    }
    
    return new_text
}

cyrillic_to_scientific = function(text){
    //Транслитерировать из кириллической записи
    transliterated = _transliterate(mapping, text)
    return transliterated
}
        
scientific_to_cyrillic = function(text){
    //Наоборот
    reversed_mapping = {}
    for (var key in mapping){
        reversed_mapping[mapping[key]] = key
    }
    reversed = _transliterate(reversed_mapping, text)
    return reversed
} 
