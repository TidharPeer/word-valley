/* Beginner English challenges. `answer` is a zero-based options index. */
window.LESSONS = [
  {
    id: 'forest',
    title: 'Forest of Words',
    subtitle: 'Find useful words along the woodland trail.',
    theme: 'forest',
    challenges: [
      {
        id: 'forest-1', type: 'vocabulary',
        prompt: 'You are thirsty after walking. What can you drink?',
        options: ['A stone', 'Water', 'A shoe', 'A leaf'], answer: 1,
        explanation: 'Water is a drink. We drink water when we are thirsty.'
      },
      {
        id: 'forest-2', type: 'grammar',
        prompt: 'Choose the word that completes the sentence: “The bird ___ small.”',
        options: ['are', 'am', 'is', 'be'], answer: 2,
        explanation: 'Use “is” with one bird: “The bird is small.”'
      },
      {
        id: 'forest-3', type: 'listening',
        prompt: 'Listen to the sentence. What color is the bag?',
        speak: 'My bag is green.',
        options: ['Red', 'Blue', 'Yellow', 'Green'], answer: 3,
        explanation: 'The sentence says, “My bag is green.”'
      },
      {
        id: 'forest-4', type: 'vocabulary',
        prompt: 'The trail is dark at night. Which word means the opposite of “dark”?',
        options: ['Bright', 'Cold', 'Slow', 'Quiet'], answer: 0,
        explanation: '“Bright” means full of light. It is the opposite of “dark.”'
      }
    ]
  },
  {
    id: 'castle',
    title: 'Castle of Sentences',
    subtitle: 'Build clear sentences to unlock the castle.',
    theme: 'castle',
    challenges: [
      {
        id: 'castle-1', type: 'grammar',
        prompt: 'Complete the sentence: “I have ___ apple for lunch.”',
        options: ['a', 'an', 'two', 'many'], answer: 1,
        explanation: 'Use “an” before the vowel sound at the start of “apple”: “an apple.”'
      },
      {
        id: 'castle-2', type: 'vocabulary',
        prompt: 'A visitor says, “Thank you for helping me.” Choose a polite reply.',
        options: ['Good night.', 'I am hungry.', 'You’re welcome.', 'My name is Sam.'], answer: 2,
        explanation: '“You’re welcome” is a polite reply when someone thanks you.'
      },
      {
        id: 'castle-3', type: 'listening',
        prompt: 'Listen to the sentence. How many keys does the speaker have?',
        speak: 'I have three keys.',
        options: ['One', 'Two', 'Four', 'Three'], answer: 3,
        explanation: 'The speaker says, “I have three keys.”'
      },
      {
        id: 'castle-4', type: 'grammar',
        prompt: 'Choose the correct sentence about two friends.',
        options: ['They are happy.', 'They is happy.', 'They am happy.', 'They be happy.'], answer: 0,
        explanation: 'Use “are” with “they”: “They are happy.”'
      }
    ]
  },
  {
    id: 'sky',
    title: 'Sky Island Quest',
    subtitle: 'Use your English to reach the island in the clouds.',
    theme: 'sky',
    challenges: [
      {
        id: 'sky-1', type: 'vocabulary',
        prompt: 'You arrive at the island at 8 in the morning. Which greeting fits?',
        options: ['Good night!', 'Good morning!', 'Good evening!', 'Goodbye!'], answer: 1,
        explanation: '“Good morning” is a greeting for the morning.'
      },
      {
        id: 'sky-2', type: 'grammar',
        prompt: 'Complete the sentence about a daily habit: “She ___ to school every day.”',
        options: ['walk', 'walking', 'walks', 'to walk'], answer: 2,
        explanation: 'In the present simple, add “s” with “she”: “She walks to school every day.”'
      },
      {
        id: 'sky-3', type: 'listening',
        prompt: 'Listen to the instruction. Where should you put the book?',
        speak: 'Put the book under the chair.',
        options: ['On the chair', 'Behind the door', 'In the bag', 'Under the chair'], answer: 3,
        explanation: 'The instruction says, “Put the book under the chair.” “Under” means below.'
      },
      {
        id: 'sky-4', type: 'grammar',
        prompt: 'You want to learn the pilot’s name. Choose the correct question.',
        options: ['What is your name?', 'Where is your name?', 'How many is your name?', 'When is your name?'], answer: 0,
        explanation: 'Ask “What is your name?” to learn someone’s name.'
      }
    ]
  }
];

