function stringDNA(dna) {
    let nonCanonicalDNA = [];

    for (let i = 0; i < dna.length; i++) {
        if (
            nonCanonicalDNA.join("").search(dna.charAt(i)) == -1 &&
            dna.charAt(i) === dna.charAt(i).toUpperCase()
        ) {
            nonCanonicalDNA.push(dna.charAt(i));
        }
    }

    return nonCanonicalDNA.join('');
}

module.exports = stringDNA;
