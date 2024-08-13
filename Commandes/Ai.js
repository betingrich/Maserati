const _0x52f601 = _0x46d4;
function _0x46d4(_0x16480b, _0x4281c7) {
    const _0x1e4eef = _0x1e4e();
    return _0x46d4 = function(_0x46d4ee, _0x5368ba) {
        _0x46d4ee = _0x46d4ee - 0x1bc;
        let _0x3a0e49 = _0x1e4eef[_0x46d4ee];
        return _0x3a0e49;
    }, _0x46d4(_0x16480b, _0x4281c7);
}(function(_0x46d566, _0x353948) {
    const _0x36f99d = _0x46d4, _0xc3fc41 = _0x46d566();
    while (true) {
        try {
            const _0x531dd8 = -parseInt(_0x36f99d(0x1e0)) / 0x1
                - parseInt(_0x36f99d(0x1d5)) / 0x2
                + parseInt(_0x36f99d(0x1c8)) / 0x3
                + parseInt(_0x36f99d(0x1dd)) / 0x4
                - parseInt(_0x36f99d(0x1c4)) / 0x5
                - parseInt(_0x36f99d(0x1dc)) / 0x6
                - parseInt(_0x36f99d(0x1c6)) / 0x7
                * (-parseInt(_0x36f99d(0x1c0)) / 0x8);
            if (_0x531dd8 === _0x353948) break;
            else _0xc3fc41.push(_0xc3fc41.shift());
        } catch (_0x269602) {
            _0xc3fc41.push(_0xc3fc41.shift());
        }
    }
}(_0x1e4e, 0x7f95e));

const { zokou } = require(_0x52f601(0x1cf)),
    traduire = require('../framework/traduction'),
    s = require('../set'),
    axios = require('axios');

function _0x1e4e() {
    const _0xd4629e = [
        '19790408UCcTsP', 'gpt', 'Error generating image',
        'yes my brother how are you, Maserati is listening to you today.',
        '4999680FSciuZ', 'Please enter the necessary information to generate the image.',
        '7hodrSl', 'catch', '2434812PyJeZu', 'status',
        'then', 'message', 'cnt', 'data',
        'Error translating to French', '../framework/zokou',
        'result', 'json', 'sendMessage',
        'Oops, an error occurred while processing your request.',
        'Error making request to BrainShop:', '1784748mccBsV',
        'length', 'log', 'chat', 'Error generating response',
        'Error:', 'get', '2280120usrQKC', '950292svYViQ',
        'dalle', 'Error making request to BrainShop', '728058qAOKKA',
        'error', 'https://api.maher-zubair.tech/ai/photoleap?q=', 'join',
        'Error translating to French:', 'http://api.brainshop.ai/get?bid=177607&key=NwzhALqeO1kubFVD&uid=[uid]&msg=',
        '*𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 𝐌𝐚𝐬𝐞𝐫𝐚𝐭𝐢*'
    ];
    _0x1e4e = function () { return _0xd4629e; };
    return _0x1e4e();
}

zokou({ 'nomCom': 'bot', 'reaction': '📡', 'categorie': 'IA' }, async (_0x1e110f, _0x327563, _0x45df69) => {
    const _0x3c07e8 = _0x52f601,
        { repondre: _0x34f327, ms: _0x1352bf, arg: _0x57e1f8 } = _0x45df69;

    if (!_0x57e1f8 || !_0x57e1f8[0]) return _0x34f327(_0x3c07e8(0x1c3));

    try {
        const _0x4e3366 = await traduire(_0x57e1f8[_0x3c07e8(0x1bc)](' '), { 'to': 'en' });
        console.log(_0x4e3366);
        fetch(_0x3c07e8(0x1be) + _0x4e3366)
            .then(_0xc80847 => _0xc80847.json())
            .then(_0x294286 => {
                const _0x1f8935 = _0x3c07e8,
                    _0x368f6e = _0x294286[_0x1f8935(0x1cc)];
                console.log(_0x368f6e);
                traduire(_0x368f6e, { 'to': 'fr' })
                    .then(_0x206e1c => {
                        _0x34f327(_0x206e1c);
                    })
                    .catch(_0x560add => {
                        const _0x59b8ee = _0x1f8935;
                        console.error(_0x59b8ee(0x1bd), _0x560add);
                        _0x34f327(_0x59b8ee(0x1ce));
                    });
            })
            .catch(_0x33b793 => {
                const _0x1aa64d = _0x3c07e8;
                console.error(_0x1aa64d(0x1d4), _0x33b793);
                _0x34f327(_0x1aa64d(0x1df));
            });
    } catch (_0x43261a) {
        _0x34f327('Oops, an error: ' + _0x43261a);
    }
});

zokou({ 'nomCom': _0x52f601(0x1de), 'reaction': '💎', 'categorie': 'IA' }, async (_0xc8b7cc, _0x479cac, _0x9bff72) => {
    const _0x408567 = _0x52f601,
        { repondre: _0x1d5e45, arg: _0x44fb1e, ms: _0x80364 } = _0x9bff72;

    try {
        if (!_0x44fb1e || _0x44fb1e[_0x408567(0x1d6)] === 0) return _0x1d5e45(_0x408567(0x1c5));

        const _0x108d8d = _0x44fb1e[_0x408567(0x1bc)](' '),
            _0x239a88 = await axios.get(_0x408567(0x1e2) + _0x108d8d),
            _0x4c2f08 = _0x239a88.data;
        let _0xe8b4d3 = _0x408567(0x1bf);

        if (_0x4c2f08[_0x408567(0x1c9)] && _0x4c2f08['result']) {
            const _0x5e6259 = _0x4c2f08[_0x408567(0x1d0)];
            _0x479cac[_0x408567(0x1d2)](_0xc8b7cc, { 'image': { 'url': _0x5e6259 }, 'caption': _0xe8b4d3 }, { 'quoted': _0x80364 });
        } else {
            _0x1d5e45(_0x408567(0x1c2));
        }
    } catch (_0x2cb13b) {
        console.error('Error:', _0x2cb13b.message || 'An error occurred');
        _0x1d5e45('Oops, an error occurred while processing your request.');
    }
});

zokou({ 'nomCom': _0x52f601(0x1c1), 'reaction': '🌐', 'categorie': 'IA' }, async (_0x51feb8, _0x30a2b4, _0xa6096b) => {
    const _0x34085d = _0x52f601,
        { repondre: _0x26cecd, arg: _0x53fa92, ms: _0x991573 } = _0xa6096b;

    try {

          
