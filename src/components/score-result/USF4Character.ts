// Import all the necessary character images
// import abelAvatar from '/../assets/characters-icon/USF4-character/abel-icon.png';
// import adonAvatar from '../../assets/characters-icon/USF4-character/adon-icon.png';
// import akumaAvatar from '../../assets/characters-icon/USF4-character/akuma-icon.png';
// import balrogAvatar from '../../assets/characters-icon/USF4-character/balrog-icon.png';
// import blankaAvatar from '../../assets/characters-icon/USF4-character/blanka-icon.png';
// import viperAvatar from '../../assets/characters-icon/USF4-character/viper-icon.png';
// import cammyAvatar from '../../assets/characters-icon/USF4-character/cammy-icon.png';
// import chunliAvatar from '../../assets/characters-icon/USF4-character/chun-li-icon.png';
// import codyAvatar from '../../assets/characters-icon/USF4-character/cody-icon.png';
// import danAvatar from '../../assets/characters-icon/USF4-character/dan-icon.png';
// import decapreAvatar from '../../assets/characters-icon/USF4-character/decapre-icon.png';
// import deejayAvatar from '../../assets/characters-icon/USF4-character/dee-jay-icon.png';
// import dhalsimAvatar from '../../assets/characters-icon/USF4-character/dhalsim-icon.png';
// import dudleyAvatar from '../../assets/characters-icon/USF4-character/dudley-icon.png';
// import ehondaAvatar from '../../assets/characters-icon/USF4-character/e-honda-icon.png';
// import elfuerteAvatar from '../../assets/characters-icon/USF4-character/el-fuerte-icon.png';
// import elenaAvatar from '../../assets/characters-icon/USF4-character/elena-icon.png';
// import evilryuAvatar from '../../assets/characters-icon/USF4-character/evil-ryu-icon.png';
// import feilongAvatar from '../../assets/characters-icon/USF4-character/fei-long-icon.png';
// import genAvatar from '../../assets/characters-icon/USF4-character/gen-icon.png';
// import goukenAvatar from '../../assets/characters-icon/USF4-character/gouken-icon.png';
// import guileAvatar from '../../assets/characters-icon/USF4-character/guile-icon.png';
// import guyAvatar from '../../assets/characters-icon/USF4-character/guy-icon.png';
// import hakanAvatar from '../../assets/characters-icon/USF4-character/hakan-icon.png';
// import hugoAvatar from '../../assets/characters-icon/USF4-character/hugo-icon.png';
// import ibukiAvatar from '../../assets/characters-icon/USF4-character/ibuki-icon.png';
// import juriAvatar from '../../assets/characters-icon/USF4-character/juri-icon.png';
// import kenAvatar from '../../assets/characters-icon/USF4-character/ken-icon.png';
import bisonAvatar from '../../assets/characters-icon/USF4-characters/bison-icon.png';
// import makotoAvatar from '../../assets/characters-icon/USF4-character/makoto-icon.png';
// import oniAvatar from '../../assets/characters-icon/USF4-character/oni-icon.png';
// import poisonAvatar from '../../assets/characters-icon/USF4-character/poison-icon.png';
// import rolentoAvatar from '../../assets/characters-icon/USF4-character/rolento-icon.png';
// import roseAvatar from '../../assets/characters-icon/USF4-character/rose-icon.png';
// import rufusAvatar from '../../assets/characters-icon/USF4-character/rufus-icon.png';
// import ryuAvatar from '../../assets/characters-icon/USF4-character/ryu-icon.png';
// import sagatAvatar from '../../assets/characters-icon/USF4-character/sagat-icon.png';
// import sakuraAvatar from '../../assets/characters-icon/USF4-character/sakura-icon.png';
// import sethAvatar from '../../assets/characters-icon/USF4-character/seth-icon.png';
// import thawkAvatar from '../../assets/characters-icon/USF4-character/t-hawk-icon.png';
// import vegaAvatar from '../../assets/characters-icon/USF4-character/vega-icon.png';
// import yangAvatar from '../../assets/characters-icon/USF4-character/yang-icon.png';
// import yunAvatar from '../../assets/characters-icon/USF4-character/yun-icon.png';
// import zangiefAvatar from '../../assets/characters-icon/USF4-character/zangief-icon.png';
import { CharacterName } from '../../contexts/CharacterContext';

