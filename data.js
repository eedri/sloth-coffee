/* All content lives here so it is easy to edit: questions, drinks, roast lines.
   Traits: fruity, spicy, choc, nutty, fresh, wild.

   Each question has a pool of options; every session shows `show` of them, shuffled.
   - always: true   -> option is always shown.
   - groupBy: "x"   -> show the same number from each value of option.x
                       (need: 2 filter + 2 cocktail; flavor: one per flavor).
   Every "type" and "day" option needs a roast line below. */
window.SLOTH_DATA = {
  questions: [
    {
      id: "type",
      title: "איזה ברנר אתם?",
      hint: "בלי לשקר. העצלן ראה אתכם במרתון הסלפי אתמול.",
      show: 5,
      options: [
        { id: "pony", always: true, label: "ספרקל פוני: הבגדים הגיעו משיין, הסלפי כבר עלה", w: { fruity: 2, fresh: 1 } },
        { id: "mapatz", always: true, label: "מפ״צ: הגעתי חודש לפני ובניתי את העיר", w: { nutty: 2, choc: 1 } },
        { id: "psych", label: "פסיכונאוט: ראיתי צבעים שעוד אין להם שם", w: { wild: 2, fruity: 1 } },
        { id: "party", label: "חיית מסיבות: עוד סט אחד ואז לישון (שקר)", w: { wild: 2, spicy: 1 } },
        { id: "spirit", label: "רוחני: התאחדתי עם המדבר, הוא יודע את שמי", w: { fresh: 2, spicy: 1 } },
        { id: "builder", label: "בונה אמנות: זיפ-טייז בכיס, אבק בריסים", w: { choc: 1, nutty: 1, spicy: 1 } },
        { id: "virgin", label: "פעם ראשונה: למה כולם מחבקים אותי?", w: { fruity: 1, nutty: 1 } },
        { id: "veteran", label: "ותיק: פעם, ב-2014, זה היה אמיתי", w: { nutty: 2, choc: 1 } },
        { id: "gifter", label: "גיפטר: יש לי מחזיק מפתחות בעבודת יד לכל אחד", w: { fruity: 1, nutty: 1, fresh: 1 } },
        { id: "ranger", label: "ריינג'ר: ראיתי הכול, ואין לי שאלות", w: { choc: 1, spicy: 1, fresh: 1 } },
        { id: "campmom", label: "ההורה של הקמפ: יש לי קרם הגנה, פלסטר ואלקטרוליטים", w: { nutty: 1, fresh: 1, fruity: 1 } },
        { id: "lost", label: "אבוד: יצאתי לקנות קרח לפני יומיים", w: { wild: 2, fresh: 1 } },
        { id: "moop", label: "צייד מופ: אספתי שלושה נצנצים בדרך לפה", w: { fresh: 1, nutty: 1, spicy: 1 } }
      ]
    },
    {
      id: "day",
      title: "כמה זמן אתם כבר בפלאיה?",
      hint: "בזמן פלאיה, לא בזמן דיפולט.",
      show: 4,
      options: [
        { id: "build", label: "שבוע הבנייה. עוד לא ראיתי אף אחד בבגדים נקיים", w: { nutty: 1, choc: 1 } },
        { id: "d1", label: "יום ראשון. עוד יש לי שפתיים לחות", w: { fresh: 1 } },
        { id: "d3", label: "יום שלישי. האבק כבר חלק מהאישיות", w: { spicy: 1, choc: 1 } },
        { id: "d5", label: "יום חמישי. איבדתי נעל ואת המושג זמן", w: { wild: 1, choc: 1 } },
        { id: "burnnight", label: "ליל השריפה. שמרתי כוח (לא באמת)", w: { wild: 1, spicy: 1 } },
        { id: "exodus", label: "יום אחרון. כבר מקפלים, אבל לאט", w: { fresh: 1, nutty: 1 } },
        { id: "nocount", label: "אין לי מושג. ספרתי לפי זריחות ואז הפסקתי", w: { wild: 2 } },
        { id: "forever", label: "מאוגוסט. אני לא בפלאיה, אני הפלאיה", w: { nutty: 1, choc: 1 } }
      ]
    },
    {
      id: "sleep",
      title: "כמה ישנתם הלילה?",
      hint: "לישון על הפלאיה זה כמו לישון בתוך מלחייה.",
      show: 4,
      options: [
        { id: "aircon", label: "שמונה שעות, באוהל עם מזגן", w: { fruity: 1, fresh: 1 } },
        { id: "didge", label: "שלוש שעות, ומישהו ניגן דיג'רידו", w: { nutty: 1, spicy: 1 } },
        { id: "sunrise", label: "לא ישנתי. הייתי בזריחה", w: { wild: 1, choc: 1 } },
        { id: "artcar", label: "נרדמתי על ארט קאר והתעוררתי בקמפ אחר", w: { wild: 2 } },
        { id: "shadecar", label: "שעתיים, בצל של ארט קאר שנסע", w: { wild: 1, fresh: 1 } },
        { id: "hammock", label: "בערסל של קמפ זר. הם לא יודעים", w: { fruity: 1, wild: 1 } },
        { id: "earplugs", label: "עם אטמי אוזניים, ועדיין שמעתי טכנו", w: { spicy: 1, choc: 1 } },
        { id: "dome", label: "בכיפה גאודזית עם עוד עשרים איש", w: { nutty: 1, wild: 1 } },
        { id: "queue", label: "בעמידה, בתור לשירותים", w: { choc: 1, spicy: 1 } }
      ]
    },
    {
      id: "need",
      title: "מה אתם צריכים עכשיו?",
      hint: "זה מכריע אם תקבלו קפה חם או קוקטייל.",
      show: 4,
      groupBy: "kind",
      options: [
        { id: "brain", label: "להחזיר את המוח לגוף", kind: "filter", w: {} },
        { id: "shade", label: "צל, כיסא, ואפס אחריות", kind: "filter", w: { nutty: 1 } },
        { id: "human", label: "להפוך שוב לבן אדם", kind: "filter", w: { choc: 1 } },
        { id: "talk", label: "שיחה עמוקה עם זר על טעם של קפה", kind: "filter", w: { nutty: 1 } },
        { id: "hug", label: "חיבוק חם, אבל בכוס", kind: "filter", w: { choc: 1 } },
        { id: "sunset", label: "משהו קר לפני השקיעה", kind: "cocktail", w: { fresh: 1 } },
        { id: "night", label: "לפתוח את הלילה", kind: "cocktail", w: { wild: 1 } },
        { id: "cool", label: "משהו שיקרר לי את הנשמה", kind: "cocktail", w: { fresh: 1 } },
        { id: "bubbles", label: "בועות. הרבה בועות", kind: "cocktail", w: { fruity: 1 } },
        { id: "fuel", label: "דלק לרחבה", kind: "cocktail", w: { wild: 1 } }
      ]
    },
    {
      id: "flavor",
      title: "איזה טעם מתאים לאאורה שלכם?",
      hint: "בחירה אחת. אנחנו מאמינים בכם, בערך.",
      show: 5,
      groupBy: "f",
      options: [
        { id: "fruity", f: "fruity", label: "פירותי וחמצמץ, כמו הדרמה בקמפ", w: { fruity: 2 } },
        { id: "fruity2", f: "fruity", label: "פירותי, כמו הצבעים בתלבושת שלכם", w: { fruity: 2 } },
        { id: "spicy", f: "spicy", label: "תבלינים, כמו שיחה עם השכנים בארבע בבוקר", w: { spicy: 2 } },
        { id: "spicy2", f: "spicy", label: "מתובלן וחם, כמו חול בצהריים", w: { spicy: 2 } },
        { id: "choc", f: "choc", label: "שוקולד, כי מגיע לכם", w: { choc: 2 } },
        { id: "choc2", f: "choc", label: "מריר-מתוק, כמו הפרידה מהפלאיה", w: { choc: 2 } },
        { id: "nutty", f: "nutty", label: "אגוזי וקלאסי, כמו הוותיק שבא כל שנה מ-2014", w: { nutty: 2 } },
        { id: "nutty2", f: "nutty", label: "קרמלי ואגוזי, כמו מתנה שהכנתם בבית", w: { nutty: 2 } },
        { id: "fresh", f: "fresh", label: "רענן ועשבוני, כמו המקלחת שלא הייתה לכם", w: { fresh: 2 } },
        { id: "fresh2", f: "fresh", label: "הדרי ועשבוני, כמו משב רוח בצהריים (נדיר)", w: { fresh: 2 } }
      ]
    }
  ],

  /* kind: "filter" (hot V60 with a bitters upgrade) or "cocktail" (Desert Tonic). */
  drinks: [
    { id: "spice-route", kind: "filter", name: "דרך התבלינים", en: "Spice Route",
      tagline: "הל ופרחוניות. קפה שמגיע בהליכה.",
      bitters: "ביטר הל", t: { spicy: 3, fruity: 1 } },
    { id: "black-forest", kind: "filter", name: "יער שחור", en: "Black Forest",
      tagline: "שוקולד, פירות יער וליים. חשוך, אבל עם אור בקצה.",
      bitters: "ביטר שוקולד", t: { choc: 3, fruity: 1, wild: 1 } },
    { id: "galaxy-brain", kind: "filter", name: "מוח גלקסיה", en: "Galaxy Brain",
      tagline: "פסיפלורה וליצ'י. הקפה שחושב שהוא יודע משהו.",
      bitters: "ביטר ליים", t: { fruity: 3, wild: 2, fresh: 1 } },
    { id: "lost-weekend", kind: "filter", name: "סוף שבוע אבוד", en: "Lost Weekend",
      tagline: "פירות יבשים, יין ופייצ'וד. אנחנו לא שופטים.",
      bitters: "ביטר פייצ'וד'ס", t: { fruity: 1, wild: 3, spicy: 1 } },
    { id: "old-fashioned", kind: "filter", name: "פילטר אולד פשן", en: "Old Fashioned Filter",
      tagline: "אגוזי, קרמי, יציב. הדוד של הקפה.",
      bitters: "ביטר אנגוסטורה", t: { nutty: 3, choc: 1 } },
    { id: "honey-trap", kind: "filter", name: "מלכודת דבש", en: "Honey Trap",
      tagline: "קרמל ופירות גלעין. נראה תמים.",
      bitters: "ביטר קפה", t: { nutty: 2, fruity: 2 } },

    { id: "tonic-cascara", kind: "cocktail", name: "מדבר טוניק · קסקרה", en: "The Whole Cherry",
      tagline: "פירותי, חמצמץ, כמעט תה. הכול יוצא מאותו צמח, כולל החרטות.",
      syrup: "סירופ קסקרה", bitters: "ביטר הל", cookie: "ביסקוטי פירות יער",
      t: { fruity: 3, wild: 1 } },
    { id: "tonic-orange", kind: "cocktail", name: "מדבר טוניק · תפוז-הל", en: "Copper Hour",
      tagline: "שמן הדרים ותבלין, חם ועגול. מנומס, עד הלגימה השנייה.",
      syrup: "סירופ תפוז-הל", bitters: "ביטר שוקולד", cookie: "סבלה שוקולד וקפה",
      t: { spicy: 2, choc: 1, fruity: 1, nutty: 1 } },
    { id: "tonic-louisa", kind: "cocktail", name: "מדבר טוניק · לואיזה", en: "Mirage",
      tagline: "הרבלי, הדרי, קריספי. אולי הוא שם ואולי לא.",
      syrup: "סירופ לואיזה", bitters: "ביטר ליים", cookie: "דיאמנט כוסמין",
      t: { fresh: 3, spicy: 1 } }
  ],

  roast: {
    type: {
      pony: "הסלפי יצא מעולה. את הכוס מחזירים לבד, זה נקרא השתתפות.",
      mapatz: "בניתם את העיר הזאת. לפחות תשתו לאט.",
      psych: "הקפה לא ישנה לכם את התודעה. הוא רק יחזיר אותה לגוף.",
      party: "הזריחה התחילה לפני שעתיים ואתם עוד עם צמיד זוהר. מכבדים.",
      spirit: "התאחדתם עם המדבר. המדבר מבקש שתשתו מים.",
      builder: "האמנות שלכם עומדת. אתם בקושי.",
      virgin: "כולם מחבקים כי הם שמחים שבאתם. גם אנחנו. לאט.",
      veteran: "כן, פעם היה יותר טוב. הקפה היה פחות טוב.",
      gifter: "נתתם מתנה לכולם. הקפה הזה הוא המתנה שלכם.",
      ranger: "שמרתם על כולם כל הלילה. עכשיו תורנו לשמור עליכם.",
      campmom: "דאגתם לכולם. מישהו שאל מה שלומכם? אנחנו שואלים.",
      lost: "הקרח בצד השני של העיר. אבל אתם כבר פה, אז שבו.",
      moop: "הפלאיה מודה לכם. היא גם מבקשת שתחזירו את הכוס."
    },
    day: {
      build: "שבוע הבנייה: עוד אין אירוע, כבר יש אבק.",
      d1: "יום ראשון: עוד יש לחות בעור ותקווה בעיניים.",
      d3: "יום שלישי: האבק כבר מכיר אתכם בשם.",
      d5: "יום חמישי: אתם מדברים עם האבק, והוא עונה.",
      burnnight: "ליל השריפה: הפסל בוער, אתם רק מתחממים.",
      exodus: "יום אחרון: הדיפולט מחכה. הוא יכול לחכות עוד קפה.",
      nocount: "יום לא ידוע: גם אנחנו לא יודעים. זה בסדר.",
      forever: "מאוגוסט: הדיפולט שלח מכתב, הוא מתגעגע."
    }
  },

  ui: {
    title: "קפה עצלן – מה לשתות?",
    brand: "קפה עצלן",
    slogan: "הקפה הכי איטי בפלאיה",
    welcomeText: "חמש שאלות. אפס לחץ. אנחנו לא ממהרים, אתם גם לא.",
    start: "יאללה, לאט",
    back: "חזרה",
    progress: "שאלה {n} מתוך {total}",
    resultIntro: "העצלן החליט",
    showBar: "תגידו לבר את השם או תראו את המסך",
    again: "עוד סיבוב (לאט)",
    tagCocktail: "קוקטייל",
    tagCoffeeOnly: "קפה חם",
    cookieLabel: "מומלץ לצד זה:",
    recipeCoffee: "קפה פילטר",
    recipeTonic: "טוניק",
    recipeSpirit: "ג'ין או סירופ ג'וניפר"
  }
};
