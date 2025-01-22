// Import all the necessary character images
import unknownAvatar from '../../assets/characters-icon/USF4-characters/unknown-icon.png';
import abelAvatar from '../../assets/characters-icon/USF4-characters/abel-icon.png';
import adonAvatar from '../../assets/characters-icon/USF4-characters/adon-icon.png';
import akumaAvatar from '../../assets/characters-icon/USF4-characters/akuma-icon.png';
import balrogAvatar from '../../assets/characters-icon/USF4-characters/balrog-icon.png';
import blankaAvatar from '../../assets/characters-icon/USF4-characters/blanka-icon.png';
import viperAvatar from '../../assets/characters-icon/USF4-characters/viper-icon.png';
import cammyAvatar from '../../assets/characters-icon/USF4-characters/cammy-icon.png';
import chunliAvatar from '../../assets/characters-icon/USF4-characters/chun-li-icon.png';
import codyAvatar from '../../assets/characters-icon/USF4-characters/cody-icon.png';
import danAvatar from '../../assets/characters-icon/USF4-characters/dan-icon.png';
import decapreAvatar from '../../assets/characters-icon/USF4-characters/decapre-icon.png';
import deejayAvatar from '../../assets/characters-icon/USF4-characters/deejay-icon.png';
import dhalsimAvatar from '../../assets/characters-icon/USF4-characters/dhalsim-icon.png';
import dudleyAvatar from '../../assets/characters-icon/USF4-characters/dudley-icon.png';
import ehondaAvatar from '../../assets/characters-icon/USF4-characters/e-honda-icon.png';
import elfuerteAvatar from '../../assets/characters-icon/USF4-characters/el-fuerte-icon.png';
import elenaAvatar from '../../assets/characters-icon/USF4-characters/elena-icon.png';
import evilryuAvatar from '../../assets/characters-icon/USF4-characters/evil-ryu-icon.png';
import feilongAvatar from '../../assets/characters-icon/USF4-characters/fei-long-icon.png';
import genAvatar from '../../assets/characters-icon/USF4-characters/gen-icon.png';
import goukenAvatar from '../../assets/characters-icon/USF4-characters/gouken-icon.png';
import guileAvatar from '../../assets/characters-icon/USF4-characters/guile-icon.png';
import guyAvatar from '../../assets/characters-icon/USF4-characters/guy-icon.png';
import hakanAvatar from '../../assets/characters-icon/USF4-characters/hakan-icon.png';
import hugoAvatar from '../../assets/characters-icon/USF4-characters/hugo-icon.png';
import ibukiAvatar from '../../assets/characters-icon/USF4-characters/ibuki-icon.png';
import juriAvatar from '../../assets/characters-icon/USF4-characters/juri-icon.png';
import kenAvatar from '../../assets/characters-icon/USF4-characters/ken-icon.png';
import bisonAvatar from '../../assets/characters-icon/USF4-characters/bison-icon.png';
import makotoAvatar from '../../assets/characters-icon/USF4-characters/makoto-icon.png';
import oniAvatar from '../../assets/characters-icon/USF4-characters/oni-icon.png';
import poisonAvatar from '../../assets/characters-icon/USF4-characters/poison-icon.png';
import rolentoAvatar from '../../assets/characters-icon/USF4-characters/rolento-icon.png';
import roseAvatar from '../../assets/characters-icon/USF4-characters/rose-icon.png';
import rufusAvatar from '../../assets/characters-icon/USF4-characters/rufus-icon.png';
import ryuAvatar from '../../assets/characters-icon/USF4-characters/ryu-icon.png';
import sagatAvatar from '../../assets/characters-icon/USF4-characters/sagat-icon.png';
import sakuraAvatar from '../../assets/characters-icon/USF4-characters/sakura-icon.png';
import sethAvatar from '../../assets/characters-icon/USF4-characters/seth-icon.png';
import thawkAvatar from '../../assets/characters-icon/USF4-characters/t-hawk-icon.png';
import vegaAvatar from '../../assets/characters-icon/USF4-characters/vega-icon.png';
import yangAvatar from '../../assets/characters-icon/USF4-characters/yang-icon.png';
import yunAvatar from '../../assets/characters-icon/USF4-characters/yun-icon.png';
import zangiefAvatar from '../../assets/characters-icon/USF4-characters/zangief-icon.png';
import { CharacterName } from '../../contexts/CharacterContext';

