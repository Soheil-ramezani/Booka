import { defineStore } from 'pinia'
export const useBookStore = defineStore('BooksList', {
    state: () => ({
        Books: [
            {
                id: 1,
                name: "The Silent Patient",
                author: "Alex Michaelides",
                imageUrl:
                    "https://m.media-amazon.com/images/I/91BbLCJOruL._AC_UY327_FMwebp_QL65_.jpg",
                summary:
                    "Alicia Berenson’s life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London’s most desirable areas. One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word.",
                price: 32,
            },
            {
                id: 2,
                name: "Where the Crawdads Sing",
                author: "Delia Owens",
                imageUrl:
                    "https://m.media-amazon.com/images/I/81O1oy0y9eL._AC_UF1000,1000_QL80_.jpg",
                summary:
                    "For years, rumors of the “Marsh Girl” have haunted Barkley Cove, a quiet town on the North Carolina coast. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark, the so-called Marsh Girl. But Kya is not what they say. Sensitive and intelligent, she has survived for years alone in the marsh that she calls home, finding friends in the gulls and lessons in the sand. Then the time comes when she yearns to be touched and loved. When two young men from town become intrigued by her wild beauty, Kya opens herself to a new life—until the unthinkable happens.",
                price: 56,
            },
            {
                id: 3,
                name: "Atomic Habits",
                author: "James Clear",
                imageUrl:
                    "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg",
                summary:
                    "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
                price: 24,
            },
            {
                id: 4,
                name: "The Midnight Library",
                author: "Matt Haig",
                imageUrl:
                    "https://m.media-amazon.com/images/I/81YzHKeWq7L._AC_UF1000,1000_QL80_.jpg",
                summary:
                    "A novel about a library between life and death where each book represents a different life path. \n\nWinner of the Goodreads Choice Award for Fiction | A Good Morning America Book Club Pick | Independent (London) Ten Best Books of the Year\n\nSomewhere out beyond the edge of the universe there is a library that contains an infinite number of books, each one the story of another reality. One tells the story of your life as it is, along with another book for the other life you could have lived if you had made a different choice at any point in your life. While we all wonder how our lives might have been, what if you had the chance to go to the library and see for yourself? Would any of these other lives truly be better?",
                price: 34,
            },
            {
                id: 5,
                name: "Educated",
                author: "Tara Westover",
                imageUrl:
                    "https://m.media-amazon.com/images/I/61xta2jWBBL._AC_UY327_FMwebp_QL65_.jpg",
                summary:
                    "#1 NEW YORK TIMES, WALL STREET JOURNAL, AND BOSTON GLOBE BESTSELLER • One of the most acclaimed books of our time: an unforgettable memoir about a young woman who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.\n\nNAMED ONE OF THE TEN BEST BOOKS OF THE YEAR BY THE NEW YORK TIMES BOOK REVIEW • ONE OF PRESIDENT BARACK OBAMA’S FAVORITE BOOKS OF THE YEAR • BILL GATES’S HOLIDAY READING LIST • A KIRKUS REVIEWS BEST NONFICTION BOOK OF THE CENTURY • FINALIST: National Book Critics Circle’s Award In Autobiography and John Leonard Prize For Best First Book • PEN/Jean Stein Book Award • Los Angeles Times Book Prize",
                price: 60,
            },
            {
                id: 6,
                name: "Project Hail Mary",
                author: "Andy Weir",
                imageUrl:
                    "https://m.media-amazon.com/images/I/91O-uZgXpyL._AC_UY327_FMwebp_QL65_.jpg",
                summary:
                    "A sci-fi novel about a lone astronaut who must save the earth from an alien threat.\n\nTHE #1 NEW YORK TIMES BESTSELLER FROM THE AUTHOR OF THE MARTIAN • Soon to be a major motion picture starring Ryan Gosling, directed by Phil Lord and Christopher Miller, with a screenplay by Drew Goddard\n\nFrom the author of The Martian, a lone astronaut must save the earth from disaster in this “propulsive” (Entertainment Weekly), cinematic thriller full of suspense, humor, and fascinating science.",
                price: 71,
            },
            {
                id: 7,
                name: "The Four Winds",
                author: "Kristin Hannah",
                imageUrl:
                    "https://m.media-amazon.com/images/I/71b86Ngu0KL._AC_UY327_FMwebp_QL65_.jpg",
                summary:
                    "A historical novel set during the Great Depression about a woman's struggle to survive.From the number-one bestselling author of The Nightingale and The Great Alone comes a powerful American epic about love and heroism and hope, set during the Great Depression, a time when the country was in crisis and at war with itself, when millions were out of work and even the land seemed to have turned against them.",
                price: 24,
            },
            {
                id: 8,
                name: "The Vanishing Half",
                author: "Brit Bennett",
                imageUrl:
                    "https://m.media-amazon.com/images/I/61wvPTKenCL._AC_UY327_FMwebp_QL65_.jpg",
                summary:
                    "ONE OF BARACK OBAMA'S FAVORITE BOOKS OF THE YEAR\n\nNAMED A BEST BOOK OF 2020 BY THE NEW YORK TIMES • THE WASHINGTON POST • NPR • PEOPLE • TIME MAGAZINE • VANITY FAIR • GLAMOUR",
                price: 54,
            },
            {
                id: 9,
                name: "Dune",
                author: "Frank Herbert",
                imageUrl:
                    "https://m.media-amazon.com/images/I/71-1WBgjGoL._AC_UY327_FMwebp_QL65_.jpg",
                summary:
                    "Frank Herbert’s classic masterpiece—a triumph of the imagination and one of the bestselling science fiction novels of all time.\nSet on the desert planet Arrakis, Dune is the story of Paul Atreides—who would become known as Muad'Dib—and of a great family's ambition to bring to fruition mankind's most ancient and unattainable dream.",
                price: 31,
            },
            {
                id: 10,
                name: "The Song of Achilles",
                author: "Madeline Miller",
                imageUrl:
                    "https://m.media-amazon.com/images/I/51iDejsms3L._AC_UY327_FMwebp_QL65_.jpg",
                summary:
                    "“At once a scholar’s homage to The Iliad and startlingly original work of art by an incredibly talented new novelist….A book I could not put down.”\n—Ann Patchett\n\nMary Renault lives again!” declares Emma Donoghue, author of Room, referring to The Song of Achilles, Madeline Miller’s thrilling, profoundly moving, and utterly unique retelling of the legend of Achilles and the Trojan War...",
                price: 29,
            },
            {
                id: 11,
                name: "The First Witch of Boston",
                author: " Andrea Catalano ",
                imageUrl: "https://m.media-amazon.com/images/I/81Bkz7QofTL._SY466_.jpg",
                summary: "A gripping and intimate novel based on the true story of Margaret Jones, the first woman to be found guilty of witchcraft in seventeenth-century Massachusetts.\n\nMassachusetts Bay Colony, 1646. Thomas and Margaret Jones arrive from England to build a life in the New World. Though of differing temperaments, cautious Thomas and fiery Margaret, a healer, are bound by a love that has lasted decades. With a child on the way, their new beginning promises only blessings...",
                price: 17
            },
            {
                id: 12,
                name: "Deadwood: Gold, Guns, and Greed in the American West",
                author: "Peter Cozzens",
                imageUrl: "https://m.media-amazon.com/images/I/916+6uFm9EL._SY466_.jpg",
                summary: "The true story of the Black Hills gold rush settlement once described as “the most diabolical town on earth” and of its most colorful cast of characters, from Wild Bill Hickok to Calamity Jane to Al Swearingen and Sheriff Seth Bullock.\nIn these pungent pages, you can smell the whiskey, the gunsmoke, the horse lather, the gold dust, and the mining chemicals . . . A fine non-fiction narrative that's as alluring as its subject. —Hampton Sides\nIf you thought HBO’s television series of the same name was hyperbolic, buckle in . . . The TV characters were all real and they’re all here . . . Milch’s Deadwood is Shakespearean; Cozzens’s is all verifiable fact, yet it loses nothing in the straighter telling . . . [A] fast-paced and unbelievable-if-it-weren't-true story.--Carl Hoffman, The Washington Post...",
                price: 18
            },
            {
                id: 13,
                name: "Lions of the West: Heroes and Villains of the Westward Expansion",
                author: "Robert Morgan",
                imageUrl: "https://m.media-amazon.com/images/I/81pkl39IQQL._SY466_.jpg",
                summary: 'From the New York Times–bestselling author who "should be declared a national treasure . . . a classic in the study of American westward expansion" (The Charlotte Observer).\n\nFrom Thomas Jefferson\'s birth in 1743 to the California Gold Rush in 1849, America\'s westward expansion comes to life in the hands of a writer fascinated by the way individual lives link up, illuminate one another, and collectively impact history.\n\nJefferson, a naturalist and visionary, dreamed that the United States would stretch across the North American continent, from ocean to ocean. The account of how that dream became reality unfolds in the stories of Jefferson and nine other Americans whose adventurous spirits and lust for land pushed the westward boundaries: Andrew Jackson, John "Johnny Appleseed" Chapman, David Crockett, Sam Houston, James K. Polk, Winfield Scott, Kit Carson, Nicholas Trist, and John Quincy Adams...',
                price: 12
            },
            {
                id: 14,
                name: "The 7 Habits of Highly Effective People: The Infographics Edition",
                author: "Stephen R Covey",
                imageUrl: "https://m.media-amazon.com/images/I/710e2r4iKML._SY466_.jpg",
                summary: "The infographics edition of this classic success guide presents Dr. Covey's timeless wisdom in visually powerful, highly readable graphics.\n\nDr. Stephen R. Covey's The 7 Habits of Highly Effective People is one of the most inspiring and impactful books ever written. Since it was first published in 1989, it has helped tens of millions of people transform their lives for the better.Now you can learn critical lessons about the habits of successful people in an infographics format that makes it easy for you to apply Dr. Covey's 7 Habits...",
                price: 15
            },
            {
                id: 15,
                name: "The Sweaty Startup: How to Get Rich Doing Boring Things",
                author: "Nick Huber",
                imageUrl: "https://m.media-amazon.com/images/I/815CW6t0mKL._SY466_.jpg",
                summary: "Filled with common sense and practical, actionable, advice, Nick Huber’s book reveals that you don’t have to be a genius with a world-changing idea to build a business empire and become a multi-millionaire.\n\nBusiness media, television and movies, and top college courses all tell entrepreneurs the same thing: To succeed in business, you need to have a revolutionary idea. To them, success is about changing the world through constant innovation. But the truth is, 99.999 percent of businesses that pursue this strategy will fail...",
                price:20
            }
            // ... (continuing with IDs 11-30)

            // Example of how to continue (just showing the pattern for the next few)
            /*
      {
        id: 11,
        name: "Book Name",
        author: "Author Name",
        imageUrl: "Amazon image URL",
        summary: "Book summary"
      },
      ...
    */
        ],
    }),
    actions: {
        
    
    }

})