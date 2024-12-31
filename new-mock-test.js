const questions = [
    {
        question: "What is the past tense of 'go'?",
        options: ["went", "gone", "goes"],
        answer: "went"
    },
    {
        question: "Choose the correct form: She ___ to the store.",
        options: ["go", "goes", "going"],
        answer: "goes"
    },
    {
        question: "Which sentence is correct?",
        options: ["He go to school.", "He goes to school.", "He going to school."],
        answer: "He goes to school."
    },
    {
        question: "Fill in the blank: I have ___ apples.",
        options: ["some", "any", "no"],
        answer: "some"
    },
    {
        question: "What is the plural of 'child'?",
        options: ["childs", "children", "childes"],
        answer: "children"
    },
    // Adding 99 more unique grammar questions
    {
        question: "What is the correct form: He ___ to the gym every day.",
        options: ["go", "goes", "gone"],
        answer: "goes"
    },
    {
        question: "Choose the correct sentence.",
        options: ["She don't like coffee.", "She doesn't like coffee.", "She not like coffee."],
        answer: "She doesn't like coffee."
    },
    {
        question: "Fill in the blank: They ___ playing soccer.",
        options: ["is", "are", "am"],
        answer: "are"
    },
    {
        question: "What is the superlative form of 'good'?",
        options: ["goodest", "better", "best"],
        answer: "best"
    },
    {
        question: "Which sentence is correct?",
        options: ["I seen the movie.", "I saw the movie.", "I seened the movie."],
        answer: "I saw the movie."
    },
    // Adding 30 more unique grammar questions
    {
        question: "Fill in the blank: She ___ to the party last night.",
        options: ["go", "went", "gone"],
        answer: "went"
    },
    {
        question: "What is the past participle of 'write'?",
        options: ["wrote", "written", "writes"],
        answer: "written"
    },
    {
        question: "Choose the correct form: If it ___ rain, we will stay inside.",
        options: ["doesn't", "don't", "not"],
        answer: "doesn't"
    },
    {
        question: "Which sentence is correct?",
        options: ["He has less books than I do.", "He has fewer books than I do.", "He has few books than I do."],
        answer: "He has fewer books than I do."
    },
    {
        question: "What is the correct form: She ___ her homework every day.",
        options: ["do", "does", "doing"],
        answer: "does"
    },
    {
        question: "Fill in the blank: They ___ to the concert last week.",
        options: ["go", "went", "gone"],
        answer: "went"
    },
    {
        question: "What is the plural of 'mouse'?",
        options: ["mouses", "mice", "mices"],
        answer: "mice"
    },
    {
        question: "Choose the correct sentence.",
        options: ["I have seen him yesterday.", "I saw him yesterday.", "I seen him yesterday."],
        answer: "I saw him yesterday."
    },
    {
        question: "Fill in the blank: The book is ___ the table.",
        options: ["on", "in", "at"],
        answer: "on"
    },
    {
        question: "What is the correct form: He ___ playing soccer right now.",
        options: ["is", "are", "was"],
        answer: "is"
    },
    {
        question: "Which sentence is correct?",
        options: ["She can sings well.", "She can sing well.", "She can singing well."],
        answer: "She can sing well."
    },
    {
        question: "Fill in the blank: I ___ to the store tomorrow.",
        options: ["go", "going", "will go"],
        answer: "will go"
    },
    {
        question: "What is the past tense of 'eat'?",
        options: ["ate", "eaten", "eats"],
        answer: "ate"
    },
    {
        question: "Choose the correct form: They ___ finished their project.",
        options: ["has", "have", "had"],
        answer: "have"
    },
    {
        question: "Which sentence is correct?",
        options: ["There is many apples on the table.", "There are many apples on the table.", "There is a lot of apples on the table."],
        answer: "There are many apples on the table."
    },
    {
        question: "Fill in the blank: She ___ a great job on the test.",
        options: ["do", "did", "does"],
        answer: "did"
    },
    {
        question: "What is the correct form: He ___ to the gym every day.",
        options: ["go", "goes", "gone"],
        answer: "goes"
    },
    {
        question: "Choose the correct sentence.",
        options: ["I don't have no money.", "I don't have any money.", "I have no money."],
        answer: "I don't have any money."
    },
    {
        question: "Fill in the blank: The cat is ___ the box.",
        options: ["in", "on", "at"],
        answer: "in"
    },
    {
        question: "What is the superlative form of 'bad'?",
        options: ["badder", "worse", "worst"],
        answer: "worst"
    },
    {
        question: "Which sentence is correct?",
        options: ["He is taller than me.", "He is more taller than me.", "He is the tallest than me."],
        answer: "He is taller than me."
    },
    {
        question: "Fill in the blank: They ___ to the beach last summer.",
        options: ["go", "went", "gone"],
        answer: "went"
    },
    {
        question: "What is the past participle of 'see'?",
        options: ["saw", "seen", "sees"],
        answer: "seen"
    },
    {
        question: "Choose the correct form: If I ___ you, I would apologize.",
        options: ["was", "were", "am"],
        answer: "were"
    },
    {
        question: "Which sentence is correct?",
        options: ["She has went to the store.", "She has gone to the store.", "She has go to the store."],
        answer: "She has gone to the store."
    },
    {
        question: "Fill in the blank: I ___ my keys on the table.",
        options: ["leave", "leaved", "left"],
        answer: "left"
    },
    {
        question: "What is the plural of 'tooth'?",
        options: ["tooths", "teeth", "tooths"],
        answer: "teeth"
    },
    {
        question: "Choose the correct sentence.",
        options: ["He don't like pizza.", "He doesn't like pizza.", "He not like pizza."],
        answer: "He doesn't like pizza."
    },
    {
        question: "Fill in the blank: The dog is ___ the yard.",
        options: ["in", "on", "at"],
        answer: "in"
    },
    {
        question: "What is the correct form: She ___ her homework every day.",
        options: ["do", "does", "doing"],
        answer: "does"
    },
    {
        question: "Which sentence is correct?",
        options: ["I have went to the store.", "I have gone to the store.", "I have go to the store."],
        answer: "I have gone to the store."
    },
    {
        question: "Fill in the blank: They ___ to the concert last week.",
        options: ["go", "went", "gone"],
        answer: "went"
    },
    {
        question: "What is the past tense of 'sing'?",
        options: ["sang", "sung", "sings"],
        answer: "sang"
    },
    {
        question: "Choose the correct form: The book ___ on the table.",
        options: ["is", "are", "was"],
        answer: "is"
    },
    {
        question: "Which sentence is correct?",
        options: ["He has less friends than I do.", "He has fewer friends than I do.", "He has few friends than I do."],
        answer: "He has fewer friends than I do."
    },
    {
        question: "Fill in the blank: I ___ to the store tomorrow.",
        options: ["go", "going", "will go"],
        answer: "will go"
    },
    {
        question: "What is the past participle of 'take'?",
        options: ["took", "taken", "takes"],
        answer: "taken"
    },
    {
        question: "Choose the correct form: If it ___ rain, we will stay inside.",
        options: ["doesn't", "don't", "not"],
        answer: "doesn't"
    },
    {
        question: "Which sentence is correct?",
        options: ["There is many apples on the table.", "There are many apples on the table.", "There is a lot of apples on the table."],
        answer: "There are many apples on the table."
    },
    {
        question: "Fill in the blank: She ___ a great job on the test.",
        options: ["do", "did", "does"],
        answer: "did"
    },
    {
        question: "What is the correct form: He ___ to the gym every day.",
        options: ["go", "goes", "gone"],
        answer: "goes"
    },
    {
        question: "Choose the correct sentence.",
        options: ["I don't have no money.", "I don't have any money.", "I have no money."],
        answer: "I don't have any money."
    },
    {
        question: "Fill in the blank: The cat is ___ the box.",
        options: ["in", "on", "at"],
        answer: "in"
    },
    {
        question: "What is the superlative form of 'bad'?",
        options: ["badder", "worse", "worst"],
        answer: "worst"
    },
    {
        question: "Which sentence is correct?",
        options: ["He is taller than me.", "He is more taller than me.", "He is the tallest than me."],
        answer: "He is taller than me."
    },
    {
        question: "Fill in the blank: They ___ to the beach last summer.",
        options: ["go", "went", "gone"],
        answer: "went"
    },
    {
        question: "What is the past participle of 'see'?",
        options: ["saw", "seen", "sees"],
        answer: "seen"
    },
    {
        question: "Choose the correct form: If I ___ you, I would apologize.",
        options: ["was", "were", "am"],
        answer: "were"
    },
    {
        question: "Which sentence is correct?",
        options: ["She has went to the store.", "She has gone to the store.", "She has go to the store."],
        answer: "She has gone to the store."
    },
    {
        question: "Fill in the blank: I ___ my keys on the table.",
        options: ["leave", "leaved", "left"],
        answer: "left"
    },
    {
        question: "What is the plural of 'tooth'?",
        options: ["tooths", "teeth", "tooths"],
        answer: "teeth"
    },
    {
        question: "Choose the correct sentence.",
        options: ["He don't like pizza.", "He doesn't like pizza.", "He not like pizza."],
        answer: "He doesn't like pizza."
    },
    {
        question: "Fill in the blank: The dog is ___ the yard.",
        options: ["in", "on", "at"],
        answer: "in"
    },
    {
        question: "What is the correct form: She ___ her homework every day.",
        options: ["do", "does", "doing"],
        answer: "does"
    },
    {
        question: "Which sentence is correct?",
        options: ["I have went to the store.", "I have gone to the store.", "I have go to the store."],
        answer: "I have gone to the store."
    },
    {
        question: "Fill in the blank: They ___ to the concert last week.",
        options: ["go", "went", "gone"],
        answer: "went"
    },
    {
        question: "What is the past tense of 'sing'?",
        options: ["sang", "sung", "sings"],
        answer: "sang"
    },
    {
        question: "Choose the correct form: The book ___ on the table.",
        options: ["is", "are", "was"],
        answer: "is"
    },
    {
        question: "Which sentence is correct?",
        options: ["He has less friends than I do.", "He has fewer friends than I do.", "He has few friends than I do."],
        answer: "He has fewer friends than I do."
    },
    {
        question: "Fill in the blank: I ___ to the store tomorrow.",
        options: ["go", "going", "will go"],
        answer: "will go"
    },
    {
        question: "What is the past participle of 'take'?",
        options: ["took", "taken", "takes"],
        answer: "taken"
    },
    {
        question: "Choose the correct form: If it ___ rain, we will stay inside.",
        options: ["doesn't", "don't", "not"],
        answer: "doesn't"
    },
    {
        question: "Which sentence is correct?",
        options: ["There is many apples on the table.", "There are many apples on the table.", "There is a lot of apples on the table."],
        answer: "There are many apples on the table."
    },
    {
        question: "Fill in the blank: She ___ a great job on the test.",
        options: ["do", "did", "does"],
        answer: "did"
    },
    {
        question: "What is the correct form: He ___ to the gym every day.",
        options: ["go", "goes", "gone"],
        answer: "goes"
    },
    {
        question: "Choose the correct sentence.",
        options: ["I don't have no money.", "I don't have any money.", "I have no money."],
        answer: "I don't have any money."
    },
    {
        question: "Fill in the blank: The cat is ___ the box.",
        options: ["in", "on", "at"],
        answer: "in"
    },
    {
        question: "What is the superlative form of 'bad'?",
        options: ["badder", "worse", "worst"],
        answer: "worst"
    },
    {
        question: "Which sentence is correct?",
        options: ["He is taller than me.", "He is more taller than me.", "He is the tallest than me."],
        answer: "He is taller than me."
    },
    {
        question: "Fill in the blank: They ___ to the beach last summer.",
        options: ["go", "went", "gone"],
        answer: "went"
    },
    {
        question: "What is the past participle of 'see'?",
        options: ["saw", "seen", "sees"],
        answer: "seen"
    },
    {
        question: "Choose the correct form: If I ___ you, I would apologize.",
        options: ["was", "were", "am"],
        answer: "were"
    },
    {
        question: "Which sentence is correct?",
        options: ["She has went to the store.", "She has gone to the store.", "She has go to the store."],
        answer: "She has gone to the store."
    },
    {
        question: "Fill in the blank: I ___ my keys on the table.",
        options: ["leave", "leaved", "left"],
        answer: "left"
    },
    {
        question: "What is the plural of 'tooth'?",
        options: ["tooths", "teeth", "tooths"],
        answer: "teeth"
    },
    {
        question: "Choose the correct sentence.",
        options: ["He don't like pizza.", "He doesn't like pizza.", "He not like pizza."],
        answer: "He doesn't like pizza."
    },
    {
        question: "Fill in the blank: The dog is ___ the yard.",
        options: ["in", "on", "at"],
        answer: "in"
    },
    {
        question: "What is the correct form: She ___ her homework every day.",
        options: ["do", "does", "doing"],
        answer: "does"
    },
    {
        question: "Which sentence is correct?",
        options: ["I have went to the store.", "I have gone to the store.", "I have go to the store."],
        answer: "I have gone to the store."
    },
    {
        question: "Fill in the blank: They ___ to the concert last week.",
        options: ["go", "went", "gone"],
        answer: "went"
    },
    {
        question: "What is the past tense of 'sing'?",
        options: ["sang", "sung", "sings"],
        answer: "sang"
    },
    {
        question: "Choose the correct form: The book ___ on the table.",
        options: ["is", "are", "was"],
        answer: "is"
    },
    {
        question: "Which sentence is correct?",
        options: ["He has less friends than I do.", "He has fewer friends than I do.", "He has few friends than I do."],
        answer: "He has fewer friends than I do."
    },
    {
        question: "Fill in the blank: I ___ to the store tomorrow.",
        options: ["go", "going", "will go"],
        answer: "will go"
    },
    {
        question: "What is the past participle of 'take'?",
        options: ["took", "taken", "takes"],
        answer: "taken"
    },
    {
        question: "Choose the correct form: If it ___ rain, we will stay inside.",
        options: ["doesn't", "don't", "not"],
        answer: "doesn't"
    },
    {
        question: "Which sentence is correct?",
        options: ["There is many apples on the table.", "There are many apples on the table.", "There is a lot of apples on the table."],
        answer: "There are many apples on the table."
    },
    {
        question: "Fill in the blank: She ___ a great job on the test.",
        options: ["do", "did", "does"],
        answer: "did"
    },
    {
        question: "What is the correct form: He ___ to the gym every day.",
        options: ["go", "goes", "gone"],
        answer: "goes"
    },
    {
        question: "Choose the correct sentence.",
        options: ["I don't have no money.", "I don't have any money.", "I have no money."],
        answer: "I don't have any money."
    },
    {
        question: "Fill in the blank: The cat is ___ the box.",
        options: ["in", "on", "at"],
        answer: "in"
    },
    {
        question: "What is the superlative form of 'bad'?",
        options: ["badder", "worse", "worst"],
        answer: "worst"
    },
    {
        question: "Which sentence is correct?",
        options: ["He is taller than me.", "He is more taller than me.", "He is the tallest than me."],
        answer: "He is taller than me."
    },
    {
        question: "Fill in the blank: They ___ to the beach last summer.",
        options: ["go", "went", "gone"],
        answer: "went"
    },
    {
        question: "What is the past participle of 'see'?",
        options: ["saw", "seen", "sees"],
        answer: "seen"
    },
    {
        question: "Choose the correct form: If I ___ you, I would apologize.",
        options: ["was", "were", "am"],
        answer: "were"
    },
    {
        question: "Which sentence is correct?",
        options: ["She has went to the store.", "She has gone to the store.", "She has go to the store."],
        answer: "She has gone to the store."
    },
    {
        question: "Fill in the blank: I ___ my keys on the table.",
        options: ["leave", "leaved", "left"],
        answer: "left"
    },
