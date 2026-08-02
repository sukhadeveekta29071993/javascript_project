const quizData = [

    // ==================== HTML ====================

    {
        question: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "High Text Machine Language",
        c: "Hyperlinks Text Mark Language",
        d: "Home Tool Markup Language",
        correct: "a",
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        a: "<link>",
        b: "<a>",
        c: "<href>",
        d: "<url>",
        correct: "b",
    },
    {
        question: "Which HTML tag is used to display an image?",
        a: "<image>",
        b: "<img>",
        c: "<picture>",
        d: "<src>",
        correct: "b",
    },
    {
        question: "Which attribute is used to specify the image path?",
        a: "href",
        b: "src",
        c: "link",
        d: "path",
        correct: "b",
    },
    {
        question: "Which tag is used for the largest heading?",
        a: "<heading>",
        b: "<h6>",
        c: "<h1>",
        d: "<head>",
        correct: "c",
    },
    {
        question: "Which tag is used to create an unordered list?",
        a: "<ol>",
        b: "<ul>",
        c: "<li>",
        d: "<list>",
        correct: "b",
    },
    {
        question: "Which HTML element is used to create a form?",
        a: "<input>",
        b: "<form>",
        c: "<fieldset>",
        d: "<formdata>",
        correct: "b",
    },
    {
        question: "Which attribute provides alternative text for an image?",
        a: "title",
        b: "alt",
        c: "src",
        d: "text",
        correct: "b",
    },
    {
        question: "Which tag is used to create a table row?",
        a: "<td>",
        b: "<th>",
        c: "<tr>",
        d: "<row>",
        correct: "c",
    },
    {
        question: "Which HTML5 tag is used to define navigation links?",
        a: "<navigate>",
        b: "<navigation>",
        c: "<nav>",
        d: "<menu>",
        correct: "c",
    },
    {
        question: "Which tag is used to create a paragraph?",
        a: "<paragraph>",
        b: "<p>",
        c: "<para>",
        d: "<text>",
        correct: "b",
    },
    {
        question: "Which tag is used to create a line break?",
        a: "<break>",
        b: "<lb>",
        c: "<br>",
        d: "<line>",
        correct: "c",
    },
    {
        question: "Which HTML attribute is used to open a link in a new tab?",
        a: "target=\"_blank\"",
        b: "new=\"tab\"",
        c: "open=\"new\"",
        d: "target=\"new\"",
        correct: "a",
    },
    {
        question: "Which tag is used to define a table header?",
        a: "<thead>",
        b: "<th>",
        c: "<header>",
        d: "<td>",
        correct: "b",
    },
    {
        question: "Which HTML element is used to embed a video?",
        a: "<media>",
        b: "<movie>",
        c: "<video>",
        d: "<mp4>",
        correct: "c",
    },


    // ==================== CSS ====================

    {
        question: "What does CSS stand for?",
        a: "Computer Style Sheets",
        b: "Cascading Style Sheets",
        c: "Creative Style Sheets",
        d: "Colorful Style Sheets",
        correct: "b",
    },
    {
        question: "Which CSS property is used to change text color?",
        a: "font-color",
        b: "text-color",
        c: "color",
        d: "foreground",
        correct: "c",
    },
    {
        question: "Which property is used to change the background color?",
        a: "bgcolor",
        b: "background-color",
        c: "background-style",
        d: "color-background",
        correct: "b",
    },
    {
        question: "Which CSS property is used to make text bold?",
        a: "font-style",
        b: "font-weight",
        c: "text-weight",
        d: "bold",
        correct: "b",
    },
    {
        question: "Which property is used to change the font size?",
        a: "font-size",
        b: "text-size",
        c: "font-height",
        d: "text-font",
        correct: "a",
    },
    {
        question: "Which property adds space inside an element?",
        a: "margin",
        b: "padding",
        c: "spacing",
        d: "border",
        correct: "b",
    },
    {
        question: "Which property adds space outside an element?",
        a: "padding",
        b: "margin",
        c: "spacing",
        d: "outside",
        correct: "b",
    },
    {
        question: "Which CSS property is used to create a flex container?",
        a: "display: block",
        b: "display: inline",
        c: "display: flex",
        d: "display: table",
        correct: "c",
    },
    {
        question: "Which property controls the stacking order of elements?",
        a: "stack-order",
        b: "position",
        c: "z-index",
        d: "layer",
        correct: "c",
    },
    {
        question: "Which property is used to make an element completely transparent?",
        a: "visibility",
        b: "display",
        c: "opacity",
        d: "transparent",
        correct: "c",
    },
    {
        question: "Which CSS property is used to change the font family?",
        a: "font-family",
        b: "font-type",
        c: "text-family",
        d: "family",
        correct: "a",
    },
    {
        question: "Which CSS property is used to align text?",
        a: "text-position",
        b: "text-align",
        c: "align-text",
        d: "font-align",
        correct: "b",
    },
    {
        question: "Which value of position makes an element stay fixed on the screen?",
        a: "absolute",
        b: "relative",
        c: "fixed",
        d: "static",
        correct: "c",
    },
    {
        question: "Which CSS property is used to add rounded corners?",
        a: "corner-radius",
        b: "border-radius",
        c: "radius",
        d: "border-corner",
        correct: "b",
    },
    {
        question: "Which CSS property is used to control the size of an element?",
        a: "size",
        b: "dimension",
        c: "width and height",
        d: "element-size",
        correct: "c",
    },


    // ==================== JAVASCRIPT ====================

    {
        question: "Which of the following is a JavaScript data type?",
        a: "Number",
        b: "Float",
        c: "Decimal",
        d: "Character",
        correct: "a",
    },
    {
        question: "Which keyword is used to declare a block-scoped variable?",
        a: "var",
        b: "let",
        c: "variable",
        d: "define",
        correct: "b",
    },
    {
        question: "Which keyword is used to declare a constant?",
        a: "let",
        b: "var",
        c: "constant",
        d: "const",
        correct: "d",
    },
    {
        question: "Which method is used to print something in the console?",
        a: "print()",
        b: "log()",
        c: "console.log()",
        d: "echo()",
        correct: "c",
    },
    {
        question: "What is the correct syntax to create a function in JavaScript?",
        a: "function = myFunc()",
        b: "function myFunc()",
        c: "create function myFunc()",
        d: "func myFunc()",
        correct: "b",
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        a: "#",
        b: "//",
        c: "<!--",
        d: "/* */",
        correct: "b",
    },
    {
        question: "What will typeof null return?",
        a: "object",
        b: "null",
        c: "undefined",
        d: "number",
        correct: "a",
    },
    {
        question: "Which method adds an element to the end of an array?",
        a: "push()",
        b: "pop()",
        c: "shift()",
        d: "unshift()",
        correct: "a",
    },
    {
        question: "Which method removes the last element from an array?",
        a: "shift()",
        b: "remove()",
        c: "pop()",
        d: "delete()",
        correct: "c",
    },
    {
        question: "Which operator checks both value and data type?",
        a: "==",
        b: "=",
        c: "===",
        d: "!=",
        correct: "c",
    },
    {
        question: "Which method converts a JSON string into a JavaScript object?",
        a: "JSON.parse()",
        b: "JSON.stringify()",
        c: "JSON.convert()",
        d: "JSON.object()",
        correct: "a",
    },
    {
        question: "Which method converts a JavaScript object into a JSON string?",
        a: "JSON.parse()",
        b: "JSON.stringify()",
        c: "JSON.convert()",
        d: "JSON.toString()",
        correct: "b",
    },
    {
        question: "Which method creates a new array by transforming each element?",
        a: "filter()",
        b: "reduce()",
        c: "map()",
        d: "forEach()",
        correct: "c",
    },
    {
        question: "Which function executes code after a specified delay?",
        a: "setInterval()",
        b: "setTimeout()",
        c: "delay()",
        d: "wait()",
        correct: "b",
    },
    {
        question: "Which keyword is used to handle errors in JavaScript?",
        a: "error-catch",
        b: "try-catch",
        c: "handle-error",
        d: "catch-error",
        correct: "b",
    },


    // ==================== ANGULAR ====================

    {
        question: "What is Angular?",
        a: "A JavaScript library",
        b: "A CSS framework",
        c: "A TypeScript-based web application framework",
        d: "A database",
        correct: "c",
    },
    {
        question: "Which language is primarily used for Angular development?",
        a: "Java",
        b: "Python",
        c: "TypeScript",
        d: "PHP",
        correct: "c",
    },
    {
        question: "Which command is used to create a new Angular application?",
        a: "ng create app",
        b: "ng new app-name",
        c: "angular new app",
        d: "npm create angular",
        correct: "b",
    },
    {
        question: "Which decorator is used to define an Angular component?",
        a: "@Component",
        b: "@NgModule",
        c: "@Injectable",
        d: "@Directive",
        correct: "a",
    },
    {
        question: "Which decorator is used to define an injectable service?",
        a: "@Component",
        b: "@Injectable",
        c: "@Service",
        d: "@Provider",
        correct: "b",
    },
    {
        question: "Which directive is used for conditional rendering in Angular?",
        a: "*ngFor",
        b: "*ngIf",
        c: "*ngSwitch",
        d: "*ngCondition",
        correct: "b",
    },
    {
        question: "Which directive is used to loop through a collection?",
        a: "*ngIf",
        b: "*ngFor",
        c: "*ngLoop",
        d: "*ngEach",
        correct: "b",
    },
    {
        question: "Which Angular feature is used for two-way data binding?",
        a: "[]",
        b: "()",
        c: "[()]",
        d: "{}",
        correct: "c",
    },
    {
        question: "Which directive is commonly used for two-way binding?",
        a: "ngModel",
        b: "ngValue",
        c: "ngBind",
        d: "ngFormValue",
        correct: "a",
    },
    {
        question: "Which decorator is used to pass data from parent to child?",
        a: "@Output",
        b: "@Input",
        c: "@Inject",
        d: "@ViewChild",
        correct: "b",
    },
    {
        question: "Which decorator is used to send data from child to parent?",
        a: "@Input",
        b: "@Output",
        c: "@Injectable",
        d: "@Host",
        correct: "b",
    },
    {
        question: "Which class is used to emit custom events in Angular?",
        a: "EventEmitter",
        b: "EventManager",
        c: "ObservableEvent",
        d: "Emitter",
        correct: "a",
    },
    {
        question: "Which RxJS type is commonly used for asynchronous data streams?",
        a: "PromiseOnly",
        b: "Observable",
        c: "AsyncClass",
        d: "StreamObject",
        correct: "b",
    },
    {
        question: "Which lifecycle hook runs when a component is initialized?",
        a: "ngOnDestroy()",
        b: "ngOnInit()",
        c: "ngAfterViewInit()",
        d: "ngDoCheck()",
        correct: "b",
    },
    {
        question: "Which lifecycle hook runs before a component is destroyed?",
        a: "ngOnInit()",
        b: "ngAfterViewInit()",
        c: "ngOnDestroy()",
        d: "ngAfterContentInit()",
        correct: "c",
    },
    {
        question: "Which Angular service is used to make HTTP requests?",
        a: "HttpClient",
        b: "HttpService",
        c: "ApiClient",
        d: "RequestService",
        correct: "a",
    },
    {
        question: "Which feature is used to load Angular modules or components only when needed?",
        a: "Lazy Loading",
        b: "Eager Loading",
        c: "Static Loading",
        d: "Direct Loading",
        correct: "a",
    },
    {
        question: "Which Angular feature is used to define navigation between views?",
        a: "Angular Forms",
        b: "Angular Router",
        c: "Angular HTTP",
        d: "Angular Compiler",
        correct: "b",
    },
    {
        question: "Which file traditionally contains Angular route configuration?",
        a: "app.component.html",
        b: "app-routing.module.ts",
        c: "index.html",
        d: "angular.json",
        correct: "b",
    },
    {
        question: "Which decorator is used to define an Angular directive?",
        a: "@Component",
        b: "@Directive",
        c: "@Pipe",
        d: "@Injectable",
        correct: "b",
    }
];

const quiz = document.getElementById('quiz');
const answerElement = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deSelectData();
    const newQuizData = quizData[currentQuiz];
    questionElement.innerText  = newQuizData.question;
    a_text.innerText = newQuizData.a;
    b_text.innerText = newQuizData.b;
    c_text.innerText = newQuizData.c;
    d_text.innerText = newQuizData.d;
}

function deSelectData(){
    answerElement.forEach(ans => ans.checked = false);
}

function getSelect() {
    let answer;
    answerElement.forEach((ansEle)=>{
        if (ansEle.checked) {
            answer = ansEle.id;
        }
    })
    return answer;
}

submit.addEventListener("click", function(){
    const answer = getSelect();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        }else if (currentQuiz === quizData.length) {
            quiz.innerHTML = `<h2>You answered all question . Thank you</h2>`
        } else{
        quiz.innerHTML = `<h2>You answered is correctly at score ${score}/${quizData.length} question</h2>`
    }
    }
})