// Lit un fichier de lot (entrées JS "CODE: { ... }") et écrit les data.json correspondants via build.py.
const fs=require('fs');
const O="officielle",N="non officielle";
const D=eval('({'+fs.readFileSync(process.argv[2],'utf8')+'})');
const dn=new Intl.DisplayNames(['fr'],{type:'region'});
const names={}; for(const c of Object.keys(D)) names[c]=({HK:"Hong Kong (Chine)",MO:"Macao (Chine)"})[c]||dn.of(c);
console.log(JSON.stringify({D,names}));
