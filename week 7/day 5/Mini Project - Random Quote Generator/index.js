my_quotes = [
    {
        id: 0 ,
        author: "Benjamin Franklin",
        quote: "The problem of today's internet is that people don't check the information sources",
        likes: 0
    },
    {
        id: 1 ,
        author: "Forest Gump",
        quote: "Life is like a box of chocolates: you never know what're you going to pick next",
        likes: 0
    },
    {
        id: 2 ,
        author: "Bender",
        quote: "Kiss my shiny metal ass",
        likes: 0
    },
    {
        id: 3 ,
        author: "Rick Sanchez",
        quote: "PICKLE RICK!!!",
        likes: 0
    },
    {
        id: 4 ,
        author: "Neil Armstrong",
        quote: "Good luck mr. Gorsky",
        likes: 0
    },
    {
        id: 5 ,
        author: "Franklin D. Roosevelt",
        quote: "The only thing we have to fear is fear itself.",
        likes: 0
    },
    {
        id: 6 ,
        author: "Neil Armstrong",
        quote: "One small step for man, a huge jump for mankind",
        likes: 0
    },
    
];
// ⬆ default quotes ⬆

// ⬇  global variables ⬇
let author_choice;
let all_quotes = [];
let global_index = 0;
let author = "";
let quote = "";
let all_options_set = new Set() // set of unique authors
// ⬆ global variables ⬆

// ⬇ generate a random quote and creating Like! button ⬇
function generage_quote(){
    let quote_section = document.getElementById("quote_section");
    let random_num = Math.floor(Math.random()*my_quotes.length);
    let quote_div = document.createElement("div");
    let like_btn = document.createElement("button");
    like_btn.type = "button";
    like_btn.innerText = "Like!"
    like_btn.onclick = function () {
        my_quotes[random_num].likes += 1;
        console.log(my_quotes[random_num]);
    };
   
    quote_section.innerHTML = "";
    quote_div.innerText = `${my_quotes[random_num].quote}   \n  by    ${my_quotes[random_num].author}`;
    quote_section.appendChild(quote_div);
    quote_section.appendChild(like_btn);
    
    
};
// ⬆ generate a random quote and creating Like! button ⬆

// ⬇ getting input recorded ⬇
function record_quote(e) {
    quote = e.target.value;
};
function record_author(e) {
    author = e.target.value;
};
// ⬆ getting input recorded ⬆

// ⬇ submitting a new quote ⬇
function submit_quote() {
    if (quote == "" || author == ""){
        alert("can't leave empty fields")
        return;
    }
    
    // ⬇ clearing all the displays before generating a new one ⬇
    clear_div();
    for (i of document.getElementsByClassName("input_text")){
       i.value = "";
    };
    // ⬆ clearing all the displays before generating a new one ⬆

    // ⬇ check for unique authors and add an <option> ⬇
    let all_options = document.getElementsByClassName("options")
    for (let i = 0; i<all_options.length ; i++){
        all_options_set.add(all_options[i].value)
    }

    let before_set_size = all_options_set.size
    all_options_set.add(author)
    console.log(all_options_set.size);

    if (before_set_size < all_options_set.size){
        let option = document.createElement("option");
        option.class = "options"
        option.value = author;
        option.innerText = author;
        document.getElementById("select_author").appendChild(option);
    }
    // ⬆ check for unique authors and add an <option> ⬆
    
    // ⬇ adding a new quote to the main array ⬇
    my_quotes.push({
        id: my_quotes.length,
        author: author,
        quote: quote
    })
    // ⬆ adding a new quote to the main array ⬆
};
// ⬆ submitting a new quote ⬆

// ⬇ getting stats for the input quote ⬇
function get_stats() {
    if (quote == ""){
        alert("you can't leave quote field empty")
        return
    }
    let chars_total = quote.length;
    let chars_not_space = quote.replaceAll(" ", "").length;
    let words_total = quote.split(" ").length;
    console.log(`there are ${chars_total} character total, ${chars_not_space} letters and ${words_total} words`);
};
// ⬆ getting stats for the input quote ⬆

// ⬇ display quotes filtered by author and creating next and prev buttons ⬇
function select_author() {
    document.getElementById("filter_by_author").innerHTML = "";
    document.getElementById("next_prev_btns").innerHTML = "";
    author_choice = document.getElementById("select_author").value;
    
    for (let i = 0; i < my_quotes.length; i++){
        let par_filter_authors = document.createElement("p");
        if (my_quotes[i].author == author_choice){
            all_quotes.push(my_quotes[i].quote)
            par_filter_authors.innerText = my_quotes[i].quote
            document.getElementById("filter_by_author").appendChild(par_filter_authors);
            }

        };
    let previous_btn = document.createElement("button");
    previous_btn.type = "button"
    previous_btn.innerText = "Previous"
    previous_btn.onclick = function(){
        previous()
    }
    document.getElementById("next_prev_btns").appendChild(previous_btn)
        
    let next_btn = document.createElement("button");
    next_btn.type = "button"
    next_btn.innerText = "Next"
    next_btn.onclick = function(){
        next()
    }
    document.getElementById("next_prev_btns").appendChild(next_btn)
    
    global_index = 0
}
// ⬆ display quotes filtered by author and creating next and prev buttons ⬆

// ⬇ buttons next and prev functionality ⬇
function next() {
    global_index ++
    if (global_index == all_quotes.length){
        global_index = 0
    }
    document.getElementById("filter_by_author").innerHTML = "";
    let one_quote = document.createElement("p")
    one_quote.innerText = all_quotes[global_index]
    
    document.getElementById("filter_by_author").appendChild(one_quote);
    
}
function previous() {
    global_index --
    if (global_index < 0){
        global_index = all_quotes.length -1
    }
    document.getElementById("filter_by_author").innerHTML = "";
    let one_quote = document.createElement("p")
    one_quote.innerText = all_quotes[global_index]
    document.getElementById("filter_by_author").appendChild(one_quote);
}
// ⬆ buttons next and prev functionality ⬆

// ⬇ clear diaplaying fields ⬇
function clear_div() {
    document.getElementById("next_prev_btns").innerHTML = "";
    all_quotes = []
}
// ⬆ clear diaplaying fields ⬆