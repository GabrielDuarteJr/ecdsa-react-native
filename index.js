// No topo do arquivo principal da biblioteca
import 'react-native-get-random-values';
import 'react-native-crypto';

exports.Signature = require("./ellipticcurve/signature").Signature;
exports.PublicKey = require("./ellipticcurve/publicKey").PublicKey;
exports.PrivateKey = require("./ellipticcurve/privateKey").PrivateKey;
exports.Ecdsa = require("./ellipticcurve/ecdsa");
exports.utils = require("./ellipticcurve/utils/utils");
