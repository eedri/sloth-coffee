/* All content lives here so it is easy to edit: questions, drinks, roast lines.
   Traits: fruity, spicy, choc, nutty, fresh, wild. */
window.SLOTH_DATA = {
  questions: [
    {
      id: "type",
      title: "איזה ברנר אתם?",
      hint: "בלי לשקר. העצלן ראה אתכם במרתון הסלפי אתמול.",
      options: [
        { id: "pony", label: "ספרקל פוני: הבגדים הגיעו משיין, הסלפי כבר עלה", w: { fruity: 2, fresh: 1 } },
        { id: "mapatz", label: "מפ״צ: הגעתי חודש לפני ובניתי את העיר", w: { nutty: 2, choc: 1 } },
        { id: "psych", label: "פסיכונאוט: ראיתי צבעים שעוד אין להם שם", w: { wild: 2, fruity: 1 } },
        { id: "party", label: "חיית מסיבות: עוד סט אחד ואז לישון (שקר)", w: { wild: 2, spicy: 1 } },
        { id: "spirit", label: "רוחני: התאחדתי עם המדבר, הוא יודע את שמי", w: { fresh: 2, spicy: 1 } },
        { id: "builder", label: "בונה אמנות: זיפ-טייז בכיס, אבק בריסים", w: { choc: 1, nutty: 1, spicy: 1 } },
        { id: "virgin", label: "פעם ראשונה: למה כולם מחבקים אותי?", w: { fruity: 1, nutty: 1 } }
      ]
    },
    {
      id: "day",
      title: "כמה זמן אתם כבר בפלאיה?",
      hint: "בזמן פלאיה, לא בזמן דיפולט.",
      options: [
        { id: "d1", label: "יום ראשון. עוד יש לי שפתיים לחות", w: { fresh: 1 } },
        { id: "d3", label: "יום שלישי. האבק כבר חלק מהאישיות", w: { spicy: 1, choc: 1 } },
        { id: "d5", label: "יום חמישי. איבדתי נעל ואת המושג זמן", w: { wild: 1, choc: 1 } },
        { id: "forever", label: "מאוגוסט. אני לא בפלאיה, אני הפלאיה", w: { nutty: 1, choc: 1 } }
      ]
    },
    {
      id: "sleep",
      title: "כמה ישנתם הלילה?",
      hint: "לישון על הפלאיה זה כמו לישון בתוך מלחייה.",
      options: [
        { id: "aircon", label: "שמונה שעות, באוהל עם מזגן", w: { fruity: 1, fresh: 1 } },
        { id: "didge", label: "שלוש שעות, ומישהו ניגן דיג'רידו", w: { nutty: 1, spicy: 1 } },
        { id: "sunrise", label: "לא ישנתי. הייתי בזריחה", w: { wild: 1, choc: 1 } },
        { id: "artcar", label: "נרדמתי על ארט קאר והתעוררתי בקמפ אחר", w: { wild: 2 } }
      ]
    },
    {
      id: "need",
      title: "מה אתם צריכים עכשיו?",
      hint: "זה מכריע אם תקבלו קפה חם או קוקטייל.",
      options: [
        { id: "brain", label: "להחזיר את המוח לגוף", kind: "filter", w: {} },
        { id: "shade", label: "צל, כיסא, ואפס אחריות", kind: "filter", w: { nutty: 1 } },
        { id: "sunset", label: "משהו קר לפני השקיעה", kind: "cocktail", w: { fresh: 1 } },
        { id: "night", label: "לפתוח את הלילה", kind: "cocktail", w: { wild: 1 } }
      ]
    },
    {
      id: "flavor",
      title: "איזה טעם מתאים לאאורה שלכם?",
      hint: "בחירה אחת. אנחנו מאמינים בכם, בערך.",
      options: [
        { id: "fruity", label: "פירותי וחמצמץ, כמו הדרמה בקמפ", w: { fruity: 2 } },
        { id: "spicy", label: "תבלינים, כמו שיחה עם השכנים בארבע בבוקר", w: { spicy: 2 } },
        { id: "choc", label: "שוקולד, כי מגיע לכם", w: { choc: 2 } },
        { id: "nutty", label: "אגוזי וקלאסי, כמו הוותיק שבא כל שנה מ-2014", w: { nutty: 2 } },
        { id: "fresh", label: "רענן ועשבוני, כמו המקלחת שלא הייתה לכם", w: { fresh: 2 } }
      ]
    },
    {
      id: "alcohol",
      title: "ומה עם אלכוהול?",
      hint: "חל על הקוקטיילים. בקפה החם יש רק טיפה-שתיים של ביטר.",
      options: [
        { id: "gin", label: "עם ג'ין. השתתפות רדיקלית" },
        { id: "nogin", label: "זירו: סירופ ג'וניפר. הכבד ביקש חופש" }
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
      virgin: "כולם מחבקים כי הם שמחים שבאתם. גם אנחנו. לאט."
    },
    day: {
      d1: "יום ראשון: עוד יש לחות בעור ותקווה בעיניים.",
      d3: "יום שלישי: האבק כבר מכיר אתכם בשם.",
      d5: "יום חמישי: אתם מדברים עם האבק, והוא עונה.",
      forever: "מאוגוסט: הדיפולט שלח מכתב, הוא מתגעגע."
    }
  },

  ui: {
    brand: "קפה עצלן",
    slogan: "הקפה הכי איטי בפלאיה",
    welcomeText: "שש שאלות. אפס לחץ. אנחנו לא ממהרים, אתם גם לא.",
    start: "יאללה, לאט",
    back: "חזרה",
    progress: "שאלה {n} מתוך {total}",
    resultIntro: "העצלן החליט",
    showBar: "תגידו לבר את השם או תראו את המסך",
    again: "עוד סיבוב (לאט)",
    tagGin: "עם ג'ין",
    tagNoGin: "בלי אלכוהול",
    tagCoffeeOnly: "קפה חם",
    bittersNote: "בביטר יש טיפה-שתיים של אלכוהול. מי שמקפיד, שיגיד לבר.",
    cookieLabel: "מומלץ לצד זה:"
  }
};