// Hebrew support and progressively harder curricula for school grades 3–6.
(() => {
  const base = window.LESSONS;
  const he3 = [
    ['אחרי הליכה אתם צמאים. מה אפשר לשתות?', 'אנחנו שותים מים כשאנחנו צמאים.', ['אבן','מים','נעל','עלה']],
    ['בחרו את המילה שמשלימה את המשפט על הציפור.', 'הציפור קטנה.', ['are','am','is','be']],
    ['האזינו. מה צבע התיק?', 'התיק שלי ירוק.', ['אדום','כחול','צהוב','ירוק']],
    ['בלילה השביל חשוך. מה ההפך מהמילה dark?', 'bright = מואר; dark = חשוך.', ['מואר','קר','איטי','שקט']],
    ['השלימו את המשפט: יש לי תפוח לארוחת הצהריים.', 'יש לי תפוח לארוחת הצהריים.', ['a','an','שניים','רבים']],
    ['מבקר מודה לכם על העזרה. בחרו תשובה מנומסת.', 'תודה על העזרה. — בבקשה.', ['לילה טוב.','אני רעב/ה.','בבקשה.','קוראים לי סם.']],
    ['האזינו. כמה מפתחות יש לדובר?', 'יש לי שלושה מפתחות.', ['אחד','שניים','ארבעה','שלושה']],
    ['בחרו את המשפט הנכון על שני חברים.', 'הם שמחים.', ['הם שמחים.','משפט לא תקין','משפט לא תקין','משפט לא תקין']],
    ['הגעתם לאי בשמונה בבוקר. איזו ברכה מתאימה?', 'בבוקר אומרים: בוקר טוב.', ['לילה טוב!','בוקר טוב!','ערב טוב!','להתראות!']],
    ['השלימו את המשפט על הרגל יומיומי.', 'היא הולכת לבית הספר בכל יום.', ['walk','walking','walks','to walk']],
    ['האזינו להוראה. היכן להניח את הספר?', 'הניחו את הספר מתחת לכיסא.', ['על הכיסא','מאחורי הדלת','בתיק','מתחת לכיסא']],
    ['אתם רוצים לדעת את שם הטייס. בחרו את השאלה המתאימה.', 'מה שמך?', ['מה שמך?','היכן השם שלך?','כמה השם שלך?','מתי השם שלך?']]
  ];
  base.flatMap(l => l.challenges).forEach((c,i) => {
    const h=he3[i]; c.promptHe=h[0]; c.translationHe=h[1];
    c.optionTranslations=h[2]; c.optionsHe=h[2];
    c.explanationHe=h[1]; if(c.speak)c.speakTranslationHe=h[1];
  });
  // Row fields: type, prompt, options, answer, explanation, Hebrew prompt,
  // target translation, option translations, optional speech text.
  const rows = {
    4: [
      ['grammar','Complete: “My brother ___ football every Friday.”',['play','plays','playing','to play'],1,'Use “plays” with “my brother” (he) for a regular habit.','השלימו את המשפט על הרגל קבוע.','אחי משחק כדורגל בכל יום שישי.',['play','plays','playing','to play']],
      ['vocabulary','We eat breakfast in the morning. Which meal do we usually eat in the evening?',['Breakfast','Lunch','Dinner','A snack'],2,'Dinner is the usual evening meal.','איזו ארוחה אוכלים בדרך כלל בערב?','ארוחת ערב היא dinner.',['ארוחת בוקר','ארוחת צהריים','ארוחת ערב','חטיף']],
      ['listening','Listen. Where is the cat?',['On the bed','Under the table','Behind the door','In the box'],0,'The speaker says the cat is on the bed.','האזינו. היכן החתול?','החתול נמצא על המיטה.',['על המיטה','מתחת לשולחן','מאחורי הדלת','בקופסה'],'The cat is on the bed.'],
      ['grammar','Complete: “We ___ like cold soup.”',['is not','does not','are not','do not'],3,'Use “do not” with “we” before the verb “like.”','השלימו את משפט השלילה.','אנחנו לא אוהבים מרק קר.',['is not','does not','are not','do not']],
      ['vocabulary','The library is quiet. What does “quiet” mean?',['Very noisy','Making little noise','Very hot','Moving fast'],1,'A quiet place has little noise.','מה פירוש המילה quiet?','בספרייה שקט.',['רועש מאוד','כמעט ללא רעש','חם מאוד','נע במהירות']],
      ['grammar','Complete: “___ your sister read every night?”',['Do','Is','Does','Are'],2,'Use “Does” to ask about a habit with “your sister” (she).','השלימו את השאלה על הרגל קבוע.','האם אחותך קוראת בכל ערב?',['Do','Is','Does','Are']],
      ['listening','Listen. What does Ben take to school?',['A red pencil','A green ruler','A blue bag','A yellow hat'],2,'Ben takes a blue bag to school.','האזינו. מה בן לוקח לבית הספר?','בן לוקח תיק כחול לבית הספר.',['עיפרון אדום','סרגל ירוק','תיק כחול','כובע צהוב'],'Ben takes a blue bag to school.'],
      ['grammar','A ball is inside a box. Complete: “The ball is ___ the box.”',['in','under','behind','above'],0,'“In” means inside.','כדור נמצא בתוך קופסה. השלימו את המשפט.','הכדור בתוך הקופסה.',['בתוך','מתחת','מאחורי','מעל']],
      ['vocabulary','You need to cross a river without getting wet. Which structure can you walk across?',['A cloud','A pillow','A cup','A bridge'],3,'A bridge lets people cross over a river.','באיזה מבנה אפשר לחצות נהר בהליכה בלי להירטב?','אפשר לחצות את הנהר על גשר.',['ענן','כרית','כוס','גשר']],
      ['grammar','Complete: “The children ___ in the park on Sundays.”',['runs','run','running','to run'],1,'Use “run” with the plural subject “the children.”','השלימו את המשפט על הילדים.','הילדים רצים בפארק בימי ראשון.',['runs','run','running','to run']],
      ['listening','Listen. When does the shop open?',['At seven','At ten','At nine','At eight'],3,'The shop opens at eight in the morning.','האזינו. באיזו שעה החנות נפתחת?','החנות נפתחת בשמונה בבוקר.',['בשבע','בעשר','בתשע','בשמונה'],'The shop opens at eight in the morning.'],
      ['grammar','Complete: “There ___ two birds in the tree.”',['is','am','are','be'],2,'Use “are” because “two birds” is plural.','השלימו את המשפט על שתי הציפורים.','יש שתי ציפורים על העץ.',['is','am','are','be']]
    ],
    5: [
      ['grammar','Complete: “Yesterday, I ___ my grandmother.”',['visit','visited','visiting','visits'],1,'“Yesterday” signals the past. The past form of “visit” is “visited.”','השלימו את המשפט בזמן עבר.','אתמול ביקרתי אצל סבתא שלי.',['visit','visited','visiting','visits']],
      ['vocabulary','Maya missed the bus, so she walked to school. Why did Maya walk?',['She lost her shoes.','The school was closed.','She missed the bus.','She wanted a sandwich.'],2,'The sentence says that missing the bus was the reason she walked.','קראו את המשפט. מדוע מאיה הלכה ברגל?','מאיה פספסה את האוטובוס ולכן הלכה לבית הספר ברגל.',['היא איבדה את הנעליים.','בית הספר היה סגור.','היא פספסה את האוטובוס.','היא רצתה כריך.']],
      ['listening','Listen. What did Tom buy?',['A notebook','A sandwich','A ticket','A jacket'],0,'Tom bought a notebook at the shop.','האזינו. מה טום קנה?','טום קנה מחברת בחנות.',['מחברת','כריך','כרטיס','מעיל'],'Yesterday, Tom bought a notebook at the shop.'],
      ['grammar','Complete: “We ___ to the beach last Saturday.”',['go','goes','going','went'],3,'“Went” is the past form of “go.”','השלימו את המשפט על שבת שעברה.','הלכנו לחוף בשבת שעברה.',['go','goes','going','went']],
      ['vocabulary','“Please return the book tomorrow.” What does “return” mean here?',['Read quickly','Give back','Write in','Throw away'],1,'To return a book means to give it back.','מה פירוש return במשפט על הספר?','בבקשה החזירו את הספר מחר.',['לקרוא במהירות','להחזיר','לכתוב בתוך','לזרוק']],
      ['grammar','Complete: “They did not ___ the movie.”',['watched','watches','watch','watching'],2,'After “did not,” use the base form: “watch.”','השלימו את משפט השלילה בעבר.','הם לא צפו בסרט.',['watched','watches','watch','watching']],
      ['listening','Listen. Why did Sara stay at home?',['She was ill.','She missed the train.','She lost her bag.','She was waiting for a friend.'],0,'Sara stayed at home because she was ill.','האזינו. מדוע שרה נשארה בבית?','שרה נשארה בבית כי הייתה חולה.',['היא הייתה חולה.','היא פספסה את הרכבת.','היא איבדה את התיק.','היא חיכתה לחברה.'],'Sara stayed at home because she was ill.'],
      ['grammar','Complete: “___ you finish your homework yesterday?”',['Do','Does','Are','Did'],3,'Use “Did” to ask about a completed action in the past.','השלימו את השאלה על אתמול.','האם סיימת את שיעורי הבית אתמול?',['Do','Does','Are','Did']],
      ['vocabulary','Leo packed an umbrella because the weather forecast said rain. What did he expect?',['Snow','Rain','Strong sunshine','A hot desert'],1,'The forecast said rain, so Leo expected rain.','קראו. לאיזה מזג אוויר ליאו ציפה?','ליאו ארז מטרייה כי התחזית אמרה שירד גשם.',['שלג','גשם','שמש חזקה','מדבר חם']],
      ['grammar','Complete: “There ___ a small lake here ten years ago.”',['were','is','was','are'],2,'Use “was” for one lake in the past.','השלימו את המשפט על העבר.','היה כאן אגם קטן לפני עשר שנים.',['were','is','was','are']],
      ['listening','Listen. What happened first?',['They ate lunch.','They went home.','They played a game.','They visited the museum.'],3,'They visited the museum before eating lunch.','האזינו. מה קרה קודם?','קודם ביקרנו במוזיאון, ואחר כך אכלנו ארוחת צהריים.',['הם אכלו צהריים.','הם חזרו הביתה.','הם שיחקו משחק.','הם ביקרו במוזיאון.'],'First, we visited the museum. Then, we ate lunch.'],
      ['grammar','Complete: “I ___ my keys, so I could not open the door.”',['lost','lose','loses','losing'],0,'“Lost” is the past form of “lose.”','השלימו את המשפט בזמן עבר.','איבדתי את המפתחות ולכן לא יכולתי לפתוח את הדלת.',['lost','lose','loses','losing']]
    ],
    6: [
      ['grammar','Complete: “Tomorrow, we ___ visit the science museum.”',['did','will','were','have'],1,'“Will” plus a base verb describes a future action.','השלימו את המשפט על מחר.','מחר נבקר במוזיאון המדע.',['did','will','were','have']],
      ['vocabulary','The mountain path was steep, so the hikers climbed slowly. What does “steep” mean?',['Completely flat','Full of shops','Rising sharply','Very crowded'],2,'A steep path rises sharply and can be hard to climb.','מה פירוש steep בתיאור השביל?','השביל בהר היה תלול ולכן המטיילים טיפסו לאט.',['שטוח לחלוטין','מלא חנויות','עולה בשיפוע חד','צפוף מאוד']],
      ['listening','Listen. Why will the class take the train?',['It is faster than the bus.','The bus is cheaper.','The station is closed.','The train leaves later.'],0,'The class will take the train because it is faster.','האזינו. מדוע הכיתה תיסע ברכבת?','ניסע ברכבת כי היא מהירה יותר מהאוטובוס.',['היא מהירה יותר מהאוטובוס.','האוטובוס זול יותר.','התחנה סגורה.','הרכבת יוצאת מאוחר יותר.'],'We will take the train because it is faster than the bus.'],
      ['grammar','Complete: “An elephant is ___ than a rabbit.”',['heavy','heaviest','heavily','heavier'],3,'The comparative form of “heavy” is “heavier.” Use it with “than.”','השלימו את ההשוואה בין פיל לארנב.','פיל כבד יותר מארנב.',['heavy','heaviest','heavily','heavier']],
      ['vocabulary','Nora saved her work before the battery ran out. What did she prevent?',['A brighter screen','Losing her work','A longer battery life','Opening a new file'],1,'Saving the work kept it from being lost when the battery ran out.','קראו. מה נורה מנעה בכך ששמרה את העבודה?','נורה שמרה את העבודה לפני שהסוללה התרוקנה.',['מסך בהיר יותר','אובדן העבודה','חיי סוללה ארוכים יותר','פתיחת קובץ חדש']],
      ['grammar','Complete: “This puzzle is ___ difficult than the last one.”',['most','much','more','many'],2,'Use “more difficult than” to compare two puzzles.','השלימו את ההשוואה בין שתי חידות.','החידה הזאת קשה יותר מהחידה הקודמת.',['most','much','more','many']],
      ['listening','Listen. What should the students bring?',['Only a notebook','A warm coat','A packed lunch','Swimming clothes'],2,'The students should bring a packed lunch because the café will be closed.','האזינו. מה התלמידים צריכים להביא?','בית הקפה יהיה סגור, אז הביאו ארוחת צהריים מהבית.',['רק מחברת','מעיל חם','ארוחת צהריים מהבית','בגדי ים'],'The café will be closed tomorrow, so please bring a packed lunch.'],
      ['grammar','Complete: “If it rains tomorrow, we ___ stay indoors.”',['will','did','were','have'],0,'Use “will” for the future result: “we will stay indoors.”','השלימו את התוצאה האפשרית בעתיד.','אם ירד גשם מחר, נישאר בפנים.',['will','did','were','have']],
      ['vocabulary','The instructions were clear; everyone understood what to do. Which word best replaces “clear” here?',['Wet','Hidden','Silent','Easy to understand'],3,'Clear instructions are easy to understand.','איזה ביטוי יכול להחליף את clear במשפט?','ההוראות היו ברורות; כולם הבינו מה לעשות.',['רטוב','מוסתר','שקט','קל להבנה']],
      ['grammar','Complete: “Of these three routes, this one is the ___.”',['shorter','shortest','short','more short'],1,'Use the superlative “shortest” to compare three routes.','השלימו את המשפט על שלושה מסלולים.','מבין שלושת המסלולים, המסלול הזה הוא הקצר ביותר.',['shorter','shortest','short','more short']],
      ['listening','Listen. What will happen before the picnic?',['They will eat lunch.','They will return home.','They will visit the lake.','They will buy a boat.'],2,'They will visit the lake first, before having a picnic.','האזינו. מה יקרה לפני הפיקניק?','קודם נבקר באגם, ואחר כך נערוך פיקניק.',['הם יאכלו צהריים.','הם יחזרו הביתה.','הם יבקרו באגם.','הם יקנו סירה.'],'First, we will visit the lake. After that, we will have a picnic.'],
      ['grammar','Complete: “You ___ need an umbrella tomorrow; the forecast says no rain.”',['will','did','are','will not'],3,'“Will not need” expresses that an umbrella will not be necessary.','השלימו את המשפט לפי התחזית ללא גשם.','לא תצטרכו מטרייה מחר; לפי התחזית לא ירד גשם.',['will','did','are','will not']]
    ]
  };
  const titlesHe=['יער המילים','טירת המשפטים','האי בשמיים'];
  const subtitlesHe=['מגלים מילים לאורך שביל היער.','משלימים משפטים כדי לפתוח את שערי הטירה.','משתמשים באנגלית כדי להגיע לאי בעננים.'];
  base.forEach((l,i)=>{l.titleHe=titlesHe[i];l.subtitleHe=subtitlesHe[i];l.grade=3;});
  const grades={3:base};
  Object.entries(rows).forEach(([grade, list])=>{
    grades[grade]=base.map((level,world)=>({
      id:level.id,title:level.title,titleHe:titlesHe[world],subtitle:level.subtitle,subtitleHe:subtitlesHe[world],
      theme:level.theme,grade:Number(grade),
      challenges:list.slice(world*4,world*4+4).map((r,index)=>({
        id:`grade${grade}-${level.id}-${index+1}`,type:r[0],prompt:r[1],options:r[2],
        answer:r[3],explanation:r[4],promptHe:r[5],translationHe:r[6],
        explanationHe:`התשובה הנכונה: ${r[7][r[3]].replace(/[.!?]+$/, '')}. ${r[6]}`,
        optionTranslations:r[7],optionsHe:r[7],
        ...(r[8]?{speak:r[8],speakTranslationHe:r[6]}:{})
      }))
    }));
  });
  const rulesHe={
    3:{1:'עם נושא יחיד כמו הציפור משתמשים ב־is.',4:'לפני הצליל הפותח של apple משתמשים ב־an.',7:'עם they משתמשים ב־are.',9:'בהווה פשוט מוסיפים s לפועל אחרי she.',11:'כדי לשאול לשם של אדם משתמשים בשאלה What is your name?'},
    4:{0:'בהווה פשוט מוסיפים s לפועל אחרי he או נושא יחיד כמו my brother.',3:'בשלילה בהווה פשוט משתמשים ב־do not אחרי we.',5:'בשאלה בהווה פשוט משתמשים ב־Does לפני נושא כמו your sister.',7:'המילה in מציינת מיקום בתוך משהו.',9:'אחרי נושא ברבים כמו children משתמשים בצורת הבסיס run.',11:'עם שם עצם ברבים כמו two birds משתמשים ב־are.'},
    5:{0:'בזמן עבר מוסיפים ed לפועל הרגיל visit.',3:'צורת העבר של go היא went.',5:'אחרי did not משתמשים בצורת הבסיס של הפועל.',7:'בשאלה על פעולה שהסתיימה בעבר משתמשים ב־Did ובצורת הבסיס של הפועל.',9:'עם נושא יחיד בעבר משתמשים ב־was.',11:'צורת העבר של lose היא lost.'},
    6:{0:'לתיאור פעולה בעתיד משתמשים ב־will ובצורת הבסיס של הפועל.',3:'צורת ההשוואה של heavy היא heavier.',5:'בהשוואה בין שני דברים משתמשים ב־more difficult than.',7:'לתוצאה עתידית במשפט תנאי משתמשים ב־will ובצורת הבסיס.',9:'להשוואה בין שלושה מסלולים משתמשים בצורת ההפלגה shortest.',11:'שלילה בעתיד נוצרת בעזרת will not וצורת הבסיס של הפועל.'}
  };
  Object.entries(grades).forEach(([g,levels])=>levels.flatMap(l=>l.challenges).forEach((c,i)=>{
    if(rulesHe[g][i])c.explanationHe=rulesHe[g][i]+' '+c.translationHe;
  }));
  // Vary placement deterministically; the UI can keep answers stable across retries.
  Object.entries(grades).forEach(([grade,levels])=>levels.forEach((l,w)=>l.challenges.forEach((c,i)=>{
    // Grammar alternatives are word forms, so keep them in English in both views.
    if(c.type==='grammar') c.optionTranslations=c.options.slice();
    const positions=[1,3,0,2,2,0,3,1,3,1,2,0];
    const target=(positions[w*4+i]+Number(grade)-3)%4;
    const shift=(c.answer-target+4)%4;
    const rotate=a=>a.slice(shift).concat(a.slice(0,shift));
    c.options=rotate(c.options);c.optionTranslations=rotate(c.optionTranslations);
    c.optionsHe=c.optionTranslations;c.answer=(c.answer-shift+4)%4;
  })));
  window.LESSON_GRADES=grades;
  window.GRADE_LESSONS=grades;
  window.LESSONS=grades[3];
})();