export type USF4Character = 
    | "Abel"
    | "Adon"
    | "Akuma"
    | "Balrog"
    | "Blanka"
    | "Viper"
    | "Cammy"
    | "Chun-Li"
    | "Cody"
    | "Dan"
    | "Decapre"
    | "Dee-Jay"
    | "Dhalsim"
    | "Dudley"
    | "E-Honda"
    | "El-Fuerte"
    | "Elena"
    | "Evil-Ryu"
    | "Fei-Long"
    | "Gen"
    | "Gouken"
    | "Guile"
    | "Guy"
    | "Hakan"
    | "Hugo"
    | "Ibuki"
    | "Juri"
    | "Ken"
    | "Bison"
    | "Makoto"
    | "Oni"
    | "Poison"
    | "Rolento"
    | "Rose"
    | "Rufus"
    | "Ryu"
    | "Sagat"
    | "Sakura"
    | "Seth"
    | "T-Hawk"
    | "Vega"
    | "Yang"
    | "Yun"
    | "Zangief";

    export type CharacterIcon = {character: USF4Character, src: string}
// Create the avatars array without the theme property
export const characterIcons: CharacterIcon[]= [
    // { character: 'Abel', src: abelAvatar },
    // { character: 'Adon', src: adonAvatar },
    // { character: 'Akuma', src: akumaAvatar },
    // { character: 'Balrog', src: balrogAvatar },
    // { character: 'Blanka', src: blankaAvatar },
    // { character: 'C. Viper', src: viperAvatar },
    // { character: 'Cammy', src: cammyAvatar },
    // { character: 'Chun-Li', src: chunliAvatar },
    // { character: 'Cody', src: codyAvatar },
    // { character: 'Dan', src: danAvatar },
    // { character: 'Decapre', src: decapreAvatar },
    // { character: 'Dee Jay', src: deejayAvatar },
    // { character: 'Dhalsim', src: dhalsimAvatar },
    // { character: 'Dudley', src: dudleyAvatar },
    // { character: 'E. Honda', src: ehondaAvatar },
    // { character: 'El Fuerte', src: elfuerteAvatar },
    // { character: 'Elena', src: elenaAvatar },
    // { character: 'Evil Ryu', src: evilryuAvatar },
    // { character: 'Fei Long', src: feilongAvatar },
    // { character: 'Gen', src: genAvatar },
    // { character: 'Gouken', src: goukenAvatar },
    // { character: 'Guile', src: guileAvatar },
    // { character: 'Guy', src: guyAvatar },
    // { character: 'Hakan', src: hakanAvatar },
    // { character: 'Hugo', src: hugoAvatar },
    // { character: 'Ibuki', src: ibukiAvatar },
    // { character: 'Juri', src: juriAvatar },
    // { character: 'Ken', src: kenAvatar },
    { character: 'Bison', src: bisonAvatar },
    // { character: 'Makoto', src: makotoAvatar },
    // { character: 'Oni', src: oniAvatar },
    // { character: 'Poison', src: poisonAvatar },
    // { character: 'Rolento', src: rolentoAvatar },
    // { character: 'Rose', src: roseAvatar },
    // { character: 'Rufus', src: rufusAvatar },
    // { character: 'Ryu', src: ryuAvatar },
    // { character: 'Sagat', src: sagatAvatar },
    // { character: 'Sakura', src: sakuraAvatar },
    // { character: 'Seth', src: sethAvatar },
    // { character: 'T. Hawk', src: thawkAvatar },
    // { character: 'Vega', src: vegaAvatar },
    // { character: 'Yang', src: yangAvatar },
    // { character: 'Yun', src: yunAvatar },
    // { character: 'Zangief', src: zangiefAvatar },
];