export type USF4Character =
  | 'UNKNOWN'
  | 'Abel'
  | 'Adon'
  | 'Akuma'
  | 'Balrog'
  | 'Blanka'
  | 'Viper'
  | 'Cammy'
  | 'Chun-Li'
  | 'Cody'
  | 'Dan'
  | 'Decapre'
  | 'Dee-Jay'
  | 'Dhalsim'
  | 'Dudley'
  | 'E-Honda'
  | 'El-Fuerte'
  | 'Elena'
  | 'Evil-Ryu'
  | 'Fei-Long'
  | 'Gen'
  | 'Gouken'
  | 'Guile'
  | 'Guy'
  | 'Hakan'
  | 'Hugo'
  | 'Ibuki'
  | 'Juri'
  | 'Ken'
  | 'Bison'
  | 'Makoto'
  | 'Oni'
  | 'Poison'
  | 'Rolento'
  | 'Rose'
  | 'Rufus'
  | 'Ryu'
  | 'Sagat'
  | 'Sakura'
  | 'Seth'
  | 'T-Hawk'
  | 'Vega'
  | 'Yang'
  | 'Yun'
  | 'Zangief';

export type CharacterIcon = { character: USF4Character; src: string };
// Create the avatars array without the theme property
export const characterIcons: CharacterIcon[] = [
  { character: 'UNKNOWN', src: unknownAvatar },
  { character: 'Abel', src: abelAvatar },
  { character: 'Adon', src: adonAvatar },
  { character: 'Akuma', src: akumaAvatar },
  { character: 'Balrog', src: balrogAvatar },
  { character: 'Blanka', src: blankaAvatar },
  { character: 'Viper', src: viperAvatar },
  { character: 'Cammy', src: cammyAvatar },
  { character: 'Chun-Li', src: chunliAvatar },
  { character: 'Cody', src: codyAvatar },
  { character: 'Dan', src: danAvatar },
  { character: 'Decapre', src: decapreAvatar },
  { character: 'Dee-Jay', src: deejayAvatar },
  { character: 'Dhalsim', src: dhalsimAvatar },
  { character: 'Dudley', src: dudleyAvatar },
  { character: 'E-Honda', src: ehondaAvatar },
  { character: 'El-Fuerte', src: elfuerteAvatar },
  { character: 'Elena', src: elenaAvatar },
  { character: 'Evil-Ryu', src: evilryuAvatar },
  { character: 'Fei-Long', src: feilongAvatar },
  { character: 'Gen', src: genAvatar },
  { character: 'Gouken', src: goukenAvatar },
  { character: 'Guile', src: guileAvatar },
  { character: 'Guy', src: guyAvatar },
  { character: 'Hakan', src: hakanAvatar },
  { character: 'Hugo', src: hugoAvatar },
  { character: 'Ibuki', src: ibukiAvatar },
  { character: 'Juri', src: juriAvatar },
  { character: 'Ken', src: kenAvatar },
  { character: 'Bison', src: bisonAvatar },
  { character: 'Makoto', src: makotoAvatar },
  { character: 'Oni', src: oniAvatar },
  { character: 'Poison', src: poisonAvatar },
  { character: 'Rolento', src: rolentoAvatar },
  { character: 'Rose', src: roseAvatar },
  { character: 'Rufus', src: rufusAvatar },
  { character: 'Ryu', src: ryuAvatar },
  { character: 'Sagat', src: sagatAvatar },
  { character: 'Sakura', src: sakuraAvatar },
  { character: 'Seth', src: sethAvatar },
  { character: 'T-Hawk', src: thawkAvatar },
  { character: 'Vega', src: vegaAvatar },
  { character: 'Yang', src: yangAvatar },
  { character: 'Yun', src: yunAvatar },
  { character: 'Zangief', src: zangiefAvatar },
];
