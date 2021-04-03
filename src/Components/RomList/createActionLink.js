function ids2hash(ids=[]) {
    if (ids.length == 0) return "";
    // Получаем максимальное значение
    ids = ids.sort((x, y) => x -  y);
    var max_id = ids[ids.length - 1];
    var hash = "";
    var curhash = 0;
    // Перебираем все возможные ID    
    for(var i = 0; i <= max_id; i++) {
        if (ids.includes(i)) {
            // Если ID игры есть в списке, устанавливаем её бит
            curhash |= 1 << (i % 8);
        }
        if (((i % 8) == 7) || (i == max_id)) {
            // костыль для преобразования curhash в hex строго длины 2
            hash = hash + (curhash+0x100).toString(16).substr(-2).toUpperCase();
            curhash = 0;
        }
    }
    // В резльтате получается очень много нулей, группируем их символами, которые отсутствуют в шестнадцатеричном наборе
    hash = hash.replaceAll("00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", "T");
    hash = hash.replaceAll("0000000000000000000000000000000000000000000000000000000000000000", "U");
    hash = hash.replaceAll("00000000000000000000000000000000", "V");
    hash = hash.replaceAll("0000000000000000", "W");
    hash = hash.replaceAll("00000000", "X");
    hash = hash.replaceAll("0000", "Y");
    hash = hash.replaceAll("00", "Z");
    return hash;
}

console.log(ids2hash([1,5,100,153,6743]))

export default ids2hash;