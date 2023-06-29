function printerError(s) {
    return s.match(/[^A-M]/gi) == null ? `0/${s.length}` : `${s.match(/[^A-M]/gi).length}/${s.length}`;
}