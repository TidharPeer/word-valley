/* Offline, deterministic practice generator. Finite reviewed templates combine
 * into repeatable rounds; this does not claim unlimited unique English content.
 * makeRound(grade, seed, round) => {level, mazeSeed:uint32, layoutVariant:0..2}.
 * grade: 3..6 (default 3); seed: finite number converted to uint32 (default 1);
 * round: finite integer >=1 (default 1). Options and translations stay parallel.
 */
(() => {
  'use strict';
  const vocabulary = [
    ['apple','תפוח','fruit','פרי','an'],['orange','תפוז','fruit','פרי','an'],
    ['banana','בננה','fruit','פרי','a'],['carrot','גזר','vegetable','ירק','a'],
    ['elephant','פיל','animal','בעל חיים','an'],['rabbit','ארנב','animal','בעל חיים','a'],
    ['tiger','טיגריס','animal','בעל חיים','a'],['owl','ינשוף','animal','בעל חיים','an'],
    ['chair','כיסא','furniture','רהיט','a'],['table','שולחן','furniture','רהיט','a'],
    ['sofa','ספה','furniture','רהיט','a'],['bed','מיטה','furniture','רהיט','a'],
    ['jacket','מעיל','clothing','בגד','a'],['shirt','חולצה','clothing','בגד','a'],
    ['hat','כובע','clothing','בגד','a'],['dress','שמלה','clothing','בגד','a'],
    ['umbrella','מטרייה','object','חפץ','an'],['pencil','עיפרון','object','חפץ','a'],
    ['notebook','מחברת','object','חפץ','a'],['eraser','מחק','object','חפץ','an']
  ];
  const people = [['Maya','מאיה','she'],['Ben','בן','he'],['Sara','שרה','she'],['Tom','טום','he'],['Nora','נורה','she'],['Leo','ליאו','he'],['Anna','אנה','she'],['Dan','דן','he']];
  const actions = [
    ['visit','visits','visited','the museum','לבקר במוזיאון','ביקר/ה במוזיאון'],
    ['clean','cleans','cleaned','the room','לנקות את החדר','ניקה/תה את החדר'],
    ['paint','paints','painted','a picture','לצייר תמונה','צייר/ה תמונה'],
    ['open','opens','opened','the window','לפתוח את החלון','פתח/ה את החלון'],
    ['watch','watches','watched','a film','לצפות בסרט','צפה/תה בסרט'],
    ['wash','washes','washed','the car','לשטוף את המכונית','שטף/ה את המכונית'],
    ['carry','carries','carried','a bag','לשאת תיק','נשא/ה תיק'],
    ['read','reads','read','a book','לקרוא ספר','קרא/ה ספר']
  ];
  const colors=[['red','אדום'],['blue','כחול'],['green','ירוק'],['yellow','צהוב'],['purple','סגול'],['black','שחור']];
  const places=[['on the table','על השולחן'],['under the chair','מתחת לכיסא'],['in the box','בתוך הקופסה'],['behind the door','מאחורי הדלת'],['next to the bed','ליד המיטה'],['under the bed','מתחת למיטה']];
  const times=[['Monday','יום שני'],['Tuesday','יום שלישי'],['Wednesday','יום רביעי'],['Thursday','יום חמישי'],['Friday','יום שישי'],['Sunday','יום ראשון']];
  const comparisons=[
    ['An elephant','A rabbit','heavier','heavy','heaviest','heavily','פיל כבד יותר מארנב.'],
    ['A rabbit','An elephant','smaller','small','smallest','smallly','ארנב קטן יותר מפיל.'],
    ['A giraffe','A cat','taller','tall','tallest','tallly','ג׳ירפה גבוהה יותר מחתול.'],
    ['A car','A bicycle','faster','fast','fastest','fastly','מכונית מהירה יותר מאופניים.'],
    ['An ocean','A swimming pool','deeper','deep','deepest','deeply','אוקיינוס עמוק יותר מבריכת שחייה.'],
    ['A mountain','A hill','higher','high','highest','highly','הר גבוה יותר מגבעה.']
  ];
  const worlds=[['forest','יער התגליות','Discoveries in the Forest'],['castle','טירת האתגרים','Castle Challenges'],['sky','מסע בשמיים','Sky Journey']];
  const verbsHe={
    visit:[['ביקר','ביקרה'],['יבקר','תבקר']],clean:[['ניקה','ניקתה'],['ינקה','תנקה']],
    paint:[['צייר','ציירה'],['יצייר','תצייר']],open:[['פתח','פתחה'],['יפתח','תפתח']],
    watch:[['צפה','צפתה'],['יצפה','תצפה']],wash:[['שטף','שטפה'],['ישטוף','תשטוף']],
    carry:[['נשא','נשאה'],['יישא','תישא']],read:[['קרא','קראה'],['יקרא','תקרא']]
  };
  const objectsHe={visit:'במוזיאון',clean:'את החדר',paint:'תמונה',open:'את החלון',watch:'בסרט',wash:'את המכונית',carry:'תיק',read:'ספר'};
  function normalizeGrade(value){ const n=Number(value);return [3,4,5,6].includes(n)?n:3; }
  function normalizeSeed(value){ const n=Number(value);return Number.isFinite(n)?n>>>0:1; }
  function normalizeRound(value){ const n=Number(value);return Number.isFinite(n)?Math.min(Number.MAX_SAFE_INTEGER,Math.max(1,Math.floor(n))):1; }
  function mix(n){n=Math.imul(n^(n>>>16),0x21f0aaad);n=Math.imul(n^(n>>>15),0x735a2d97);return (n^(n>>>15))>>>0;}
  function rng(seed){let n=seed;return ()=>{n=(n+0x6d2b79f5)>>>0;let t=Math.imul(n^(n>>>15),n|1);t^=t+Math.imul(t^(t>>>7),t|61);return ((t^(t>>>14))>>>0)/4294967296;};}
  function makeRound(grade,seed,round){
    grade=normalizeGrade(grade);seed=normalizeSeed(seed);round=normalizeRound(round);
    const roundHash=mix((round>>>0)^mix(Math.floor(round/4294967296)));
    const random=rng(mix(seed^roundHash^Math.imul(grade,7919)));
    const pick=a=>a[Math.floor(random()*a.length)];
    // Cyclic anchor guarantees adjacent rounds use a different core vocabulary item.
    const word=vocabulary[(mix(seed^grade)%vocabulary.length+(round-1)%vocabulary.length)%vocabulary.length];
    const person=pick(people),action=pick(actions),day=pick(times);
    const female=person[2]==='she',gender=female?1:0;
    const verbHe=(a,future=false)=>verbsHe[a[0]][future?1:0][gender]+' '+objectsHe[a[0]];
    const prefix=`endless-g${grade}-s${seed}-r${round}`;
    const challenges=[];
    function add(type,prompt,promptHe,options,translations,correct,explanation,explanationHe,translationHe,speak){
      const pairs=options.map((text,i)=>({text,he:translations[i],correct:i===correct}));
      for(let i=pairs.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[pairs[i],pairs[j]]=[pairs[j],pairs[i]];}
      const c={id:`${prefix}-q${challenges.length+1}`,type,prompt,promptHe,
        options:pairs.map(p=>p.text),optionsHe:pairs.map(p=>p.he),optionTranslations:pairs.map(p=>p.he),
        answer:pairs.findIndex(p=>p.correct),explanation,explanationHe,translationHe};
      if(speak){c.speak=speak;c.speakTranslationHe=translationHe;}
      challenges.push(c);
    }
    // Vocabulary: every meaning is explicitly paired with one English word.
    const distractors=vocabulary.filter(v=>v[0]!==word[0]);
    const others=[];while(others.length<3){const candidate=pick(distractors);if(!others.includes(candidate))others.push(candidate);}
    const words=[word,...others];
    add('vocabulary',`Which word means “${word[1]}”?`,'בחרו את המילה האנגלית המתאימה למילה בעברית.',
      words.map(w=>w[0]),words.map(w=>w[1]),0,`“${word[0]}” means “${word[1]}”.`,
      `המילה ${word[0]} פירושה ${word[1]}.`,`${word[0]} = ${word[1]}`);

    if(grade===3){
      if(round%2){
        add('grammar',`Complete: “I can see ___ ${word[0]}.”`,'השלימו את המשפט בעזרת a או an לפי הצליל הפותח.',
          ['a','an','am','are'],['a','an','am','are'],word[4]==='a'?0:1,
          `Use “${word[4]}” before “${word[0]}” because of its opening sound.`,
          `לפני ${word[0]} משתמשים ב־${word[4]} לפי הצליל הפותח של המילה.`,`אני יכול/ה לראות ${word[1]}.`);
      }else{
        const plural=round%4===0;
        add('grammar',plural?'Complete: “They ___ happy.”':`Complete: “${person[0]} ___ happy.”`,
          'בחרו את צורת הפועל be המתאימה לנושא.',['is','are','am','be'],['is','are','am','be'],plural?1:0,
          plural?'Use “are” with “they.”':'Use “is” with one person.',
          plural?'עם they משתמשים ב־are.':'עם שם של אדם יחיד משתמשים ב־is.',plural?'הם שמחים.':`${person[1]} ${female?'שמחה':'שמח'}.`);
      }
    }else if(grade===4){
      const negative=round%2===0;
      add('grammar',negative?`Complete in the present simple: “${person[0]} does not ___ ${action[3]}.”`:`Complete in the present simple: “${person[0]} ___ ${action[3]} every week.”`,
        negative?'השלימו את משפט השלילה בהווה פשוט.':'השלימו את המשפט על הרגל שבועי.',
        negative?[action[0],action[1],`${action[0]}ing`, 'to '+action[0]]:[action[1],action[0],'to '+action[0],action[2]===action[0]?'did':action[2]],
        negative?[action[0],action[1],`${action[0]}ing`,'to '+action[0]]:[action[1],action[0],'to '+action[0],action[2]===action[0]?'did':action[2]],0,
        negative?'After “does not,” use the base form of the verb.':'With one named person, use the third-person singular verb for a habit.',
        negative?'אחרי does not משתמשים בצורת הבסיס של הפועל.':'בהווה פשוט מוסיפים s או es לפועל אחרי נושא יחיד; ב־carry האות y מתחלפת ב־ies.',
        `${person[1]} ${negative?'לא ':''}${female?'נוהגת':'נוהג'} ${action[4]}${negative?'':' בכל שבוע'}.`);
    }else if(grade===5){
      // Exclude read here: its written base and past forms are identical.
      const pastAction=pick(actions.slice(0,-1));const negative=round%2===0;
      const opts=negative?[pastAction[0],pastAction[2],pastAction[1],'to '+pastAction[0]]:[pastAction[2],pastAction[0],pastAction[1],'to '+pastAction[0]];
      add('grammar',negative?`Complete: “Yesterday, ${person[0]} did not ___ ${pastAction[3]}.”`:`Complete: “Yesterday, ${person[0]} ___ ${pastAction[3]}.”`,
        'השלימו את המשפט בזמן עבר.',opts,opts,0,
        negative?'After “did not,” use the base form.':`The past form of “${pastAction[0]}” is “${pastAction[2]}”.`,
        negative?'אחרי did not משתמשים בצורת הבסיס של הפועל.':`צורת העבר של ${pastAction[0]} היא ${pastAction[2]}.`,
        `אתמול ${person[1]} ${negative?'לא ':''}${verbHe(pastAction)}.`);
    }else{
      if(round%2){
        const opts=['will','did','was','has'];
        add('grammar',`Complete: “Tomorrow, ${person[0]} ___ ${action[0]} ${action[3]}.”`,'השלימו את המשפט בעתיד.',opts,opts,0,
          'Use “will” followed by the base form for this future action.','בעתיד משתמשים ב־will ובצורת הבסיס של הפועל.',
          `מחר ${person[1]} ${verbHe(action,true)}.`);
      }else{
        const comp=pick(comparisons);const opts=[comp[2],comp[3],comp[4],'is'];
        add('grammar',`Complete: “${comp[0]} is ___ than ${comp[1].toLowerCase()}.”`,'השלימו את ההשוואה בין שני דברים.',opts,opts,0,
          `Use “${comp[2]}” with “than” to compare these two things.`,`בהשוואה בין שני דברים משתמשים בצורה ${comp[2]} עם than.`,comp[6]);
      }
    }

    if(grade===3){
      const color=pick(colors),otherColors=colors.filter(c=>c!==color).slice(0,3);const opts=[color,...otherColors];
      add('listening','Listen. What color is the bag?','האזינו. מה צבע התיק?',opts.map(c=>c[0]),opts.map(c=>c[1]),0,
        `The speaker says the bag is ${color[0]}.`,`צבע התיק הוא ${color[1]}.`,`התיק שלי ${color[1]}.`,`My bag is ${color[0]}.`);
    }else if(grade===4){
      const place=pick(places),otherPlaces=places.filter(p=>p!==place).slice(0,3);const opts=[place,...otherPlaces];
      add('listening','Listen. Where is the book?','האזינו. היכן הספר?',opts.map(p=>p[0]),opts.map(p=>p[1]),0,
        `The book is ${place[0]}.`,`הספר נמצא ${place[1]}.`,`הספר נמצא ${place[1]}.`,`The book is ${place[0]}.`);
    }else{
      const otherDays=times.filter(d=>d!==day).slice(0,3);const opts=[day,...otherDays];
      const speech=grade===5?`${person[0]} visited the museum last ${day[0]}.`:`${person[0]} will visit the museum next ${day[0]}.`;
      const translation=grade===5?`${person[1]} ${female?'ביקרה':'ביקר'} במוזיאון ב${day[1]} שעבר.`:`${person[1]} ${female?'תבקר':'יבקר'} במוזיאון ב${day[1]} הבא.`;
      add('listening',grade===5?'Listen. On which day did the visit happen?':'Listen. On which day will the visit happen?',
        grade===5?'האזינו. באיזה יום התקיים הביקור?':'האזינו. באיזה יום יתקיים הביקור?',opts.map(d=>d[0]),opts.map(d=>d[1]),0,
        `The sentence names ${day[0]} as the day of the visit.`,`המשפט מציין שהביקור הוא ב${day[1]}.`,translation,speech);
    }

    if(grade<=4){
      const location=places[(mix(seed)+round)%places.length],opts=[location,...places.filter(p=>p!==location).slice(0,3)];
      add('vocabulary',`Read: “The pencil is ${location[0]}.” Where is the pencil?`,'קראו את המשפט. היכן העיפרון?',
        opts.map(p=>p[0]),opts.map(p=>p[1]),0,`The sentence says the pencil is ${location[0]}.`,
        `במשפט נאמר שהעיפרון נמצא ${location[1]}.`,`העיפרון נמצא ${location[1]}.`);
    }else{
      const reasons=[
        ['it was raining','it will rain','rain','גשם','ירד גשם','ירד גשם'],
        ['it was cold','it will be cold','cold weather','מזג אוויר קר','היה קר','יהיה קר'],
        ['it was very hot','it will be very hot','very hot weather','מזג אוויר חם מאוד','היה חם מאוד','יהיה חם מאוד'],
        ['there was a storm','there will be a storm','a storm','סערה','הייתה סערה','תהיה סערה']
      ];
      const reason=reasons[(mix(seed^grade)+round)%reasons.length];
      const opts=[reason,...reasons.filter(r=>r!==reason)];
      const sentence=grade===5?`${person[0]} stayed indoors because ${reason[0]}.`:`${person[0]} will stay indoors because ${reason[1]}.`;
      add('vocabulary',`Read: “${sentence}” Why ${grade===5?'did':'will'} ${person[0]} stay indoors?`,
        'קראו את המשפט. מדוע הדמות נשארת בפנים?',opts.map(r=>r[2]),opts.map(r=>r[3]),0,
        `The reason given is ${reason[2]}.`,`הסיבה המפורשת במשפט היא ${reason[3]}.`,
        `${person[1]} ${grade===5?(female?'נשארה':'נשאר'):(female?'תישאר':'יישאר')} בפנים כי ${reason[grade===5?4:5]}.`);
    }
    const world=worlds[(round-1)%3];
    return {level:{id:prefix,title:world[2],titleHe:world[1],subtitle:`Grade ${grade} · Round ${round}`,
      subtitleHe:`כיתה ${grade} · סבב ${round}`,theme:world[0],grade,challenges},
      mazeSeed:mix(seed^roundHash^0xa531f879),layoutVariant:(mix(seed)+round-1)%3};
  }
  window.WORDWAYS_ENDLESS=Object.freeze({makeRound,normalizeGrade,normalizeSeed,normalizeRound});
})();
