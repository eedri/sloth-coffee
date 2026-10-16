/* All content lives here so it is easy to edit: questions, drinks, roast lines.
   Traits: fruity, spicy, choc, nutty, fresh, wild. */
window.SLOTH_DATA = {
  questions: [
    {
      id: "mood",
      title: "איך המצב?",
      hint: "תהיו כנים. הסלות' לא שופט, הוא פשוט איטי.",
      options: [
        { id: "tired", label: "סוחב מהלילה הקודם", w: { nutty: 1, choc: 1 } },
        { id: "sparkly", label: "ברק בעיניים, גליטר על הכול", w: { fruity: 1, wild: 1 } },
        { id: "calm", label: "רגוע. חשוד ברמות", w: { fresh: 1, nutty: 1 } },
        { id: "moody", label: "קצת מלנכולי, בסטייל", w: { choc: 1, spicy: 1 } },
        { id: "chaos", label: "כאוס. אל תשאלו", w: { wild: 2 } }
      ]
    },
    {
      id: "profile",
      title: "איפה אתם על הסקאלה?",
      hint: "ספרקל פוני ⟷ מפז",
      spectrum: true,
      options: [
        { id: "1", label: "ספרקל פוני עד הסוף", w: { fruity: 2, fresh: 1 } },
        { id: "2", label: "ספרקל פוני עם רגל על הקרקע", w: { fruity: 1, fresh: 1 } },
        { id: "3", label: "באמצע. יושבים על הגדר", w: {} },
        { id: "4", label: "מפז עם לב רך", w: { nutty: 1, choc: 1 } },
        { id: "5", label: "מפז עד העצם", w: { nutty: 2, spicy: 1 } }
      ]
    },
    {
      id: "need",
      title: "מה אתם צריכים עכשיו?",
      hint: "זה מכריע אם תקבלו קפה חם או קוקטייל.",
      options: [
        { id: "wake", label: "להתעורר. בלי שאלות", kind: "filter", w: {} },
        { id: "sit", label: "לעצור, לשבת, לנשום", kind: "filter", w: {} },
        { id: "cold", label: "משהו קר ומרענן", kind: "cocktail", w: { fresh: 1 } },
        { id: "mess", label: "לעשות בלגן טוב", kind: "cocktail", w: { wild: 1 } }
      ]
    },
    {
      id: "flavor",
      title: "איזה טעם קורא לכם?",
      hint: "בחירה אחת. אנחנו מאמינים בכם.",
      options: [
        { id: "fruity", label: "פירותי וחמצמץ", w: { fruity: 2 } },
        { id: "spicy", label: "תבלינים וארומה", w: { spicy: 2 } },
        { id: "choc", label: "שוקולד, בלי התנצלויות", w: { choc: 2 } },
        { id: "nutty", label: "אגוזי, קלאסי, בלי הפתעות", w: { nutty: 2 } },
        { id: "fresh", label: "רענן, עשבוני, נקי", w: { fresh: 2 } }
      ]
    },
    {
      id: "alcohol",
      title: "ומה עם אלכוהול?",
      hint: "חל על הקוקטיילים. בקפה החם יש רק טיפה-שתיים של ביטר.",
      options: [
        { id: "gin", label: "עם ג'ין, בבקשה" },
        { id: "nogin", label: "בלי. סירופ ג'וניפר" }
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
    mood: {
      tired: "העיניים פתוחות, הנשמה בטעינה.",
      sparkly: "יש פה אנרגיה שרואים מהחלל.",
      calm: "רגוע ככה בשעה כזו? מישהו כאן יודע משהו.",
      moody: "המבט הרחוק הזה הולך מצוין עם פילטר.",
      chaos: "הכאוס מכובד. אנחנו נתאים לו כוס."
    },
    profile: {
      "1": "ספרקל פוני מוסמך: הגליטר בכיסים, בשיער, וגם בקפה.",
      "2": "נוצצים, אבל עם מפה.",
      "3": "לשבת על הגדר זו גם עמדה.",
      "4": "מפז עם לב רך: נראים קשוחים, מבקשים תוספת סירופ.",
      "5": "מפז עד העצם: הקפה לא צריך שתסבירו לו."
    }
  },

  ui: {
    brand: "קפה עצלן",
    slogan: "הקפה הכי איטי בפלאיה",
    welcomeText: "חמש שאלות. אפס לחץ. אנחנו לא ממהרים, אתם גם לא.",
    start: "יאללה, לאט",
    back: "חזרה",
    progress: "שאלה {n} מתוך {total}",
    resultIntro: "הסלות' החליט",
    showBar: "תגידו לבר את השם או תראו את המסך",
    again: "עוד סיבוב (לאט)",
    tagGin: "עם ג'ין",
    tagNoGin: "בלי אלכוהול",
    tagCoffeeOnly: "קפה חם",
    bittersNote: "בביטר יש טיפה-שתיים של אלכוהול. מי שמקפיד, שיגיד לבר.",
    cookieLabel: "מומלץ לצד זה:"
  }
};
