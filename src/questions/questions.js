const questions = [
  {
    question: "1) Semantik HTML taglarının məqsədi nədir?",
    options: [
      "Veb səhifələri stilizə etmək",
      "Əlçatanlığı və SEO-nu yaxşılaşdırmaq",
      "Skriptləri yaratmaq",
      "İstifadəçi girişini idarə etmək",
    ],
    correct: "Əlçatanlığı və SEO-nu yaxşılaşdırmaq",
  },
  {
    question:
      "2) Hansı semantik tag, naviqasiya bağlantılarını müəyyən etmək üçün istifadə olunur?",
    options: ["<nav>", "<link>", "<header>", "<section>"],
    correct: "<nav>",
  },
  {
    question: "3) img tagındakı 'alt' atributu SEO üçün nə edir?",
    options: [
      "Şəklin mənbəyini müəyyən edir",
      "Axtarış sistemləri üçün təsvir təqdim edir",
      "Şəklin ölçüsünü müəyyən edir",
      "Şəkilə keçid verir",
    ],
    correct: "Axtarış sistemləri üçün təsvir təqdim edir",
  },
  {
    question: "4) CSS `*` seçici nə edir?",
    options: [
      "Bütün elementləri seçir",
      "Heç bir elementi seçmir",
      "Yalnız div elementlərini seçir",
      "Yalnız görünən elementləri seçir",
    ],
    correct: "Bütün elementləri seçir",
  },
  {
    question: "5) Hansı daha yüksək spesifikliyə malikdir?",
    options: [
      "ID seçici",
      "Sinif seçici",
      "İkisi də eyni spesifikliyə malikdir",
      "İnline stillər",
    ],
    correct: "ID seçici",
  },
  {
    question: "6) CSS-də 'example' sinif adı ilə bir elementi necə seçirsiniz?",
    options: [".example", "#example", "example", "element.example"],
    correct: ".example",
  },
  {
    question: "7) JavaScript-də bir array yaratmağın hansı yolu doğrudur?",
    options: [
      "var arr = [];",
      "var arr = {};",
      "var arr = '';",
      "var arr = new Array();",
    ],
    correct: "var arr = [];",
  },
  {
    question: "8) Aşağıdakı kodun çıxışı nə olacaq: console.log(typeof null)?",
    options: ["'object'", "'null'", "'undefined'", "'string'"],
    correct: "'object'",
  },
  {
    question:
      "9) JSON stringini JavaScript obyektinə çevirmək üçün hansı metoddan istifadə olunur?",
    options: ["JSON.parse()", "JSON.stringify()", "eval()", "Object.from()"],
    correct: "JSON.parse()",
  },
  {
    question:
      "10) 'fruits' adında bir arrayın ilk elementinə necə daxil olursunuz?",
    options: ["fruits[1]", "fruits[0]", "fruits.first()", "fruits.get(0)"],
    correct: "fruits[0]",
  },
  {
    question: "11) Hansı metod yeni bir elementi arrayın sonuna əlavə edir?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correct: "push()",
  },
  {
    question:
      "12) JavaScript-də bir funksiyanı düzgün şəkildə necə müəyyən edirsiniz?",
    options: [
      "function myFunction() {}",
      "myFunction() = function {}",
      "function:myFunction() {}",
      "myFunction() function {}",
    ],
    correct: "function myFunction() {}",
  },
  {
    question:
      "13) JavaScript-də bir obyektin 'delete' metodundan necə istifadə edirsiniz?",
    options: [
      "delete object.property;",
      "object.delete(property);",
      "delete(object.property);",
      "object.deleteProperty(property);",
    ],
    correct: "delete object.property;",
  },
  {
    question:
      "14) JavaScript-də bir arraya yeni bir element əlavə etmək üçün hansı metoddan istifadə edirsiniz?",
    options: ["add()", "insert()", "push()", "append()"],
    correct: "push();",
  },
  {
    question: "15) React-də props-un məqsədi nədir?",
    options: [
      "Komponentin vəziyyətini idarə etmək",
      "Valideyn komponentlərindən uşaq komponentlərinə məlumat ötürmək",
      "İstifadəçi girişini idarə etmək",
      "Komponentləri yaratmaq",
    ],
    correct: "Valideyn komponentlərindən uşaq komponentlərinə məlumat ötürmək",
  },
  {
    question: "16) React komponentində vəziyyəti necə yeniləyirsiniz?",
    options: [
      "this.state = newState;",
      "this.setState(newState);",
      "updateState(newState);",
      "this.changeState(newState);",
    ],
    correct: "this.setState(newState);",
  },
  {
    question: "17) React-in 'key' prop-unun faydası nədir?",
    options: [
      "Yenidən render zamanı performansı optimallaşdırmaq",
      "Unikal komponentlər yaratmaq",
      "Vəziyyətin idarə edilməsini həyata keçirmək",
      "Stilləri müəyyən etmək",
    ],
    correct: "Yenidən render zamanı performansı optimallaşdırmaq",
  },
  {
    question:
      "18) Verilənləri çərçivə komponentində gətirmək üçün hansı lifecycle metodundan istifadə olunur?",
    options: [
      "componentDidMount()",
      "componentWillUnmount()",
      "render()",
      "getInitialState()",
    ],
    correct: "componentDidMount()",
  },
  {
    question: "19) React-də bir komponenti şərti olaraq necə render edirsiniz?",
    options: [
      "if ifadələri istifadə edərək",
      "switch ifadələri istifadə edərək",
      "ternar operatorlar istifadə edərək",
      "hamısı",
    ],
    correct: "hamısı",
  },
  {
    question: "20) React-də useEffect hook-unun məqsədi nədir?",
    options: [
      "Komponentin vəziyyətini idarə etmək",
      "Funksional komponentlərdə yan təsirləri yerinə yetirmək",
      "Hadisələri idarə etmək",
      "Yeni komponentlər yaratmaq",
    ],
    correct: "Funksional komponentlərdə yan təsirləri yerinə yetirmək",
  },
  {
    question: "21) useState hook-u nə qaytarır?",
    options: [
      "Mövcud vəziyyət və onu yeniləmək üçün bir funksiyanı ehtiva edən bir array",
      "Mövcud vəziyyəti ehtiva edən bir obyekt",
      "Vəziyyət dəyəri olan bir string",
      "Vəziyyəti təmsil edən bir ədəd",
    ],
    correct:
      "Mövcud vəziyyət və onu yeniləmək üçün bir funksiyanı ehtiva edən bir array",
  },
  {
    question: "22) TypeScript JavaScript-ə nə əlavə edir?",
    options: ["Tip annotasiyaları", "Siniflər", "Modullar", "Hamısı"],
    correct: "Hamısı",
  },
  {
    question:
      "23) TypeScript-də müəyyən bir tip ilə dəyişəni necə müəyyən edirsiniz?",
    options: [
      "let name: string;",
      "let name = string;",
      "let name: 'string';",
      "let name: String;",
    ],
    correct: "let name: string;",
  },
  {
    question:
      "24) Aşağıdakilərdən hansı TypeScript-də etibarlı bir interfeysdir?",
    options: [
      "interface Person { name: string; age: number; }",
      "interface Person { name; age; }",
      "interface Person { name: string; age: any; }",
      "interface Person = { name: string; age: number; }",
    ],
    correct: "interface Person { name: string; age: number; }",
  },
  {
    question: "25) TypeScript-də generiklərin məqsədi nədir?",
    options: [
      "Yenidən istifadə edilə bilən komponentlər yaratmaq",
      "Tip təhlükəsiz funksiyalar müəyyən etmək",
      "Dinamik tipləri idarə etmək",
      "Performansı artırmaq",
    ],
    correct: "Tip təhlükəsiz funksiyalar müəyyən etmək",
  },
];

export default questions;
