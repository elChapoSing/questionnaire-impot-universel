// Extrait COUNTRY_DATA de index.html et les noms français : sortie JSON.
const fs=require('fs');
const s=fs.readFileSync(process.argv[2],'utf8');
const a=s.indexOf('var COUNTRY_DATA = {'); const b=s.indexOf('\n};',a)+3;
const O="officielle",N="non officielle";
const D=eval('('+s.slice(a+'var COUNTRY_DATA = '.length,b-1)+')');
const dn=new Intl.DisplayNames(['fr'],{type:'region'});
const names={}; for(const c of Object.keys(D)) names[c]=({HK:"Hong Kong (Chine)",MO:"Macao (Chine)"})[c]||dn.of(c);
console.log(JSON.stringify({D,names}));
