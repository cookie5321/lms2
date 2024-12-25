function getByteLength(str) {
    return new TextEncoder().encode(str).length;
}

module.exports = { getByteLength};