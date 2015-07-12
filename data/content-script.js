(function() {
  var translateTable = {
    'А': 'A',
    'а': 'a',
    'Б': 'B',
    'б': 'b',
    'В': 'V',
    'в': 'v',
    'Г': 'H',
    'г': 'h',
    'Ґ': 'G',
    'ґ': 'g',
    'Д': 'D',
    'д': 'd',
    'Дь': 'Ď',
    'Дє': 'Ďe',
    'Ді': 'Ďi',
    'Дю': 'Ďu',
    'Дя': 'Ďa',
    'дь': 'ď',
    'дє': 'ďe',
    'ді': 'ďi',
    'дю': 'ďu',
    'дя': 'ďa',
    'Е': 'E',
    'е': 'e',
    'Є': 'Je',
    'є': 'je',
    'Ж': 'Ž',
    'ж': 'ž',
    'З': 'Z',
    'з': 'z',
    'Зь': 'Ź',
    'Зє': 'Źe',
    'Зі': 'Źi',
    'Зю': 'Źu',
    'Зя': 'Źa',
    'зь': 'ź',
    'зє': 'źe',
    'зі': 'źi',
    'зю': 'źu',
    'зя': 'źa',
    'И': 'Y',
    'и': 'y',
    'І': 'I',
    'і': 'i',
    'Ї': 'Ji',
    'ї': 'ji',
    'Й': 'J',
    'й': 'j',
    'К': 'K',
    'к': 'k',
    'Л': 'L',
    'л': 'l',
    'Ль': 'Ľ',
    'Лє': 'Ľe',
    'Лі': 'Ľi',
    'Лю': 'Ľu',
    'Ля': 'Ľa',
    'ль': 'ľ',
    'лє': 'ľe',
    'лі': 'ľi',
    'лю': 'ľu',
    'ля': 'ľa',
    'М': 'M',
    'м': 'm',
    'Н': 'N',
    'н': 'n',
    'Нь': 'Ń',
    'Нє': 'Ńe',
    'Ні': 'Ńi',
    'Ню': 'Ńu',
    'Ня': 'Ńa',
    'нь': 'ń',
    'нє': 'ńe',
    'ні': 'ńi',
    'ню': 'ńu',
    'ня': 'ńa',
    'О': 'O',
    'о': 'o',
    'П': 'P',
    'п': 'p',
    'Р': 'R',
    'р': 'r',
    'Рь': 'Ŕ',
    'Рє': 'Ŕe',
    'Рі': 'Ŕi',
    'Рю': 'Ŕu',
    'Ря': 'Ŕa',
    'Рь': 'Ŕ',
    'рь': 'ŕ',
    'рє': 'ŕe',
    'рі': 'ŕi',
    'рю': 'ŕu',
    'ря': 'ŕa',
    'С': 'S',
    'с': 's',
    'Сь': 'Ś',
    'Сє': 'Śe',
    'Сі': 'Śi',
    'Сю': 'Śu',
    'Ся': 'Śa',
    'сь': 'ś',
    'сє': 'śe',
    'сі': 'śi',
    'сю': 'śu',
    'ся': 'śa',
    'Т': 'T',
    'т': 't',
    'Ть': 'Ť',
    'Тє': 'Ťe',
    'Ті': 'Ťi',
    'Тю': 'Ťu',
    'Тя': 'Ťa',
    'ть': 'ť',
    'тє': 'ťe',
    'ті': 'ťi',
    'тю': 'ťu',
    'тя': 'ťa',
    'У': 'U',
    'у': 'u',
    'Ф': 'F',
    'ф': 'f',
    'Х': 'X',
    'х': 'x',
    'Ц': 'C',
    'ц': 'c',
    'Ць': 'Ć',
    'Цє': 'Će',
    'Ці': 'Ći',
    'Цю': 'Ću',
    'Ця': 'Ća',
    'ць': 'ć',
    'цє': 'će',
    'ці': 'ći',
    'цю': 'ću',
    'ця': 'ća',
    'Ч': 'Č',
    'ч': 'č',
    'Ш': 'Š',
    'ш': 'š',
    'Щ': 'Šč',
    'щ': 'šč',
    'Ю': 'Ju',
    'ю': 'ju',
    'Я': 'Ja',
    'я': 'ja',
  };

  var transliterate = function transliterate(text, transTable) {
    var outputText = '';

    var i = 0;
    while (i < text.length) {
      if ((i < text.length - 1) && (transTable.hasOwnProperty(text[i] + text[i+1]))) {
        outputText += transTable[text[i] + text[i+1]];
        i++;
      } else if (transTable.hasOwnProperty(text[i])) {
        outputText += transTable[text[i]];
      } else {
        outputText += text[i];
      }

      i++;
    }

    return outputText;
  };

  var all = document.getElementsByTagName('*');
  for (var i=0, max=all.length; i < max; i++) {
    node = all[i];
    for (var j=0; j < node.childNodes.length; j++) {
      childNode = node.childNodes[j];
      if (childNode.nodeType == Node.TEXT_NODE && childNode.nodeValue.trim() != '') {
        childNode.nodeValue = transliterate(childNode.nodeValue, translateTable);
      }
    }
  }

})();
